var cov_e9qzrawkn = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/setup/routes/admin/index.js";
  var hash = "0cc7fb729065c79230ba6f39e2cd8f3e1c657bc8";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/setup/routes/admin/index.js",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 14
        },
        end: {
          line: 15,
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
    hash: "0cc7fb729065c79230ba6f39e2cd8f3e1c657bc8"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

// App Imports
import * as dashboard from './dashboard';
import * as product from './product';
import * as crate from './crate';
import * as subscription from './subscription';
import * as user from './user'; // Admin routes

const admin = (cov_e9qzrawkn.s[0]++, { ...dashboard,
  ...product,
  ...crate,
  ...subscription,
  ...user
});
export default admin;