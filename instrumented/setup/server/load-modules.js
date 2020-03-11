var cov_rxe7bn3p7 = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/setup/server/load-modules.js";
  var hash = "e08236f25d232a9c491ca9350b7e0ec5c1bbf2b7";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/setup/server/load-modules.js",
    statementMap: {
      "0": {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 12,
          column: 40
        }
      },
      "1": {
        start: {
          line: 15,
          column: 2
        },
        end: {
          line: 15,
          column: 28
        }
      },
      "2": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 16,
          column: 51
        }
      },
      "3": {
        start: {
          line: 19,
          column: 2
        },
        end: {
          line: 19,
          column: 25
        }
      },
      "4": {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 22,
          column: 75
        }
      },
      "5": {
        start: {
          line: 25,
          column: 2
        },
        end: {
          line: 27,
          column: 3
        }
      },
      "6": {
        start: {
          line: 26,
          column: 4
        },
        end: {
          line: 26,
          column: 27
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 11,
            column: 15
          },
          end: {
            line: 11,
            column: 16
          }
        },
        loc: {
          start: {
            line: 11,
            column: 30
          },
          end: {
            line: 28,
            column: 1
          }
        },
        line: 11
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 25,
            column: 2
          },
          end: {
            line: 27,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 25,
            column: 2
          },
          end: {
            line: 27,
            column: 3
          }
        }, {
          start: {
            line: 25,
            column: 2
          },
          end: {
            line: 27,
            column: 3
          }
        }],
        line: 25
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "e08236f25d232a9c491ca9350b7e0ec5c1bbf2b7"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

// Imports
import path from 'path';
import Express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import morgan from 'morgan'; // App Imports

import { NODE_ENV } from '../config/env';
export default function (app) {
  cov_rxe7bn3p7.f[0]++;
  cov_rxe7bn3p7.s[0]++;
  console.info('SETUP - Load modules..'); // Request body parser

  cov_rxe7bn3p7.s[1]++;
  app.use(bodyParser.json());
  cov_rxe7bn3p7.s[2]++;
  app.use(bodyParser.urlencoded({
    extended: false
  })); // Request body cookie parser

  cov_rxe7bn3p7.s[3]++;
  app.use(cookieParser()); // Public (static) files folder

  cov_rxe7bn3p7.s[4]++;
  app.use(Express.static(path.join(__dirname, '..', '..', '..', 'public'))); // HTTP logger

  cov_rxe7bn3p7.s[5]++;

  if (NODE_ENV === 'development') {
    cov_rxe7bn3p7.b[0][0]++;
    cov_rxe7bn3p7.s[6]++;
    app.use(morgan('tiny'));
  } else {
    cov_rxe7bn3p7.b[0][1]++;
  }
}