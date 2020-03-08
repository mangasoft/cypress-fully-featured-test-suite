var cov_1x8dizar1o = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/modules/common/api/state.js";
  var hash = "8b228b19f68d51bfc2d5855482cba5bb5b57cf7f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/modules/common/api/state.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 34
        },
        end: {
          line: 10,
          column: 1
        }
      },
      "1": {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 35,
          column: 3
        }
      },
      "2": {
        start: {
          line: 16,
          column: 6
        },
        end: {
          line: 22,
          column: 7
        }
      },
      "3": {
        start: {
          line: 25,
          column: 6
        },
        end: {
          line: 31,
          column: 7
        }
      },
      "4": {
        start: {
          line: 34,
          column: 6
        },
        end: {
          line: 34,
          column: 18
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 13,
            column: 15
          },
          end: {
            line: 13,
            column: 16
          }
        },
        loc: {
          start: {
            line: 13,
            column: 55
          },
          end: {
            line: 36,
            column: 1
          }
        },
        line: 13
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 13,
            column: 16
          },
          end: {
            line: 13,
            column: 42
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 13,
            column: 24
          },
          end: {
            line: 13,
            column: 42
          }
        }],
        line: 13
      },
      "1": {
        loc: {
          start: {
            line: 14,
            column: 2
          },
          end: {
            line: 35,
            column: 3
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 15,
            column: 4
          },
          end: {
            line: 22,
            column: 7
          }
        }, {
          start: {
            line: 24,
            column: 4
          },
          end: {
            line: 31,
            column: 7
          }
        }, {
          start: {
            line: 33,
            column: 4
          },
          end: {
            line: 34,
            column: 18
          }
        }],
        line: 14
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
      "0": 0
    },
    b: {
      "0": [0],
      "1": [0, 0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "8b228b19f68d51bfc2d5855482cba5bb5b57cf7f"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

// App Imports
import { MESSAGE_SHOW, MESSAGE_HIDE } from './actions'; // Initial State

export const commonInitialState = (cov_1x8dizar1o.s[0]++, {
  message: {
    text: null,
    open: false
  }
}); // State

export default ((state = (cov_1x8dizar1o.b[0][0]++, commonInitialState), action) => {
  cov_1x8dizar1o.f[0]++;
  cov_1x8dizar1o.s[1]++;

  switch (action.type) {
    case MESSAGE_SHOW:
      cov_1x8dizar1o.b[1][0]++;
      cov_1x8dizar1o.s[2]++;
      return { ...state,
        message: {
          text: action.message,
          open: true
        }
      };

    case MESSAGE_HIDE:
      cov_1x8dizar1o.b[1][1]++;
      cov_1x8dizar1o.s[3]++;
      return { ...state,
        message: {
          text: null,
          open: false
        }
      };

    default:
      cov_1x8dizar1o.b[1][2]++;
      cov_1x8dizar1o.s[4]++;
      return state;
  }
});