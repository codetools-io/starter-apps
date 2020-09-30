#!/usr/bin/env node

const path = require('path');
const fs = require('fs-extra');
const globby = require('globby');
const PROJECT_ROOT = path.resolve(__dirname, '../');
const APPS_SRC_DIR = path.resolve(PROJECT_ROOT, './src/apps');
const SHELLS_SRC_DIR = path.resolve(PROJECT_ROOT, './src/shells');
const DOCS_OUTPUT_DIR = path.resolve(PROJECT_ROOT, './public/docs');
const APPS_OUTPUT_DIR = path.resolve(PROJECT_ROOT, './public/docs/apps');
const SHELLS_OUTPUT_DIR = path.resolve(PROJECT_ROOT, './public/docs/shells');

function getAppDirectories() {
  const apps = fs
    .readdirSync(APPS_SRC_DIR, { withFileTypes: false })
    .filter((resource) => resource !== 'index.js');

  return apps.map((app) => {
    return path.resolve(APPS_SRC_DIR, `./${app}`);
  });
}

function getShellDirectories() {
  const shells = fs
    .readdirSync(SHELLS_SRC_DIR, { withFileTypes: false })
    .filter((resource) => resource !== 'index.js');

  return shells.map((shell) => {
    return path.resolve(SHELLS_SRC_DIR, `./${shell}`);
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
          context: path.basename(appDirectory),
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

function getShellSources(shellDirectories) {
  return shellDirectories.map((shellDirectory) => {
    const filepaths = globby.sync(shellDirectory, { onlyFiles: true });
    const allowed = ['.css', '.js'];
    const excluded = ['.test.js', 'docs.js'];

    return filepaths
      .map((filepath) => {
        const content = fs.readFileSync(filepath, { encoding: 'utf8' });
        const relativeFilepath = path.relative(shellDirectory, filepath);
        return {
          content,
          filepath: relativeFilepath,
          filename: path.basename(filepath),
          directory: path.dirname(relativeFilepath),
          context: path.basename(shellDirectory),
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

function saveNewDocs(docs, outputDir) {
  docs.forEach((files) => {
    const firstSource = files[0];
    const outputPath = path.resolve(outputDir, `./${firstSource.context}.json`);
    fs.outputJSON(outputPath, {
      files,
    });
  });
}

function saveOverviewDocs(docs) {
  const outputPath = path.resolve(DOCS_OUTPUT_DIR, `./overview.json`);
  fs.outputJSON(outputPath, docs);
}

function removeExistingDocs() {
  fs.removeSync(DOCS_OUTPUT_DIR);
}

function generateAppDocs() {
  const appDirectories = getAppDirectories();
  const appSources = getAppSources(appDirectories);

  saveNewDocs(appSources, APPS_OUTPUT_DIR);
}

function generateShellDocs() {
  const shellDirectories = getShellDirectories();
  const shellSources = getShellSources(shellDirectories);

  saveNewDocs(shellSources, SHELLS_OUTPUT_DIR);
}

function generateOverviewDocs() {
  const appDirectories = getAppDirectories();
  const appSources = getAppSources(appDirectories);
  const shellDirectories = getShellDirectories();
  const shellSources = getShellSources(shellDirectories);

  saveOverviewDocs({
    apps: appSources,
    shells: shellSources,
  });
}

function generateDocs() {
  generateAppDocs();
  generateShellDocs();
  generateOverviewDocs();
}

function init() {
  removeExistingDocs();
  generateDocs();
}

init();
