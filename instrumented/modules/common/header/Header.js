var cov_og2ynq36d = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/modules/common/header/Header.js";
  var hash = "52898dce13947555d01e98f577ec7d7e387e93d2";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/modules/common/header/Header.js",
    statementMap: {
      "0": {
        start: {
          line: 22,
          column: 15
        },
        end: {
          line: 76,
          column: 1
        }
      },
      "1": {
        start: {
          line: 23,
          column: 2
        },
        end: {
          line: 75,
          column: 3
        }
      },
      "2": {
        start: {
          line: 79,
          column: 0
        },
        end: {
          line: 81,
          column: 1
        }
      },
      "3": {
        start: {
          line: 85,
          column: 2
        },
        end: {
          line: 87,
          column: 3
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 22,
            column: 15
          },
          end: {
            line: 22,
            column: 16
          }
        },
        loc: {
          start: {
            line: 22,
            column: 26
          },
          end: {
            line: 76,
            column: 1
          }
        },
        line: 22
      },
      "1": {
        name: "headerState",
        decl: {
          start: {
            line: 84,
            column: 9
          },
          end: {
            line: 84,
            column: 20
          }
        },
        loc: {
          start: {
            line: 84,
            column: 28
          },
          end: {
            line: 88,
            column: 1
          }
        },
        line: 84
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 54,
            column: 12
          },
          end: {
            line: 70,
            column: 21
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 56,
            column: 14
          },
          end: {
            line: 64,
            column: 21
          }
        }, {
          start: {
            line: 66,
            column: 14
          },
          end: {
            line: 70,
            column: 21
          }
        }],
        line: 54
      },
      "1": {
        loc: {
          start: {
            line: 57,
            column: 18
          },
          end: {
            line: 57,
            column: 125
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 57,
            column: 18
          },
          end: {
            line: 57,
            column: 53
          }
        }, {
          start: {
            line: 57,
            column: 57
          },
          end: {
            line: 57,
            column: 125
          }
        }],
        line: 57
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
    hash: "52898dce13947555d01e98f577ec7d7e387e93d2"
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
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'; // UI Imports

import { Grid, GridCell } from '../../../ui/grid';
import { primary as primaryGradient } from '../../../ui/common/gradients';
import { level1 } from '../../../ui/common/shadows'; // App Imports

import home from '../../../setup/routes/home';
import user from '../../../setup/routes/user';
import crate from '../../../setup/routes/crate';
import admin from '../../../setup/routes/admin';
import Logo from './Logo';
import Menu from './Menu';
import MenuItem from './MenuItem'; // Component

cov_og2ynq36d.s[0]++;

const Header = props => {
  cov_og2ynq36d.f[0]++;
  cov_og2ynq36d.s[1]++;
  return <header style={{
    backgroundImage: primaryGradient,
    boxShadow: level1,
    padding: '0 2em',
    height: '5em',
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0
  }}>
      <Grid alignCenter={true} style={{
      marginTop: '1.5em'
    }}>
        <GridCell>
          {
          /* Logo */
        }
          <Logo style={{
          float: 'left'
        }} />

          {
          /* Left menu */
        }
          <Menu style={{
          float: 'left',
          marginTop: '0.5em',
          marginLeft: '2em'
        }}>
            <MenuItem to={home.men.path}>Men</MenuItem>

            <MenuItem to={home.women.path}>Women</MenuItem>

            <MenuItem to={home.howItWorks.path}>How It Works</MenuItem>

            <MenuItem to={home.whatsNew.path}>What's New</MenuItem>
          </Menu>
        </GridCell>

        {
        /* Right menu */
      }
        <GridCell style={{
        textAlign: 'right'
      }}>
          {props.user.isAuthenticated ? (cov_og2ynq36d.b[0][0]++, <Menu>
                {(cov_og2ynq36d.b[1][0]++, props.user.details.role === 'ADMIN') && (cov_og2ynq36d.b[1][1]++, <MenuItem to={admin.dashboard.path} section="admin">Admin</MenuItem>)}

                <MenuItem to={crate.list.path}>Crates</MenuItem>

                <MenuItem to={user.subscriptions.path}>Subscriptions</MenuItem>

                <MenuItem to={user.profile.path}>Profile</MenuItem>
              </Menu>) : (cov_og2ynq36d.b[0][1]++, <Menu>
                <MenuItem to={user.login.path}>Login</MenuItem>

                <MenuItem to={user.signup.path}>Signup</MenuItem>
              </Menu>)}
        </GridCell>
      </Grid>
    </header>;
}; // Component Properties


cov_og2ynq36d.s[2]++;
Header.propTypes = {
  user: PropTypes.object.isRequired
}; // Component State

function headerState(state) {
  cov_og2ynq36d.f[1]++;
  cov_og2ynq36d.s[3]++;
  return {
    user: state.user
  };
}

export default withRouter(connect(headerState, {})(Header));