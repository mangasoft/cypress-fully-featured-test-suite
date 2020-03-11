var cov_1z151qhu51 = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/modules/common/ScrollToTop.js";
  var hash = "c8a4355fe35aa0ac4af2d645870c385a8cf4fab2";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/modules/common/ScrollToTop.js",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 4
        },
        end: {
          line: 11,
          column: 5
        }
      },
      "1": {
        start: {
          line: 10,
          column: 6
        },
        end: {
          line: 10,
          column: 27
        }
      },
      "2": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 15,
          column: 30
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 8,
            column: 2
          },
          end: {
            line: 8,
            column: 3
          }
        },
        loc: {
          start: {
            line: 8,
            column: 32
          },
          end: {
            line: 12,
            column: 3
          }
        },
        line: 8
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 14,
            column: 2
          },
          end: {
            line: 14,
            column: 3
          }
        },
        loc: {
          start: {
            line: 14,
            column: 11
          },
          end: {
            line: 16,
            column: 3
          }
        },
        line: 14
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 9,
            column: 4
          },
          end: {
            line: 11,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 9,
            column: 4
          },
          end: {
            line: 11,
            column: 5
          }
        }, {
          start: {
            line: 9,
            column: 4
          },
          end: {
            line: 11,
            column: 5
          }
        }],
        line: 9
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "c8a4355fe35aa0ac4af2d645870c385a8cf4fab2"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

// Imports
import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom'; // Component

class ScrollToTop extends PureComponent {
  componentDidUpdate(prevProps) {
    cov_1z151qhu51.f[0]++;
    cov_1z151qhu51.s[0]++;

    if (this.props.location !== prevProps.location) {
      cov_1z151qhu51.b[0][0]++;
      cov_1z151qhu51.s[1]++;
      window.scrollTo(0, 0);
    } else {
      cov_1z151qhu51.b[0][1]++;
    }
  }

  render() {
    cov_1z151qhu51.f[1]++;
    cov_1z151qhu51.s[2]++;
    return this.props.children;
  }

}

export default withRouter(ScrollToTop);