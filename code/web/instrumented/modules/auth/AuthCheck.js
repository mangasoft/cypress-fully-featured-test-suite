var cov_2oaiuyyjcz = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/modules/auth/AuthCheck.js";
  var hash = "db401ed2f307863af105901f6f136b3a47f2c17f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/modules/auth/AuthCheck.js",
    statementMap: {
      "0": {
        start: {
          line: 12,
          column: 18
        },
        end: {
          line: 14,
          column: 1
        }
      },
      "1": {
        start: {
          line: 13,
          column: 2
        },
        end: {
          line: 13,
          column: 148
        }
      },
      "2": {
        start: {
          line: 17,
          column: 0
        },
        end: {
          line: 19,
          column: 1
        }
      },
      "3": {
        start: {
          line: 23,
          column: 2
        },
        end: {
          line: 25,
          column: 3
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 12,
            column: 18
          },
          end: {
            line: 12,
            column: 19
          }
        },
        loc: {
          start: {
            line: 13,
            column: 2
          },
          end: {
            line: 13,
            column: 148
          }
        },
        line: 13
      },
      "1": {
        name: "authCheckState",
        decl: {
          start: {
            line: 22,
            column: 9
          },
          end: {
            line: 22,
            column: 23
          }
        },
        loc: {
          start: {
            line: 22,
            column: 31
          },
          end: {
            line: 26,
            column: 1
          }
        },
        line: 22
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 13,
            column: 2
          },
          end: {
            line: 13,
            column: 148
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 13,
            column: 32
          },
          end: {
            line: 13,
            column: 142
          }
        }, {
          start: {
            line: 13,
            column: 146
          },
          end: {
            line: 13,
            column: 148
          }
        }],
        line: 13
      },
      "1": {
        loc: {
          start: {
            line: 13,
            column: 32
          },
          end: {
            line: 13,
            column: 142
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 13,
            column: 70
          },
          end: {
            line: 13,
            column: 107
          }
        }, {
          start: {
            line: 13,
            column: 110
          },
          end: {
            line: 13,
            column: 142
          }
        }],
        line: 13
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
    hash: "db401ed2f307863af105901f6f136b3a47f2c17f"
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

import crate from '../../setup/routes/crate';
import admin from '../../setup/routes/admin'; // Component

cov_2oaiuyyjcz.s[0]++;

const AuthCheck = props => {
  cov_2oaiuyyjcz.f[0]++;
  cov_2oaiuyyjcz.s[1]++;
  return props.user.isAuthenticated ? (cov_2oaiuyyjcz.b[0][0]++, props.user.details.role === 'ADMIN' ? (cov_2oaiuyyjcz.b[1][0]++, <Redirect to={admin.dashboard.path} />) : (cov_2oaiuyyjcz.b[1][1]++, <Redirect to={crate.list.path} />)) : (cov_2oaiuyyjcz.b[0][1]++, '');
}; // Component Properties


cov_2oaiuyyjcz.s[2]++;
AuthCheck.propTypes = {
  user: PropTypes.object.isRequired
}; // Component State

function authCheckState(state) {
  cov_2oaiuyyjcz.f[1]++;
  cov_2oaiuyyjcz.s[3]++;
  return {
    user: state.user
  };
}

export default connect(authCheckState, {})(AuthCheck);