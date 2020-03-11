var cov_oqcvbehlb = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/setup/store.js";
  var hash = "ddc3eb0988ad592adb5bb55f05524f33db0ab974";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/setup/store.js",
    statementMap: {
      "0": {
        start: {
          line: 14,
          column: 19
        },
        end: {
          line: 20,
          column: 2
        }
      },
      "1": {
        start: {
          line: 23,
          column: 27
        },
        end: {
          line: 29,
          column: 1
        }
      },
      "2": {
        start: {
          line: 24,
          column: 2
        },
        end: {
          line: 26,
          column: 3
        }
      },
      "3": {
        start: {
          line: 25,
          column: 4
        },
        end: {
          line: 25,
          column: 21
        }
      },
      "4": {
        start: {
          line: 28,
          column: 2
        },
        end: {
          line: 28,
          column: 34
        }
      },
      "5": {
        start: {
          line: 33,
          column: 0
        },
        end: {
          line: 36,
          column: 1
        }
      },
      "6": {
        start: {
          line: 34,
          column: 2
        },
        end: {
          line: 34,
          column: 41
        }
      },
      "7": {
        start: {
          line: 35,
          column: 2
        },
        end: {
          line: 35,
          column: 33
        }
      },
      "8": {
        start: {
          line: 39,
          column: 21
        },
        end: {
          line: 46,
          column: 1
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 23,
            column: 27
          },
          end: {
            line: 23,
            column: 28
          }
        },
        loc: {
          start: {
            line: 23,
            column: 46
          },
          end: {
            line: 29,
            column: 1
          }
        },
        line: 23
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 24,
            column: 2
          },
          end: {
            line: 26,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 24,
            column: 2
          },
          end: {
            line: 26,
            column: 3
          }
        }, {
          start: {
            line: 24,
            column: 2
          },
          end: {
            line: 26,
            column: 3
          }
        }],
        line: 24
      },
      "1": {
        loc: {
          start: {
            line: 33,
            column: 0
          },
          end: {
            line: 36,
            column: 1
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 33,
            column: 0
          },
          end: {
            line: 36,
            column: 1
          }
        }, {
          start: {
            line: 33,
            column: 0
          },
          end: {
            line: 36,
            column: 1
          }
        }],
        line: 33
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "ddc3eb0988ad592adb5bb55f05524f33db0ab974"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

// Imports
import { compose, combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // App Imports

import common from '../modules/common/api/state';
import user from '../modules/user/api/state';
import * as product from '../modules/product/api/state';
import * as subscription from '../modules/subscription/api/state';
import * as crate from '../modules/crate/api/state'; // App Reducer

const appReducer = (cov_oqcvbehlb.s[0]++, combineReducers({
  common,
  user,
  ...product,
  ...subscription,
  ...crate
})); // Root Reducer

cov_oqcvbehlb.s[1]++;
export const rootReducer = (state, action) => {
  cov_oqcvbehlb.f[0]++;
  cov_oqcvbehlb.s[2]++;

  if (action.type === 'RESET') {
    cov_oqcvbehlb.b[0][0]++;
    cov_oqcvbehlb.s[3]++;
    state = undefined;
  } else {
    cov_oqcvbehlb.b[0][1]++;
  }

  cov_oqcvbehlb.s[4]++;
  return appReducer(state, action);
}; // Load initial state from server side

let initialState;
cov_oqcvbehlb.s[5]++;

if (typeof window !== 'undefined') {
  cov_oqcvbehlb.b[1][0]++;
  cov_oqcvbehlb.s[6]++;
  initialState = window.__INITIAL_STATE__;
  cov_oqcvbehlb.s[7]++;
  delete window.__INITIAL_STATE__;
} else {
  cov_oqcvbehlb.b[1][1]++;
} // Store


export const store = (cov_oqcvbehlb.s[8]++, createStore(rootReducer, initialState, compose(applyMiddleware(thunk))));