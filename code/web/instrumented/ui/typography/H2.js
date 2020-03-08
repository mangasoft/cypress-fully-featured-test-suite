var cov_2bssirjupn = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/ui/typography/H2.js";
  var hash = "67df8684d32a7428ff94c9855b6e799aee2e0f8e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/ui/typography/H2.js",
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
    hash: "67df8684d32a7428ff94c9855b6e799aee2e0f8e"
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

cov_2bssirjupn.s[0]++;

const H2 = props => {
  cov_2bssirjupn.f[0]++;
  const {
    children,
    font,
    ...others
  } = (cov_2bssirjupn.s[1]++, props);
  cov_2bssirjupn.s[2]++;
  return <h2 {...others}>
      {children}

      {
      /* language=CSS */
    }
      <style jsx>{`
        h2 {
          font-family: ${font === 'primary' ? (cov_2bssirjupn.b[0][0]++, primary) : (cov_2bssirjupn.b[0][1]++, secondary)};
          font-size: 3em;
        }
      `}</style>
    </h2>;
}; // Component Properties


cov_2bssirjupn.s[3]++;
H2.propTypes = {
  font: PropTypes.string
};
cov_2bssirjupn.s[4]++;
H2.defaultProps = {
  font: 'primary'
};
export default H2;