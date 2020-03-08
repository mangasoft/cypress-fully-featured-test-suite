var cov_2q4nz85dqi = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/setup/server/start-server.js";
  var hash = "62cde7d7a48ab810eef507e75e5e37b83a812fcf";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/setup/server/start-server.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 2
        },
        end: {
          line: 5,
          column: 40
        }
      },
      "1": {
        start: {
          line: 7,
          column: 2
        },
        end: {
          line: 13,
          column: 4
        }
      },
      "2": {
        start: {
          line: 8,
          column: 4
        },
        end: {
          line: 12,
          column: 5
        }
      },
      "3": {
        start: {
          line: 9,
          column: 6
        },
        end: {
          line: 9,
          column: 33
        }
      },
      "4": {
        start: {
          line: 11,
          column: 6
        },
        end: {
          line: 11,
          column: 89
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 4,
            column: 15
          },
          end: {
            line: 4,
            column: 16
          }
        },
        loc: {
          start: {
            line: 4,
            column: 33
          },
          end: {
            line: 14,
            column: 1
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 7,
            column: 22
          },
          end: {
            line: 7,
            column: 23
          }
        },
        loc: {
          start: {
            line: 7,
            column: 33
          },
          end: {
            line: 13,
            column: 3
          }
        },
        line: 7
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 8,
            column: 4
          },
          end: {
            line: 12,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 8,
            column: 4
          },
          end: {
            line: 12,
            column: 5
          }
        }, {
          start: {
            line: 8,
            column: 4
          },
          end: {
            line: 12,
            column: 5
          }
        }],
        line: 8
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "62cde7d7a48ab810eef507e75e5e37b83a812fcf"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

// Imports
import { NODE_ENV, PORT } from '../config/env';
export default function (server) {
  cov_2q4nz85dqi.f[0]++;
  cov_2q4nz85dqi.s[0]++;
  console.info('SETUP - Start server..');
  cov_2q4nz85dqi.s[1]++;
  server.listen(PORT, error => {
    cov_2q4nz85dqi.f[1]++;
    cov_2q4nz85dqi.s[2]++;

    if (error) {
      cov_2q4nz85dqi.b[0][0]++;
      cov_2q4nz85dqi.s[3]++;
      return console.error(error);
    } else {
      cov_2q4nz85dqi.b[0][1]++;
      cov_2q4nz85dqi.s[4]++;
      return console.info(`Server running on http://localhost:${PORT} [${NODE_ENV}]`);
    }
  });
}