var cov_ru2v1g9za = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/modules/admin/common/Menu.js";
  var hash = "ad6c528be9819894521fcac77fcb0c9e7f03cf95";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/modules/admin/common/Menu.js",
    statementMap: {
      "0": {
        start: {
          line: 14,
          column: 18
        },
        end: {
          line: 28,
          column: 1
        }
      },
      "1": {
        start: {
          line: 15,
          column: 2
        },
        end: {
          line: 27,
          column: 9
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 14,
            column: 18
          },
          end: {
            line: 14,
            column: 19
          }
        },
        loc: {
          start: {
            line: 15,
            column: 2
          },
          end: {
            line: 27,
            column: 9
          }
        },
        line: 15
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "ad6c528be9819894521fcac77fcb0c9e7f03cf95"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

// Imports
import React from 'react'; // UI Imports

import { Grid, GridCell } from '../../../ui/grid';
import { black, grey } from "../../../ui/common/colors"; // App Imports

import admin from '../../../setup/routes/admin';
import Menu from '../../common/header/Menu';
import MenuItem from '../../common/header/MenuItem'; // Component

cov_ru2v1g9za.s[0]++;

const AdminMenu = () => {
  cov_ru2v1g9za.f[0]++;
  cov_ru2v1g9za.s[1]++;
  return <Grid style={{
    backgroundColor: grey
  }}>
    <GridCell style={{
      padding: '2em',
      textAlign: 'center'
    }}>
      <Menu>
        <MenuItem to={admin.dashboard.path} type="primary" style={{
          color: black
        }}>Dashboard</MenuItem>

        <MenuItem to={admin.productList.path} section="products" type="primary" style={{
          color: black
        }}>Products</MenuItem>

        <MenuItem to={admin.crateList.path} type="primary" style={{
          color: black
        }}>Crates</MenuItem>

        <MenuItem to={admin.subscriptionList.path} type="primary" style={{
          color: black
        }}>Subscriptions</MenuItem>
      </Menu>
    </GridCell>
  </Grid>;
};

export default AdminMenu;