#!/usr/bin/env node
const path = require('path');
const fs = require('fs-extra');
const { sortBy } = require('lodash');
const docs = require('./lib/docs');
const PROJECT_ROOT = path.resolve(__dirname, '../');
const PROJECT_PUBLIC_DIR = path.resolve(PROJECT_ROOT, './public');
const DATA_OUTPUT_DIR = path.resolve(PROJECT_PUBLIC_DIR, './data');

function removeExistingData() {
  fs.removeSync(DATA_OUTPUT_DIR);
}

function generateDocData() {
  try {
    const components = docs
      .get('components')
      .expand()
      .map((c) => {
        const category = c.data.category.data.path;
        const module = c.data.module ? c.data.module.data.path : '';
        const component = c.data.path;
        return {
          ...c,
          path: `${category}${module}${component}`,
        };
      })
      .value();
    const modules = docs.get('modules').value();
    const categories = docs.get('categories').value();
    components.forEach((component) => {
      const files = docs
        .get('files')
        .filter({ path: component.data.path })
        .value();
      fs.outputJSON(
        path.resolve(
          DATA_OUTPUT_DIR,
          `./files${component.path}`,
          './files.json'
        ),
        { files }
      );
    });
    fs.outputJSON(path.resolve(DATA_OUTPUT_DIR, './docs.json'), {
      components,
      modules,
      categories,
    });
  } catch (error) {
    console.log(error);
    process.exit(error);
  }
}

function generateSiteData() {
  try {
    const nav = docs
      .get('categories')
      .map((category) => {
        const components = docs
          .get('components')
          .filter(['data.categoryId', category.data.id])
          .filter((c) => !c.data.moduleId)
          .map((component) => {
            return {
              key: `${category.data.path}${component.data.path}`,
              path: `${category.data.path}${component.data.path}`,
              label: component.data.name,
              icon: component.data.icon,
            };
          })
          .value();
        const modules = docs
          .get('modules')
          .filter(['data.categoryId', category.data.id])
          .map((module) => {
            return {
              key: `${category.data.path}${module.data.path}`,
              path: `${category.data.path}${module.data.path}`,
              label: module.data.name,
              icon: module.data.icon,
              children: docs
                .get('components')
                .filter(['data.moduleId', module.data.id])
                .sortBy('data.name')
                .map((component) => {
                  return {
                    key: `${category.data.path}${module.data.path}${component.data.path}`,
                    path: `${category.data.path}${module.data.path}${component.data.path}`,
                    label: component.data.name,
                    icon: component.data.icon,
                  };
                })
                .value(),
            };
          })
          .value();

        return {
          key: `${category.data.path}`,
          path: `${category.data.path}`,
          label: category.data.name,
          children: sortBy([...components, ...modules], 'data.name'),
        };
      })
      .value();

    fs.outputJSON(path.resolve(DATA_OUTPUT_DIR, './site.json'), {
      nav,
    });
  } catch (error) {
    console.log(error);
    process.exit(error);
  }
}

function init() {
  removeExistingData();
  generateDocData();
  generateSiteData();
}

init();
