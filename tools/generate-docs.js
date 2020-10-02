#!/usr/bin/env node

const path = require('path');
const fsPromises = require('fs/promises');
const fs = require('fs-extra');
const globby = require('globby');
const matter = require('gray-matter');
const PROJECT_ROOT = path.resolve(__dirname, '../');
const PROJECT_SRC_DIR = path.resolve(PROJECT_ROOT, './src');
const PROJECT_PUBLIC_DIR = path.resolve(PROJECT_ROOT, './public');
const APPS_SRC_DIR = path.resolve(PROJECT_SRC_DIR, './apps');
const SHELLS_SRC_DIR = path.resolve(PROJECT_SRC_DIR, './shells');
const DOCS_OUTPUT_DIR = path.resolve(PROJECT_PUBLIC_DIR, './docs');
const SITE_DATA_OUTPUT_PATH = path.resolve(DOCS_OUTPUT_DIR, `./site.json`);

function getSourceFiles(directories) {
  return directories.map((directory) => {
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
          context: path.basename(directory),
        };
      });
  });
}

async function getDocs(directories) {
  try {
    const rawDocs = await Promise.all(
      directories.map((directory) => {
        return fsPromises.readFile(directory, { encoding: 'utf8' });
      })
    );
    return rawDocs.map((doc, index) => {
      return matter(doc);
    });
  } catch (error) {
    console.log(error);
    process.exit(error);
  }
}

function removeExistingDocs() {
  fs.removeSync(DOCS_OUTPUT_DIR);
}

async function generateDocs() {
  try {
    const docPaths = await globby([
      `${APPS_SRC_DIR}/**/*.mdx`,
      `${SHELLS_SRC_DIR}/**/*.mdx`,
    ]);
    const sourceFileDirectories = docPaths.map((docPath) =>
      path.resolve(docPath, '../')
    );
    const docs = await getDocs(docPaths);
    const allSourceFiles = getSourceFiles(sourceFileDirectories);

    fs.outputJSON(SITE_DATA_OUTPUT_PATH, { docs });

    docs.forEach((document) => {
      const outputDir = path.resolve(
        DOCS_OUTPUT_DIR,
        `./${document.data.category}/${document.data.slug}`
      );
      const docOutputPath = path.resolve(outputDir, './docs.mdx');
      const dataOutputPath = path.resolve(outputDir, './data.json');
      const filesOutputPath = path.resolve(outputDir, './files.json');
      const files = allSourceFiles.find((sourceFiles) => {
        return sourceFiles[0].context === document.data.componentName;
      });
      fs.outputFile(docOutputPath, document.content);
      fs.outputJson(dataOutputPath, document.data);
      fs.outputJson(filesOutputPath, { files });
    });
  } catch (error) {
    console.log(error);
    process.exit(error);
  }
}

function init() {
  removeExistingDocs();
  generateDocs();
}

init();
