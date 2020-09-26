#!/usr/bin/env node

const path = require('path');
const fs = require('fs-extra');
const PROJECT_ROOT = path.resolve(__dirname, '../');
const APPS_DIR = path.resolve(PROJECT_ROOT, './src/apps');
const SAMPLES_DIR = path.resolve(PROJECT_ROOT, './public/samples');
const TEMPLATE_DIR = path.resolve(__dirname, './templates/sample');

function getAppDirectories() {
  const apps = fs.readdirSync(APPS_DIR);

  return apps.map((app) => {
    return path.resolve(APPS_DIR, `./${app}`);
  });
}

function saveNewSamples(appDirectories) {
  appDirectories.forEach((appDirectory) => {
    const appName = path.basename(appDirectory);
    const targetSampleDir = path.resolve(SAMPLES_DIR, appName);
    const targetAppDir = path.resolve(targetSampleDir, './src/components/App');
    const snapshotsDir = path.resolve(targetAppDir, './__snapshots__');
    const docsPath = path.resolve(targetAppDir, './docs.js');

    fs.copySync(TEMPLATE_DIR, targetSampleDir);
    fs.copySync(appDirectory, targetAppDir);
    fs.removeSync(snapshotsDir);
    fs.removeSync(docsPath);
  });
}

function removeExistingSamples() {
  fs.removeSync(SAMPLES_DIR);
}

function generateSamples() {
  const appDirectories = getAppDirectories();

  removeExistingSamples();
  saveNewSamples(appDirectories);
}

function init() {
  generateSamples();
}

init();
