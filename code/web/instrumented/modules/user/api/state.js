var cov_261zzu1mac = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/modules/user/api/state.js";
  var hash = "fb2676f11299ccc0602b078ae29035287827b7d5";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/modules/user/api/state.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 32
        },
        end: {
          line: 11,
          column: 1
        }
      },
      "1": {
        start: {
          line: 15,
          column: 2
        },
        end: {
          line: 48,
          column: 3
        }
      },
      "2": {
        start: {
          line: 17,
          column: 6
        },
        end: {
          line: 21,
          column: 7
        }
      },
      "3": {
        start: {
          line: 24,
          column: 6
        },
        end: {
          line: 28,
          column: 7
        }
      },
      "4": {
        start: {
          line: 31,
          column: 6
        },
        end: {
          line: 35,
          column: 7
        }
      },
      "5": {
        start: {
          line: 38,
          column: 6
        },
        end: {
          line: 44,
          column: 7
        }
      },
      "6": {
        start: {
          line: 47,
          column: 6
        },
        end: {
          line: 47,
          column: 18
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 14,
            column: 15
          },
          end: {
            line: 14,
            column: 16
          }
        },
        loc: {
          start: {
            line: 14,
            column: 53
          },
          end: {
            line: 49,
            column: 1
          }
        },
        line: 14
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 14,
            column: 16
          },
          end: {
            line: 14,
            column: 40
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 14,
            column: 24
          },
          end: {
            line: 14,
            column: 40
          }
        }],
        line: 14
      },
      "1": {
        loc: {
          start: {
            line: 15,
            column: 2
          },
          end: {
            line: 48,
            column: 3
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 16,
            column: 4
          },
          end: {
            line: 21,
            column: 7
          }
        }, {
          start: {
            line: 23,
            column: 4
          },
          end: {
            line: 28,
            column: 7
          }
        }, {
          start: {
            line: 30,
            column: 4
          },
          end: {
            line: 35,
            column: 7
          }
        }, {
          start: {
            line: 37,
            column: 4
          },
          end: {
            line: 44,
            column: 7
          }
        }, {
          start: {
            line: 46,
            column: 4
          },
          end: {
            line: 47,
            column: 18
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
      "4": 0,
      "5": 0,
      "6": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0],
      "1": [0, 0, 0, 0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "fb2676f11299ccc0602b078ae29035287827b7d5"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

// App Imports
import { isEmpty } from '../../../setup/helpers';
import { SET_USER, LOGIN_REQUEST, LOGIN_RESPONSE, LOGOUT } from './actions'; // Initial State

export const userInitialState = (cov_261zzu1mac.s[0]++, {
  error: null,
  isLoading: false,
  isAuthenticated: false,
  details: null
}); // State

export default ((state = (cov_261zzu1mac.b[0][0]++, userInitialState), action) => {
  cov_261zzu1mac.f[0]++;
  cov_261zzu1mac.s[1]++;

  switch (action.type) {
    case SET_USER:
      cov_261zzu1mac.b[1][0]++;
      cov_261zzu1mac.s[2]++;
      return { ...state,
        isAuthenticated: !isEmpty(action.user),
        details: action.user
      };

    case LOGIN_REQUEST:
      cov_261zzu1mac.b[1][1]++;
      cov_261zzu1mac.s[3]++;
      return { ...state,
        error: null,
        isLoading: action.isLoading
      };

    case LOGIN_RESPONSE:
      cov_261zzu1mac.b[1][2]++;
      cov_261zzu1mac.s[4]++;
      return { ...state,
        error: action.error,
        isLoading: false
      };

    case LOGOUT:
      cov_261zzu1mac.b[1][3]++;
      cov_261zzu1mac.s[5]++;
      return { ...state,
        error: null,
        isLoading: false,
        isAuthenticated: false,
        details: null
      };

    default:
      cov_261zzu1mac.b[1][4]++;
      cov_261zzu1mac.s[6]++;
      return state;
  }
});