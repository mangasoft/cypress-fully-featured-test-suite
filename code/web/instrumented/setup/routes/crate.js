var cov_521199d3w = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/setup/routes/crate.js";
  var hash = "0a5d653daae7b3cf12b6b93101f4872606338fd7";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/setup/routes/crate.js",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "0a5d653daae7b3cf12b6b93101f4872606338fd7"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

// App Imports
import List from '../../modules/crate/List'; // Crate routes

export default {
  list: {
    path: '/crates',
    component: List,
    auth: true
  }
};