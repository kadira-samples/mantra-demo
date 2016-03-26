/* eslint-env node, commonjs */
module.exports = function exportWallaby(wallaby) {
  // There is a weird error with the mui and mantra.
  // See: https://goo.gl/cLH8ib
  // Using require here seems to be the error.
  // Renaming it into `load` just fixed the issue.

  /*eslint-disable */
  var load = require;
  /*eslint-enable */

  return {
    files: [
      'client/modules/**/components/*.jsx',
      'client/modules/**/actions/*.js',
      'client/modules/**/containers/*.js',
      'client/modules/**/libs/*.js',
    ],
    tests: [
      'client/**/tests/*.js',
    ],
    compilers: {
      '**/*.js*': wallaby.compilers.babel({
        babel: load('babel-core'),
        presets: ['es2015', 'stage-2', 'react'],
      }),
    },
    env: {
      type: 'node',
    },
    testFramework: 'mocha',
    setup: function setup() {
      global.React = require('react');
    },
  };
};
