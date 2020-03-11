var cov_2boqcolqxs = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/setup/routes/admin/crate.js";
  var hash = "e1e60230d07c56d3093b372b097ac4b85f499520";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/setup/routes/admin/crate.js",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 25
        },
        end: {
          line: 12,
          column: 1
        }
      },
      "1": {
        start: {
          line: 14,
          column: 27
        },
        end: {
          line: 19,
          column: 1
        }
      },
      "2": {
        start: {
          line: 21,
          column: 25
        },
        end: {
          line: 26,
          column: 1
        }
      },
      "3": {
        start: {
          line: 22,
          column: 25
        },
        end: {
          line: 22,
          column: 52
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 22,
            column: 8
          },
          end: {
            line: 22,
            column: 9
          }
        },
        loc: {
          start: {
            line: 22,
            column: 25
          },
          end: {
            line: 22,
            column: 52
          }
        },
        line: 22
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 22,
            column: 9
          },
          end: {
            line: 22,
            column: 19
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 22,
            column: 14
          },
          end: {
            line: 22,
            column: 19
          }
        }],
        line: 22
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "e1e60230d07c56d3093b372b097ac4b85f499520"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

// App Imports
import params from '../../../setup/config/params';
import CrateList from '../../../modules/admin/crate/List';
import CrateCreateOrEdit from '../../../modules/admin/crate/CreateOrEdit'; // Admin crate routes

export const crateList = (cov_2boqcolqxs.s[0]++, {
  path: '/admin/crates',
  component: CrateList,
  auth: true,
  role: params.user.roles.admin
});
export const crateCreate = (cov_2boqcolqxs.s[1]++, {
  path: '/admin/crate/create',
  component: CrateCreateOrEdit,
  auth: true,
  role: params.user.roles.admin
});
export const crateEdit = (cov_2boqcolqxs.s[2]++, {
  path: (id = (cov_2boqcolqxs.b[0][0]++, ':id')) => {
    cov_2boqcolqxs.f[0]++;
    cov_2boqcolqxs.s[3]++;
    return `/admin/crate/${id}/edit`;
  },
  component: CrateCreateOrEdit,
  auth: true,
  role: params.user.roles.admin
});