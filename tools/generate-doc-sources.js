#!/usr/bin/env node

const path = require('path');
const fs = require('fs-extra');
const globby = require('globby');
const PROJECT_ROOT = path.resolve(__dirname, '../');
const APPS_DIR = path.resolve(PROJECT_ROOT, './src/apps');
const DOCS_DIR = path.resolve(PROJECT_ROOT, './public/docs');

function getAppDirectories() {
  const apps = fs.readdirSync(APPS_DIR);

  return apps.map((app) => {
    return path.resolve(APPS_DIR, `./${app}`);
  });
}
function getAppSources(appDirectories) {
  return appDirectories.map((appDirectory) => {
    const filepaths = globby.sync(appDirectory, { onlyFiles: true });
    const allowed = ['.css', '.js'];
    const excluded = ['.test.js', 'docs.js'];

    return filepaths
      .map((filepath) => {
        const content = fs.readFileSync(filepath, { encoding: 'utf8' });
        const relativeFilepath = path.relative(appDirectory, filepath);
        return {
          content,
          filepath: relativeFilepath,
          filename: path.basename(filepath),
          directory: path.dirname(relativeFilepath),
          app: path.basename(appDirectory),
        };
      })
      .filter((file) => {
        if (
          allowed.some((ext) => file.filename.endsWith(ext)) &&
          !excluded.some((ext) => file.filename.endsWith(ext))
        ) {
          return true;
        }
        return false;
      });
  });
}

function generateDocSources() {
  const appDirectories = getAppDirectories();
  const appSources = getAppSources(appDirectories);

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
