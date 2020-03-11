var cov_1b8s4hew1d = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/setup/routes/admin/subscription.js";
  var hash = "7a3a633dba59ef2d3ded240f431a8927933a3be6";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/setup/routes/admin/subscription.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 32
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
    hash: "7a3a633dba59ef2d3ded240f431a8927933a3be6"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

// App Imports
import params from '../../../setup/config/params';
import SubscriptionList from '../../../modules/admin/subscription/List'; // Admin subscriptions routes

export const subscriptionList = (cov_1b8s4hew1d.s[0]++, {
  path: '/admin/subscriptions',
  component: SubscriptionList,
  auth: true,
  role: params.user.roles.admin
});