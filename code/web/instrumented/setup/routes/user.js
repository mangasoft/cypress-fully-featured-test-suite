var cov_1z5t50lyk0 = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/setup/routes/user.js";
  var hash = "8922b4bafed987c40c18028b2ad7376bdf4d03eb";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/setup/routes/user.js",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "8922b4bafed987c40c18028b2ad7376bdf4d03eb"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

// App Imports
import Login from '../../modules/user/Login';
import Signup from '../../modules/user/Signup';
import Profile from '../../modules/user/Profile';
import Subscriptions from '../../modules/user/Subscriptions'; // User routes

export default {
  login: {
    path: '/user/login',
    component: Login
  },
  signup: {
    path: '/user/signup',
    component: Signup
  },
  profile: {
    path: '/user/profile',
    component: Profile,
    auth: true
  },
  subscriptions: {
    path: '/user/subscriptions',
    component: Subscriptions,
    auth: true
  }
};