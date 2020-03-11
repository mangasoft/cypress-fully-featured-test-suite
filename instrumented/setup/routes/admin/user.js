var cov_22uuktl7bk = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/setup/routes/admin/user.js";
  var hash = "aaa71122932ca5dea34b98b7b0c3a1e9da88ac9f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/setup/routes/admin/user.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 24
        },
        end: {
          line: 9,
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
    hash: "aaa71122932ca5dea34b98b7b0c3a1e9da88ac9f"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

// App Imports
import Dashboard from '../../../modules/admin/Dashboard'; // Admin user routes

export const userList = (cov_22uuktl7bk.s[0]++, {
  path: '/admin/users',
  component: Dashboard,
  auth: true
});