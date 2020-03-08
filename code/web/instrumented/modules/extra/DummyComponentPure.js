var cov_go9tj9pax = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/modules/extra/DummyComponentPure.js";
  var hash = "99d2bbd0dc5b9d8ee77102fa5a98d6953de9649f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/modules/extra/DummyComponentPure.js",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 27
        },
        end: {
          line: 11,
          column: 1
        }
      },
      "1": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 10,
          column: 8
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 7,
            column: 27
          },
          end: {
            line: 7,
            column: 28
          }
        },
        loc: {
          start: {
            line: 8,
            column: 2
          },
          end: {
            line: 10,
            column: 8
          }
        },
        line: 8
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "99d2bbd0dc5b9d8ee77102fa5a98d6953de9649f"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

// Imports
import React from 'react'; // App Imports
// Component

cov_go9tj9pax.s[0]++;

const DummyComponentPure = () => {
  cov_go9tj9pax.f[0]++;
  cov_go9tj9pax.s[1]++;
  return <div>
    <h1>Dummy Component Pure</h1>
  </div>;
};

export default DummyComponentPure;