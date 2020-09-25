#!/usr/bin/env node

const path = require('path');
const fs = require('fs-extra');
const globby = require('globby');
const PROJECT_ROOT = path.resolve(__dirname, '../');
const APPS_DIR = path.resolve(PROJECT_ROOT, './src/apps');
const PUBLIC_APPS_DIR = path.resolve(PROJECT_ROOT, './public/apps');
const PACKAGE_PATH = path.resolve(__dirname, '../package.json');

function getAppDirectories() {
  const apps = fs.readdirSync(APPS_DIR);

  return apps.map((app) => {
    return path.resolve(APPS_DIR, `./${app}`);
  });
}

function generateDocSources() {
  const appDirectories = getAppDirectories();

  appDirectories.forEach((appDirectory) => {
    const appName = path.basename(appDirectory);
    const target = path.resolve(PUBLIC_APPS_DIR, appName);

    fs.copy(appDirectory, target);
    fs.copy(PACKAGE_PATH, path.resolve(target, './package.json'));
  });
}

function init() {
  generateDocSources();
}

init();
