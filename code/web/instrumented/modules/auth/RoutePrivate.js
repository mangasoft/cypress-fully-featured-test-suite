var cov_x8btxxm6x = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/modules/auth/RoutePrivate.js";
  var hash = "11500546156ef4254b1e40d0c52a82f4bf316a8e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/modules/auth/RoutePrivate.js",
    statementMap: {
      "0": {
        start: {
          line: 11,
          column: 21
        },
        end: {
          line: 19,
          column: 1
        }
      },
      "1": {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 18,
          column: 44
        }
      },
      "2": {
        start: {
          line: 22,
          column: 0
        },
        end: {
          line: 24,
          column: 1
        }
      },
      "3": {
        start: {
          line: 28,
          column: 2
        },
        end: {
          line: 30,
          column: 3
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 11,
            column: 21
          },
          end: {
            line: 11,
            column: 22
          }
        },
        loc: {
          start: {
            line: 12,
            column: 2
          },
          end: {
            line: 18,
            column: 44
          }
        },
        line: 12
      },
      "1": {
        name: "routePrivateState",
        decl: {
          start: {
            line: 27,
            column: 9
          },
          end: {
            line: 27,
            column: 26
          }
        },
        loc: {
          start: {
            line: 27,
            column: 34
          },
          end: {
            line: 31,
            column: 1
          }
        },
        line: 27
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 12,
            column: 2
          },
          end: {
            line: 18,
            column: 44
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 13,
            column: 6
          },
          end: {
            line: 17,
            column: 57
          }
        }, {
          start: {
            line: 18,
            column: 6
          },
          end: {
            line: 18,
            column: 44
          }
        }],
        line: 12
      },
      "1": {
        loc: {
          start: {
            line: 13,
            column: 6
          },
          end: {
            line: 17,
            column: 57
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 14,
            column: 10
          },
          end: {
            line: 16,
            column: 50
          }
        }, {
          start: {
            line: 17,
            column: 10
          },
          end: {
            line: 17,
            column: 57
          }
        }],
        line: 13
      },
      "2": {
        loc: {
          start: {
            line: 14,
            column: 10
          },
          end: {
            line: 16,
            column: 50
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 15,
            column: 12
          },
          end: {
            line: 15,
            column: 59
          }
        }, {
          start: {
            line: 16,
            column: 12
          },
          end: {
            line: 16,
            column: 50
          }
        }],
        line: 14
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
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
    hash: "11500546156ef4254b1e40d0c52a82f4bf316a8e"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

// Imports
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'; // App Imports

import userRoutes from '../../setup/routes/user'; // Component

cov_x8btxxm6x.s[0]++;

const RoutePrivate = props => {
  cov_x8btxxm6x.f[0]++;
  cov_x8btxxm6x.s[1]++;
  return props.user.isAuthenticated ? (cov_x8btxxm6x.b[0][0]++, props.role ? (cov_x8btxxm6x.b[1][0]++, props.user.details.role === props.role ? (cov_x8btxxm6x.b[2][0]++, <Route {...props} component={props.component} />) : (cov_x8btxxm6x.b[2][1]++, <Redirect to={userRoutes.login.path} />)) : (cov_x8btxxm6x.b[1][1]++, <Route {...props} component={props.component} />)) : (cov_x8btxxm6x.b[0][1]++, <Redirect to={userRoutes.login.path} />);
}; // Component Properties


cov_x8btxxm6x.s[2]++;
RoutePrivate.propTypes = {
  user: PropTypes.object.isRequired
}; // Component State

function routePrivateState(state) {
  cov_x8btxxm6x.f[1]++;
  cov_x8btxxm6x.s[3]++;
  return {
    user: state.user
  };
}

export default connect(routePrivateState, {})(RoutePrivate);