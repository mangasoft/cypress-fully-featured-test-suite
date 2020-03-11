var cov_18gpbon22j = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/modules/user/Profile.js";
  var hash = "930c1b2d1223506416bdbfc5f310c97bc7ed6186";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/modules/user/Profile.js",
    statementMap: {
      "0": {
        start: {
          line: 19,
          column: 16
        },
        end: {
          line: 56,
          column: 1
        }
      },
      "1": {
        start: {
          line: 20,
          column: 2
        },
        end: {
          line: 55,
          column: 8
        }
      },
      "2": {
        start: {
          line: 59,
          column: 0
        },
        end: {
          line: 62,
          column: 2
        }
      },
      "3": {
        start: {
          line: 66,
          column: 2
        },
        end: {
          line: 68,
          column: 4
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 19,
            column: 16
          },
          end: {
            line: 19,
            column: 17
          }
        },
        loc: {
          start: {
            line: 20,
            column: 2
          },
          end: {
            line: 55,
            column: 8
          }
        },
        line: 20
      },
      "1": {
        name: "profileState",
        decl: {
          start: {
            line: 65,
            column: 9
          },
          end: {
            line: 65,
            column: 21
          }
        },
        loc: {
          start: {
            line: 65,
            column: 29
          },
          end: {
            line: 69,
            column: 1
          }
        },
        line: 65
      }
    },
    branchMap: {},
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
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "930c1b2d1223506416bdbfc5f310c97bc7ed6186"
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
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'; // UI Imports

import { Grid, GridCell } from '../../ui/grid';
import { H3, H4 } from '../../ui/typography';
import Button from '../../ui/button';
import { grey, grey2 } from '../../ui/common/colors'; // App Imports

import userRoutes from '../../setup/routes/user';
import { logout } from './api/actions'; // Component

cov_18gpbon22j.s[0]++;

const Profile = props => {
  cov_18gpbon22j.f[0]++;
  cov_18gpbon22j.s[1]++;
  return <div>
    {
      /* SEO */
    }
    <Helmet>
      <title>My Profile - Crate</title>
    </Helmet>

    {
      /* Top title bar */
    }
    <Grid style={{
      backgroundColor: grey
    }}>
      <GridCell style={{
        padding: '2em',
        textAlign: 'center'
      }}>
        <H3 font="secondary">My profile</H3>
      </GridCell>
    </Grid>

    <Grid>
      <GridCell style={{
        padding: '2em',
        textAlign: 'center'
      }}>
        <H4 style={{
          marginBottom: '0.5em'
        }}>{props.user.details.name}</H4>

        <p style={{
          color: grey2,
          marginBottom: '2em'
        }}>
          {props.user.details.email}
        </p>

        <Link to={userRoutes.subscriptions.path}>
          <Button theme="primary">Subscriptions</Button>
        </Link>

        <Button data-test="LogoutButton" theme="secondary" onClick={props.logout} style={{
          marginLeft: '1em'
        }}>
          Logout
        </Button>
      </GridCell>
    </Grid>
  </div>;
}; // Component Properties


cov_18gpbon22j.s[2]++;
Profile.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}; // Component State

function profileState(state) {
  cov_18gpbon22j.f[1]++;
  cov_18gpbon22j.s[3]++;
  return {
    user: state.user
  };
}

export default connect(profileState, {
  logout
})(Profile);