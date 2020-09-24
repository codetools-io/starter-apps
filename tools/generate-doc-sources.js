#!/usr/bin/env node

const path = require('path');
const fs = require('fs-extra');

const PROJECT_ROOT = path.resolve(__dirname, '../');
const APPS_DIR = path.resolve(PROJECT_ROOT, './src/apps');
const DOCS_DIR = path.resolve(PROJECT_ROOT, './public/docs');

function getAppDirectories() {
  const apps = fs.readdirSync(APPS_DIR);

  return apps.map((app) => {
    return path.resolve(APPS_DIR, `./${app}`);
  });
}
function getAppSources() {
  const appDirectories = getAppDirectories();
  return appDirectories.map((appDirectory) => {
    const filepaths = fs
      .readdirSync(appDirectory, { withFileTypes: true })
      .filter((file) => {
        if (
          !file.isFile() ||
          !file.name.endsWith('.js') ||
          file.name.endsWith('.test.js') ||
          file.name.endsWith('docs.js')
        ) {
          return false;
        }
        return true;
      })
      .map((file) => {
        return path.resolve(appDirectory, file.name);
      });
    return filepaths.map((filepath) => {
      const content = fs.readFileSync(filepath, { encoding: 'utf8' });
      return {
        content,
        // filepath,
        filename: path.basename(filepath),
        // directory: appDirectory,
        app: path.basename(appDirectory),
      };
    });
  });
}
function generateDocSources() {
  const appSources = getAppSources();

  appSources.forEach((files) => {
    const firstSource = files[0];
    const outputPath = path.resolve(DOCS_DIR, `./${firstSource.app}.json`);
    fs.outputJSON(outputPath, {
      files,
    });
  });
}

function init() {
  generateDocSources();
}

init();
