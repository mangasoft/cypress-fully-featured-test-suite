var cov_eocgr3aax = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/setup/routes/home.js";
  var hash = "7bd1294a3c6d5e4043bb2519abb9de511fd112d9";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/setup/routes/home.js",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "7bd1294a3c6d5e4043bb2519abb9de511fd112d9"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

// App Imports
import Home from '../../modules/pages/Home';
import Men from '../../modules/pages/Men';
import Women from '../../modules/pages/Women';
import HowItWorks from '../../modules/pages/HowItWorks';
import WhatsNew from '../../modules/pages/WhatsNew'; // Home routes

export default {
  home: {
    path: '/',
    component: Home,
    exact: true
  },
  men: {
    path: '/men',
    component: Men
  },
  women: {
    path: '/women',
    component: Women
  },
  howItWorks: {
    path: '/how-it-works',
    component: HowItWorks
  },
  whatsNew: {
    path: '/whats-new',
    component: WhatsNew
  }
};