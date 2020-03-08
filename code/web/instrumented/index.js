var cov_1b5zxk5z63 = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/index.js";
  var hash = "438ae5b69ba823fdb92ab0b415c1958f68c2a12c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/index.js",
    statementMap: {
      "0": {
        start: {
          line: 11,
          column: 12
        },
        end: {
          line: 11,
          column: 25
        }
      },
      "1": {
        start: {
          line: 12,
          column: 15
        },
        end: {
          line: 12,
          column: 30
        }
      },
      "2": {
        start: {
          line: 15,
          column: 0
        },
        end: {
          line: 15,
          column: 16
        }
      },
      "3": {
        start: {
          line: 18,
          column: 0
        },
        end: {
          line: 18,
          column: 15
        }
      },
      "4": {
        start: {
          line: 21,
          column: 0
        },
        end: {
          line: 21,
          column: 19
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "438ae5b69ba823fdb92ab0b415c1958f68c2a12c"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

// Imports
import { Server } from 'http';
import Express from 'express'; // App Imports

import loadModules from './setup/server/load-modules';
import loadRoutes from './setup/server/load-routes';
import startServer from './setup/server/start-server'; // Create new server

const app = (cov_1b5zxk5z63.s[0]++, new Express());
const server = (cov_1b5zxk5z63.s[1]++, new Server(app)); // Load modules

cov_1b5zxk5z63.s[2]++;
loadModules(app); // Load routes

cov_1b5zxk5z63.s[3]++;
loadRoutes(app); // Start Server

cov_1b5zxk5z63.s[4]++;
startServer(server);