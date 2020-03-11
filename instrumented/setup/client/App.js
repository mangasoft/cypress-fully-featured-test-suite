var cov_kwiq025qj = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/setup/client/App.js";
  var hash = "3f82600698dc0a8127cc62612d17c6b7f67195b8";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/setup/client/App.js",
    statementMap: {
      "0": {
        start: {
          line: 11,
          column: 12
        },
        end: {
          line: 23,
          column: 1
        }
      },
      "1": {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 22,
          column: 11
        }
      },
      "2": {
        start: {
          line: 15,
          column: 8
        },
        end: {
          line: 17,
          column: 111
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 11,
            column: 12
          },
          end: {
            line: 11,
            column: 13
          }
        },
        loc: {
          start: {
            line: 12,
            column: 2
          },
          end: {
            line: 22,
            column: 11
          }
        },
        line: 12
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 14,
            column: 33
          },
          end: {
            line: 14,
            column: 34
          }
        },
        loc: {
          start: {
            line: 15,
            column: 8
          },
          end: {
            line: 17,
            column: 111
          }
        },
        line: 15
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 15,
            column: 8
          },
          end: {
            line: 17,
            column: 111
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 16,
            column: 12
          },
          end: {
            line: 16,
            column: 118
          }
        }, {
          start: {
            line: 17,
            column: 12
          },
          end: {
            line: 17,
            column: 111
          }
        }],
        line: 15
      },
      "1": {
        loc: {
          start: {
            line: 16,
            column: 55
          },
          end: {
            line: 16,
            column: 115
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 16,
            column: 90
          },
          end: {
            line: 16,
            column: 102
          }
        }, {
          start: {
            line: 16,
            column: 105
          },
          end: {
            line: 16,
            column: 115
          }
        }],
        line: 16
      },
      "2": {
        loc: {
          start: {
            line: 17,
            column: 48
          },
          end: {
            line: 17,
            column: 108
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 17,
            column: 83
          },
          end: {
            line: 17,
            column: 95
          }
        }, {
          start: {
            line: 17,
            column: 98
          },
          end: {
            line: 17,
            column: 108
          }
        }],
        line: 17
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "3f82600698dc0a8127cc62612d17c6b7f67195b8"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

// Imports
import React from 'react';
import { Route, Switch } from 'react-router-dom'; // App Imports

import { routes } from '../../setup/routes';
import Layout from '../../modules/common/Layout';
import NotFound from '../../modules/common/NotFound';
import RoutePrivate from '../../modules/auth/RoutePrivate';
cov_kwiq025qj.s[0]++;

const App = () => {
  cov_kwiq025qj.f[0]++;
  cov_kwiq025qj.s[1]++;
  return <Layout>
    <Switch>
      {Object.values(routes).map((route, index) => {
        cov_kwiq025qj.f[1]++;
        cov_kwiq025qj.s[2]++;
        return route.auth ? (cov_kwiq025qj.b[0][0]++, <RoutePrivate {...route} key={index} path={typeof route.path === 'function' ? (cov_kwiq025qj.b[1][0]++, route.path()) : (cov_kwiq025qj.b[1][1]++, route.path)} />) : (cov_kwiq025qj.b[0][1]++, <Route {...route} key={index} path={typeof route.path === 'function' ? (cov_kwiq025qj.b[2][0]++, route.path()) : (cov_kwiq025qj.b[2][1]++, route.path)} />);
      })}

      <Route component={NotFound} />
    </Switch>
  </Layout>;
};

export default App;