/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// const webpack = require('@cypress/webpack-preprocessor');
// module.exports = (on, config) => {
//   const options = {
//     // use the same Webpack options to bundle spec files as your app does "normally"
//     // which should instrument the spec files in this project
//     webpackOptions: require('../../webpack.config.babel'),
//     watchOptions: {}
//   };
//   on('file:preprocessor', webpack(options));
//   // code coverage plugin sends collected results
//   // using its own cy.tasks calls
//   on('task', require('@cypress/code-coverage/task'));
// };
// =============================
// module.exports = (on, config) => {
//   on('task', require('@cypress/code-coverage/task'));
//   // tell Cypress to use .babelrc file
//   // and instrument the specs files
//   // only the extra application files will be instrumented
//   // not the spec files themselves
//   on('file:preprocessor', require('@cypress/code-coverage/use-babelrc'));

//   return config;
// };

const istanbul = require('istanbul-lib-coverage');
const { join } = require('path');
const { existsSync, mkdirSync, writeFileSync } = require('fs');
const execa = require('execa');

module.exports = (on, config) => {
  let coverageMap = istanbul.createCoverageMap({});
  const outputFolder = '.nyc_output';
  const nycFilename = join(outputFolder, 'out.json');

  if (!existsSync(outputFolder)) {
    mkdirSync(outputFolder);
    console.log('created folder %s for output coverage', outputFolder);
  }

  on('task', {
    /**
     * Clears accumulated code coverage information
     */
    resetCoverage() {
      coverageMap = istanbul.createCoverageMap({});
      console.log('reset code coverage');
      return null;
    },

    /**
     * Combines coverage information from single test
     * with previously collected coverage.
     */
    combineCoverage(coverage) {
      coverageMap.merge(coverage);
      return null;
    },

    /**
     * Saves coverage information as a JSON file and calls
     * NPM script to generate HTML report
     */
    coverageReport() {
      writeFileSync(nycFilename, JSON.stringify(coverageMap, null, 2));
      console.log('wrote coverage file %s', nycFilename);
      console.log('saving coverage report');
      return execa('npm', ['run', 'report:coverage'], { stdio: 'inherit' });
    }
  });
};
