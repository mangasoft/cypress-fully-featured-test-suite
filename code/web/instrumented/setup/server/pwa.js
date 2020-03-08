var cov_2broocfxcr = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/setup/server/pwa.js";
  var hash = "577ee4db92a776ed161750cef99146bc81b925fb";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/setup/server/pwa.js",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 0
        },
        end: {
          line: 10,
          column: 105
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0
    },
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "577ee4db92a776ed161750cef99146bc81b925fb"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

// Imports
import fs from 'fs';
import path from 'path'; // App Imports

import { APP_URL, NODE_ENV } from '../config/env';
import view from './view'; // Write index.html

cov_2broocfxcr.s[0]++;
fs.writeFileSync(path.join(__dirname, '..', '..', '..', 'public', 'index.html'), view(APP_URL, NODE_ENV));