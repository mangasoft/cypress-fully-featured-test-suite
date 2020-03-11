var cov_jf5qoajhh = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/modules/extra/DummyComponent.js";
  var hash = "d79752c3e43b2b7439676c56ecf60639cca7b0d3";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/modules/extra/DummyComponent.js",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 4
        },
        end: {
          line: 10,
          column: 16
        }
      },
      "1": {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 12,
          column: 19
        }
      },
      "2": {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 20,
          column: 5
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 9,
            column: 2
          },
          end: {
            line: 9,
            column: 3
          }
        },
        loc: {
          start: {
            line: 9,
            column: 21
          },
          end: {
            line: 13,
            column: 3
          }
        },
        line: 9
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 15,
            column: 2
          },
          end: {
            line: 15,
            column: 3
          }
        },
        loc: {
          start: {
            line: 15,
            column: 11
          },
          end: {
            line: 21,
            column: 3
          }
        },
        line: 15
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "d79752c3e43b2b7439676c56ecf60639cca7b0d3"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

// Imports
import React, { PureComponent } from 'react'; // App Imports
// Component

class DummyComponent extends PureComponent {
  constructor(props) {
    cov_jf5qoajhh.f[0]++;
    cov_jf5qoajhh.s[0]++;
    super(props);
    cov_jf5qoajhh.s[1]++;
    this.state = {};
  }

  render() {
    cov_jf5qoajhh.f[1]++;
    cov_jf5qoajhh.s[2]++;
    return <div>
        <h1>Dummy Component</h1>
      </div>;
  }

}

export default DummyComponent;