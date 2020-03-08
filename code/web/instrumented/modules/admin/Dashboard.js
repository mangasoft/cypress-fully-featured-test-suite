var cov_18frlnoru2 = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/modules/admin/Dashboard.js";
  var hash = "d0a3724d9218f798dc96cbdee455b2bc17cb9a02";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/modules/admin/Dashboard.js",
    statementMap: {
      "0": {
        start: {
          line: 15,
          column: 18
        },
        end: {
          line: 32,
          column: 1
        }
      },
      "1": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 31,
          column: 8
        }
      },
      "2": {
        start: {
          line: 35,
          column: 0
        },
        end: {
          line: 37,
          column: 1
        }
      },
      "3": {
        start: {
          line: 41,
          column: 2
        },
        end: {
          line: 43,
          column: 3
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 15,
            column: 18
          },
          end: {
            line: 15,
            column: 19
          }
        },
        loc: {
          start: {
            line: 16,
            column: 2
          },
          end: {
            line: 31,
            column: 8
          }
        },
        line: 16
      },
      "1": {
        name: "dashboardState",
        decl: {
          start: {
            line: 40,
            column: 9
          },
          end: {
            line: 40,
            column: 23
          }
        },
        loc: {
          start: {
            line: 40,
            column: 31
          },
          end: {
            line: 44,
            column: 1
          }
        },
        line: 40
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
    hash: "d0a3724d9218f798dc96cbdee455b2bc17cb9a02"
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
import { Helmet } from 'react-helmet'; // UI Imports

import { Grid, GridCell } from '../../ui/grid';
import { grey3 } from '../../ui/common/colors'; // App Imports

import AdminMenu from './common/Menu'; // Component

cov_18frlnoru2.s[0]++;

const Dashboard = () => {
  cov_18frlnoru2.f[0]++;
  cov_18frlnoru2.s[1]++;
  return <div>
    {
      /* SEO */
    }
    <Helmet>
      <title>Dashboard - Admin - Crate</title>
    </Helmet>

    {
      /* Top menu bar */
    }
    <AdminMenu />

    {
      /* Page Content */
    }
    <Grid style={{
      padding: '2em'
    }}>
      <GridCell>
        <p style={{
          textAlign: 'center',
          color: grey3
        }}>Nothing here yet. Choose an item from admin menu.</p>
      </GridCell>
    </Grid>
  </div>;
}; // Component Properties


cov_18frlnoru2.s[2]++;
Dashboard.propTypes = {
  user: PropTypes.object.isRequired
}; // Component State

function dashboardState(state) {
  cov_18frlnoru2.f[1]++;
  cov_18frlnoru2.s[3]++;
  return {
    user: state.user
  };
}

export default connect(dashboardState, {})(Dashboard);