var cov_q7j5j0wpl = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/ui/typography/H3.js";
  var hash = "1f2706fee73b093535777f746337f067e00a28d9";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/ui/typography/H3.js",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 11
        },
        end: {
          line: 25,
          column: 1
        }
      },
      "1": {
        start: {
          line: 10,
          column: 40
        },
        end: {
          line: 10,
          column: 45
        }
      },
      "2": {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 24,
          column: 3
        }
      },
      "3": {
        start: {
          line: 28,
          column: 0
        },
        end: {
          line: 30,
          column: 1
        }
      },
      "4": {
        start: {
          line: 31,
          column: 0
        },
        end: {
          line: 33,
          column: 1
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 9,
            column: 11
          },
          end: {
            line: 9,
            column: 12
          }
        },
        loc: {
          start: {
            line: 9,
            column: 22
          },
          end: {
            line: 25,
            column: 1
          }
        },
        line: 9
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 19,
            column: 26
          },
          end: {
            line: 19,
            column: 66
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 19,
            column: 47
          },
          end: {
            line: 19,
            column: 54
          }
        }, {
          start: {
            line: 19,
            column: 57
          },
          end: {
            line: 19,
            column: 66
          }
        }],
        line: 19
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "1f2706fee73b093535777f746337f067e00a28d9"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

// Imports
import React from 'react';
import PropTypes from 'prop-types'; // UI Imports

import { primary, secondary } from '../common/fonts'; // Component

cov_q7j5j0wpl.s[0]++;

const H3 = props => {
  cov_q7j5j0wpl.f[0]++;
  const {
    children,
    font,
    ...others
  } = (cov_q7j5j0wpl.s[1]++, props);
  cov_q7j5j0wpl.s[2]++;
  return <h3 {...others}>
      {children}

      {
      /* language=CSS */
    }
      <style jsx>{`
        h3 {
          font-family: ${font === 'primary' ? (cov_q7j5j0wpl.b[0][0]++, primary) : (cov_q7j5j0wpl.b[0][1]++, secondary)};
          font-size: 2em;
        }
      `}</style>
    </h3>;
}; // Component Properties


cov_q7j5j0wpl.s[3]++;
H3.propTypes = {
  font: PropTypes.string
};
cov_q7j5j0wpl.s[4]++;
H3.defaultProps = {
  font: 'primary'
};
export default H3;