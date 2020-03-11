var cov_14qlidu7ba = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/ui/typography/H5.js";
  var hash = "b07dd9605af34ef087b34f6d6972f0be65d7dbcd";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/ui/typography/H5.js",
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
    hash: "b07dd9605af34ef087b34f6d6972f0be65d7dbcd"
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

cov_14qlidu7ba.s[0]++;

const H5 = props => {
  cov_14qlidu7ba.f[0]++;
  const {
    children,
    font,
    ...others
  } = (cov_14qlidu7ba.s[1]++, props);
  cov_14qlidu7ba.s[2]++;
  return <h5 {...others}>
      {children}

      {
      /* language=CSS */
    }
      <style jsx>{`
        h5 {
          font-family: ${font === 'primary' ? (cov_14qlidu7ba.b[0][0]++, primary) : (cov_14qlidu7ba.b[0][1]++, secondary)};
          font-size: 1.5em;
        }
      `}</style>
    </h5>;
}; // Component Properties


cov_14qlidu7ba.s[3]++;
H5.propTypes = {
  font: PropTypes.string
};
cov_14qlidu7ba.s[4]++;
H5.defaultProps = {
  font: 'primary'
};
export default H5;