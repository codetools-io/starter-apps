const path = require('path');
const fs = require('fs-extra');
const low = require('lowdb');
const MemoryAdapter = require('lowdb/adapters/Memory');
const globby = require('globby');
const matter = require('gray-matter');
const { find } = require('lodash');
const { pluralize } = require('inflection');
const PROJECT_ROOT = path.resolve(__dirname, '../../');
const PROJECT_SRC_DIR = path.resolve(PROJECT_ROOT, './src');

function resolvePaths(db) {
  db.get('components')
    .map((component) => {
      const categoryPath = db
        .get('categories')
        .find({ id: component.categoryId })
        .get('path')
        .value();
      const modulePath = component.moduleId
        ? db
            .get('categories')
            .find({ id: component.categoryId })
            .get('path')
            .value()
        : '';

      return {
        ...component,
        path: `${categoryPath}${modulePath}${component.path}`,
      };
    })
    .write();
  db.get('modules')
    .map((modul) => {
      const categoryPath = db
        .get('categories')
        .find({ id: modul.categoryId })
        .get('path')
        .value();

      return {
        ...modul,
        path: `${categoryPath}${modul.path}`,
      };
    })
    .write();
}

function loadDocs() {
  const db = low(new MemoryAdapter());
  const docFiles = globby.sync(`${PROJECT_SRC_DIR}/**/*.mdx`);
  const themes = getThemeFiles();
  const docs = docFiles.map((docFile) => {
    const directory = path.dirname(docFile);
    const { content, data } = getDocFile(docFile);
    const files =
      data.type === 'component' ? getSourceFiles(directory, data) : null;
    const relativeDirectory = path.relative(PROJECT_SRC_DIR, directory);
    return {
      content,
      data,
      directory: relativeDirectory,
      files,
    };
  });

  function loadRelationships(item) {
    const related = Object.entries(item.data)
      .filter(([key, value]) => key.endsWith('Id'))
      .reduce((accum, [key, value]) => {
        const resourceType = key.slice(0, -2);
        const collectionName = pluralize(resourceType);
        const result = find(db.getState()[collectionName], ['data.id', value]);

        return {
          ...accum,
          [resourceType]: result,
        };
      }, {});
    return {
      ...item,
      data: {
        ...item.data,
        ...related,
      },
    };
  }

  db.defaults({
    categories: [],
    modules: [],
    components: [],
    files: [],
    themes: [],
  }).write();

  db.setState({
    categories: docs
      .filter((doc) => doc.data.type === 'category')
      .map((doc) => {
        return {
          ...doc.data,
          ...doc,
        };
      }),
    modules: docs
      .filter((doc) => doc.data.type === 'module')
      .map((doc) => {
        return {
          ...doc.data,
          ...doc,
        };
      }),
    components: docs
      .filter((doc) => doc.data.type === 'component')
      .map((component) => {
        const { files, ...rest } = component;
        return rest;
      })
      .map((doc) => {
        return {
          ...doc.data,
          ...doc,
        };
      }),
    files: docs
      .filter((doc) => doc.data.type === 'component')
      .flatMap((component) => component.files),
    themes,
  });

  db._.mixin({
    expand: function (collection, ...args) {
      return collection.map(function (item) {
        return loadRelationships(item);
      });
    },
  });

  resolvePaths(db);
  return db;
}

function getSourceFiles(directory, data) {
  const filepaths = globby.sync(`${directory}`);

  return filepaths
    .filter((filepath) => !filepath.endsWith('.mdx'))
    .filter((filepath) => !filepath.endsWith('.snap'))
    .filter((filepath) => !filepath.endsWith('.test.js'))
    .map((filepath) => {
      const content = fs.readFileSync(filepath, { encoding: 'utf8' });
      const relativeFilepath = path.relative(directory, filepath);

      return {
        content,
        filepath: relativeFilepath,
        filename: path.basename(filepath),
        directory: path.dirname(relativeFilepath),
        context: data.id,
        path: data.path,
      };
    });
}

function getThemeFiles() {
  const filepaths = globby.sync(`${PROJECT_SRC_DIR}/themes/**/*.js`);

  return filepaths
    .filter((filepath) => filepath.endsWith('.js'))
    .map((filepath) => {
      const content = fs.readFileSync(filepath, { encoding: 'utf8' });
      const relativeFilepath = path.relative(
        `${PROJECT_SRC_DIR}/themes`,
        filepath
      );

      return {
        content,
        filepath: relativeFilepath,
        filename: path.basename(filepath),
        directory: path.dirname(relativeFilepath),
      };
    });
}

function getDocFile(docPath) {
  const rawDocs = fs.readFileSync(docPath, { encoding: 'utf8' });

  return matter(rawDocs);
}

const docs = loadDocs();

module.exports = docs;
