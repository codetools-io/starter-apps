#!/usr/bin/env node

const path = require('path');
const fs = require('fs-extra');
const globby = require('globby');
const matter = require('gray-matter');
const docs = require('./lib/docs');
const PROJECT_ROOT = path.resolve(__dirname, '../');
const PROJECT_SRC_DIR = path.resolve(__dirname, '../src');
const SAMPLE_TEMPLATE_DIR = path.resolve(__dirname, './templates/sample');
const SAMPLES_OUTPUT_DIR = path.resolve(PROJECT_ROOT, './samples');

function generateSamples() {
  const components = docs.get('components').value();
  components.forEach((component) => {
    fs.copySync(
      SAMPLE_TEMPLATE_DIR,
      path.resolve(SAMPLES_OUTPUT_DIR, `./${component.directory}`)
    );
    fs.copySync(
      path.resolve(PROJECT_SRC_DIR, `./${component.directory}`),
      path.resolve(
        SAMPLES_OUTPUT_DIR,
        `./${component.directory}/src/components/App`
      )
    );
    fs.removeSync(
      path.resolve(
        SAMPLES_OUTPUT_DIR,
        `./${component.directory}/src/components/App/__snapshots__`
      )
    );
  });
}

function removeExistingSamples() {
  fs.removeSync(SAMPLES_OUTPUT_DIR);
}

function init() {
  removeExistingSamples();
  generateSamples();
}

init();
