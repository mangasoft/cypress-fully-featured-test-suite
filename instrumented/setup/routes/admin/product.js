var cov_1fh2yww3y4 = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/setup/routes/admin/product.js";
  var hash = "9e0195c551791b471fa7c46c4194bc3dfdc87f39";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/setup/routes/admin/product.js",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 27
        },
        end: {
          line: 12,
          column: 1
        }
      },
      "1": {
        start: {
          line: 14,
          column: 29
        },
        end: {
          line: 19,
          column: 1
        }
      },
      "2": {
        start: {
          line: 21,
          column: 27
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
          column: 54
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
            column: 54
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
    hash: "9e0195c551791b471fa7c46c4194bc3dfdc87f39"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

// App Imports
import params from '../../../setup/config/params';
import ProductList from '../../../modules/admin/product/List';
import ProductCreateOrEdit from '../../../modules/admin/product/CreateOrEdit'; // Admin product routes

export const productList = (cov_1fh2yww3y4.s[0]++, {
  path: '/admin/products',
  component: ProductList,
  auth: true,
  role: params.user.roles.admin
});
export const productCreate = (cov_1fh2yww3y4.s[1]++, {
  path: '/admin/product/create',
  component: ProductCreateOrEdit,
  auth: true,
  role: params.user.roles.admin
});
export const productEdit = (cov_1fh2yww3y4.s[2]++, {
  path: (id = (cov_1fh2yww3y4.b[0][0]++, ':id')) => {
    cov_1fh2yww3y4.f[0]++;
    cov_1fh2yww3y4.s[3]++;
    return `/admin/product/${id}/edit`;
  },
  component: ProductCreateOrEdit,
  auth: true,
  role: params.user.roles.admin
});