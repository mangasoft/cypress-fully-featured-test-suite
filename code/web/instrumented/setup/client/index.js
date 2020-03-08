var cov_1lrw1vbgr1 = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/setup/client/index.js";
  var hash = "11b0291916867bf3c4c84764628a06322d69e27e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/setup/client/index.js",
    statementMap: {
      "0": {
        start: {
          line: 14,
          column: 14
        },
        end: {
          line: 14,
          column: 50
        }
      },
      "1": {
        start: {
          line: 15,
          column: 0
        },
        end: {
          line: 23,
          column: 1
        }
      },
      "2": {
        start: {
          line: 16,
          column: 15
        },
        end: {
          line: 16,
          column: 62
        }
      },
      "3": {
        start: {
          line: 17,
          column: 2
        },
        end: {
          line: 22,
          column: 3
        }
      },
      "4": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 19,
          column: 40
        }
      },
      "5": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 21,
          column: 50
        }
      },
      "6": {
        start: {
          line: 26,
          column: 15
        },
        end: {
          line: 34,
          column: 1
        }
      },
      "7": {
        start: {
          line: 27,
          column: 2
        },
        end: {
          line: 33,
          column: 13
        }
      },
      "8": {
        start: {
          line: 37,
          column: 0
        },
        end: {
          line: 42,
          column: 1
        }
      },
      "9": {
        start: {
          line: 38,
          column: 2
        },
        end: {
          line: 41,
          column: 3
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 26,
            column: 15
          },
          end: {
            line: 26,
            column: 16
          }
        },
        loc: {
          start: {
            line: 27,
            column: 2
          },
          end: {
            line: 33,
            column: 13
          }
        },
        line: 27
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 37,
            column: 16
          },
          end: {
            line: 37,
            column: 17
          }
        },
        loc: {
          start: {
            line: 37,
            column: 22
          },
          end: {
            line: 42,
            column: 1
          }
        },
        line: 37
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 15,
            column: 0
          },
          end: {
            line: 23,
            column: 1
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 15,
            column: 0
          },
          end: {
            line: 23,
            column: 1
          }
        }, {
          start: {
            line: 15,
            column: 0
          },
          end: {
            line: 23,
            column: 1
          }
        }],
        line: 15
      },
      "1": {
        loc: {
          start: {
            line: 15,
            column: 4
          },
          end: {
            line: 15,
            column: 50
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 15,
            column: 4
          },
          end: {
            line: 15,
            column: 9
          }
        }, {
          start: {
            line: 15,
            column: 13
          },
          end: {
            line: 15,
            column: 34
          }
        }, {
          start: {
            line: 15,
            column: 38
          },
          end: {
            line: 15,
            column: 50
          }
        }],
        line: 15
      },
      "2": {
        loc: {
          start: {
            line: 17,
            column: 2
          },
          end: {
            line: 22,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 17,
            column: 2
          },
          end: {
            line: 22,
            column: 3
          }
        }, {
          start: {
            line: 17,
            column: 2
          },
          end: {
            line: 22,
            column: 3
          }
        }],
        line: 17
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
      "8": 0,
      "9": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0, 0],
      "2": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "11b0291916867bf3c4c84764628a06322d69e27e"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

// Imports
import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'; // App Imports

import { store } from '../../setup/store';
import { setUser, loginSetUserLocalStorageAndCookie } from '../../modules/user/api/actions';
import ScrollToTop from '../../modules/common/ScrollToTop';
import App from './App'; // User Authentication

const token = (cov_1lrw1vbgr1.s[0]++, window.localStorage.getItem('token'));
cov_1lrw1vbgr1.s[1]++;

if ((cov_1lrw1vbgr1.b[1][0]++, token) && (cov_1lrw1vbgr1.b[1][1]++, token !== 'undefined') && (cov_1lrw1vbgr1.b[1][2]++, token !== '')) {
  cov_1lrw1vbgr1.b[0][0]++;
  const user = (cov_1lrw1vbgr1.s[2]++, JSON.parse(window.localStorage.getItem('user')));
  cov_1lrw1vbgr1.s[3]++;

  if (user) {
    cov_1lrw1vbgr1.b[2][0]++;
    cov_1lrw1vbgr1.s[4]++;
    // Dispatch action
    store.dispatch(setUser(token, user));
    cov_1lrw1vbgr1.s[5]++;
    loginSetUserLocalStorageAndCookie(token, user);
  } else {
    cov_1lrw1vbgr1.b[2][1]++;
  }
} else {
  cov_1lrw1vbgr1.b[0][1]++;
} // Client App


cov_1lrw1vbgr1.s[6]++;

const Client = () => {
  cov_1lrw1vbgr1.f[0]++;
  cov_1lrw1vbgr1.s[7]++;
  return <Provider store={store} key="provider">
    <Router>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </Router>
  </Provider>;
}; // Mount client app


cov_1lrw1vbgr1.s[8]++;

window.onload = () => {
  cov_1lrw1vbgr1.f[1]++;
  cov_1lrw1vbgr1.s[9]++;
  hydrate(<Client />, document.getElementById('app'));
};