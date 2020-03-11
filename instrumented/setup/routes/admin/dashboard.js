var cov_1mvnxy4s1a = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/setup/routes/admin/dashboard.js";
  var hash = "1ac26058ba2f951a75ed9e17d6f74ea7048c7397";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/setup/routes/admin/dashboard.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 25
        },
        end: {
          line: 11,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0
    },
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "1ac26058ba2f951a75ed9e17d6f74ea7048c7397"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

// App Imports
import params from '../../../setup/config/params';
import Dashboard from '../../../modules/admin/Dashboard'; // Admin dashboard routes

export const dashboard = (cov_1mvnxy4s1a.s[0]++, {
  path: '/admin/dashboard',
  component: Dashboard,
  auth: true,
  role: params.user.roles.admin
});