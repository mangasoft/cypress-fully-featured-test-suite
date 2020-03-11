var cov_2apv8l7ka1 = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/modules/common/header/Menu.js";
  var hash = "97935a921cf708f640dae1d72d07ee7dd26eb1c8";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/modules/common/header/Menu.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 13
        },
        end: {
          line: 13,
          column: 1
        }
      },
      "1": {
        start: {
          line: 6,
          column: 34
        },
        end: {
          line: 6,
          column: 39
        }
      },
      "2": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 12,
          column: 3
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 5,
            column: 13
          },
          end: {
            line: 5,
            column: 14
          }
        },
        loc: {
          start: {
            line: 5,
            column: 24
          },
          end: {
            line: 13,
            column: 1
          }
        },
        line: 5
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "97935a921cf708f640dae1d72d07ee7dd26eb1c8"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

// Imports
import React from 'react'; // Component

cov_2apv8l7ka1.s[0]++;

const Menu = props => {
  cov_2apv8l7ka1.f[0]++;
  const {
    children,
    ...others
  } = (cov_2apv8l7ka1.s[1]++, props);
  cov_2apv8l7ka1.s[2]++;
  return <div {...others}>
      {children}
    </div>;
};

export default Menu;