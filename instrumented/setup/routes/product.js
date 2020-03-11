var cov_lns9gk4ok = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/setup/routes/product.js";
  var hash = "00a53351c15f00b83178a53872fbe3d0cfe55f61";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/setup/routes/product.js",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 31
        },
        end: {
          line: 7,
          column: 51
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 7,
            column: 10
          },
          end: {
            line: 7,
            column: 11
          }
        },
        loc: {
          start: {
            line: 7,
            column: 31
          },
          end: {
            line: 7,
            column: 51
          }
        },
        line: 7
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 7,
            column: 11
          },
          end: {
            line: 7,
            column: 25
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 7,
            column: 18
          },
          end: {
            line: 7,
            column: 25
          }
        }],
        line: 7
      }
    },
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "00a53351c15f00b83178a53872fbe3d0cfe55f61"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

// App Imports
import Detail from '../../modules/product/Detail'; // Product routes

export default {
  product: {
    path: (slug = (cov_lns9gk4ok.b[0][0]++, ':slug')) => {
      cov_lns9gk4ok.f[0]++;
      cov_lns9gk4ok.s[0]++;
      return `/product/${slug}`;
    },
    component: Detail
  }
};