var cov_1xf1fkkwor = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/setup/routes/index.js";
  var hash = "719231c947aa19061e01ef0e14788957fb0fc2ae";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/setup/routes/index.js",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 22
        },
        end: {
          line: 10,
          column: 70
        }
      },
      "1": {
        start: {
          line: 13,
          column: 24
        },
        end: {
          line: 13,
          column: 35
        }
      },
      "2": {
        start: {
          line: 16,
          column: 26
        },
        end: {
          line: 16,
          column: 37
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "719231c947aa19061e01ef0e14788957fb0fc2ae"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

// App Imports
import { APP_URL_API } from '../config/env';
import admin from './admin';
import home from './home';
import user from './user';
import product from './product';
import crate from './crate'; // Combined routes

export const routes = (cov_1xf1fkkwor.s[0]++, Object.assign(admin, home, user, product, crate)); // API Routes

export const routeApi = (cov_1xf1fkkwor.s[1]++, APP_URL_API); // Image

export const routeImage = (cov_1xf1fkkwor.s[2]++, APP_URL_API);