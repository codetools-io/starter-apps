#!/usr/bin/env node

const path = require('path');
const fs = require('fs-extra');
const PROJECT_ROOT = path.resolve(__dirname, '../');
const TEMPLATE_DIR = path.resolve(__dirname, './templates/sample');
const APPS_SRC_DIR = path.resolve(PROJECT_ROOT, './src/apps');
const SHELLS_SRC_DIR = path.resolve(PROJECT_ROOT, './src/shells');

const SAMPLES_OUTPUT_DIR = path.resolve(PROJECT_ROOT, './samples');
const SAMPLE_APPS_OUTPUT_DIR = path.resolve(PROJECT_ROOT, './samples/apps');
const SAMPLE_SHELLS_OUTPUT_DIR = path.resolve(PROJECT_ROOT, './samples/shells');

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

function saveNewSamples(directories, outputDir) {
  directories.forEach((directory) => {
    const name = path.basename(directory);
    const targetSampleDir = path.resolve(outputDir, name);
    const targetAppDir = path.resolve(targetSampleDir, './src/components/App');
    const snapshotsDir = path.resolve(targetAppDir, './__snapshots__');
    const docsPath = path.resolve(targetAppDir, './docs.js');

    fs.copySync(TEMPLATE_DIR, targetSampleDir);
    fs.copySync(directory, targetAppDir);
    fs.removeSync(snapshotsDir);
    fs.removeSync(docsPath);
  });
}

function removeExistingSamples() {
  fs.removeSync(SAMPLES_OUTPUT_DIR);
}

function generateAppSamples() {
  const appDirectories = getAppDirectories();

  saveNewSamples(appDirectories, SAMPLE_APPS_OUTPUT_DIR);
}

function generateShellSamples() {
  const shellDirectories = getShellDirectories();

  saveNewSamples(shellDirectories, SAMPLE_SHELLS_OUTPUT_DIR);
}

function generateSamples() {
  generateAppSamples();
  generateShellSamples();
}

function init() {
  removeExistingSamples();
  generateSamples();
}

init();
