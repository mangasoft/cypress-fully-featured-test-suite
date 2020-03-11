var cov_1w07st5pyx = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/setup/config/env.js";
  var hash = "b8f41e7753fe129108a13ac105f7c8b885e6fc23";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/setup/config/env.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 0
        },
        end: {
          line: 5,
          column: 15
        }
      },
      "1": {
        start: {
          line: 8,
          column: 23
        },
        end: {
          line: 8,
          column: 42
        }
      },
      "2": {
        start: {
          line: 9,
          column: 27
        },
        end: {
          line: 9,
          column: 50
        }
      },
      "3": {
        start: {
          line: 12,
          column: 24
        },
        end: {
          line: 12,
          column: 44
        }
      },
      "4": {
        start: {
          line: 15,
          column: 20
        },
        end: {
          line: 15,
          column: 44
        }
      }
    },
    fnMap: {},
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 15,
            column: 20
          },
          end: {
            line: 15,
            column: 44
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 15,
            column: 20
          },
          end: {
            line: 15,
            column: 36
          }
        }, {
          start: {
            line: 15,
            column: 40
          },
          end: {
            line: 15,
            column: 44
          }
        }],
        line: 15
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {},
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "b8f41e7753fe129108a13ac105f7c8b885e6fc23"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

// Imports
import dotenv from 'dotenv'; // Load .env

cov_1w07st5pyx.s[0]++;
dotenv.config(); // URL

export const APP_URL = (cov_1w07st5pyx.s[1]++, process.env.APP_URL);
export const APP_URL_API = (cov_1w07st5pyx.s[2]++, process.env.APP_URL_API); // Environment

export const NODE_ENV = (cov_1w07st5pyx.s[3]++, process.env.NODE_ENV); // Port

export const PORT = (cov_1w07st5pyx.s[4]++, (cov_1w07st5pyx.b[0][0]++, process.env.PORT) || (cov_1w07st5pyx.b[0][1]++, 3000));