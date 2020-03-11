var cov_15y1z49d5e = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/modules/auth/AuthAdminCheck.js";
  var hash = "b4daffdfdfd3f0d3fd1ac77d4aa842b5eb160511";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/modules/auth/AuthAdminCheck.js",
    statementMap: {
      "0": {
        start: {
          line: 11,
          column: 23
        },
        end: {
          line: 13,
          column: 1
        }
      },
      "1": {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 12,
          column: 106
        }
      },
      "2": {
        start: {
          line: 16,
          column: 0
        },
        end: {
          line: 18,
          column: 1
        }
      },
      "3": {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 24,
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
            column: 23
          },
          end: {
            line: 11,
            column: 24
          }
        },
        loc: {
          start: {
            line: 12,
            column: 2
          },
          end: {
            line: 12,
            column: 106
          }
        },
        line: 12
      },
      "1": {
        name: "authAdminCheckState",
        decl: {
          start: {
            line: 21,
            column: 9
          },
          end: {
            line: 21,
            column: 28
          }
        },
        loc: {
          start: {
            line: 21,
            column: 36
          },
          end: {
            line: 25,
            column: 1
          }
        },
        line: 21
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
            line: 12,
            column: 106
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 12,
            column: 70
          },
          end: {
            line: 12,
            column: 72
          }
        }, {
          start: {
            line: 12,
            column: 75
          },
          end: {
            line: 12,
            column: 106
          }
        }],
        line: 12
      },
      "1": {
        loc: {
          start: {
            line: 12,
            column: 2
          },
          end: {
            line: 12,
            column: 67
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 12,
            column: 2
          },
          end: {
            line: 12,
            column: 28
          }
        }, {
          start: {
            line: 12,
            column: 32
          },
          end: {
            line: 12,
            column: 67
          }
        }],
        line: 12
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
      "1": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "b4daffdfdfd3f0d3fd1ac77d4aa842b5eb160511"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

// Imports
import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; // App Imports

import home from '../../setup/routes/home'; // Component

cov_15y1z49d5e.s[0]++;

const AuthAdminCheck = props => {
  cov_15y1z49d5e.f[0]++;
  cov_15y1z49d5e.s[1]++;
  return (cov_15y1z49d5e.b[1][0]++, props.user.isAuthenticated) && (cov_15y1z49d5e.b[1][1]++, props.user.details.role === 'ADMIN') ? (cov_15y1z49d5e.b[0][0]++, '') : (cov_15y1z49d5e.b[0][1]++, <Redirect to={home.home.path} />);
}; // Component Properties


cov_15y1z49d5e.s[2]++;
AuthAdminCheck.propTypes = {
  user: PropTypes.object.isRequired
}; // Component State

function authAdminCheckState(state) {
  cov_15y1z49d5e.f[1]++;
  cov_15y1z49d5e.s[3]++;
  return {
    user: state.user
  };
}

export default connect(authAdminCheckState, {})(AuthAdminCheck);