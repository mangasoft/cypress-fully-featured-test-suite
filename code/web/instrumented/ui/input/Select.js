var cov_1ze90drzhi = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/ui/input/Select.js";
  var hash = "85cb8ad0536700848bf4bfdbcd01bc31079a988b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/ui/input/Select.js",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 14
        },
        end: {
          line: 40,
          column: 1
        }
      },
      "1": {
        start: {
          line: 10,
          column: 44
        },
        end: {
          line: 10,
          column: 49
        }
      },
      "2": {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 39,
          column: 3
        }
      },
      "3": {
        start: {
          line: 43,
          column: 0
        },
        end: {
          line: 46,
          column: 1
        }
      },
      "4": {
        start: {
          line: 47,
          column: 0
        },
        end: {
          line: 50,
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
            column: 14
          },
          end: {
            line: 9,
            column: 15
          }
        },
        loc: {
          start: {
            line: 9,
            column: 25
          },
          end: {
            line: 40,
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
            line: 27,
            column: 20
          },
          end: {
            line: 27,
            column: 47
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 27,
            column: 32
          },
          end: {
            line: 27,
            column: 38
          }
        }, {
          start: {
            line: 27,
            column: 41
          },
          end: {
            line: 27,
            column: 47
          }
        }],
        line: 27
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
    hash: "85cb8ad0536700848bf4bfdbcd01bc31079a988b"
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

import { grey2, grey4, black } from '../common/colors'; // Component

cov_1ze90drzhi.s[0]++;

const Input = props => {
  cov_1ze90drzhi.f[0]++;
  const {
    children,
    fullWidth,
    ...other
  } = (cov_1ze90drzhi.s[1]++, props);
  cov_1ze90drzhi.s[2]++;
  return <div>
      <select {...other}>{children}</select>

      {
      /* language=CSS */
    }
      <style jsx>{`
        select {
          outline: none;
          padding-top: 0.8em;
          padding-bottom: 0.4em;
          font-size: 1em;
          border: none;
          background-color: transparent;
          color: ${black};
          border-bottom: 1px solid ${grey2};
          width: ${fullWidth ? (cov_1ze90drzhi.b[0][0]++, '100%') : (cov_1ze90drzhi.b[0][1]++, 'auto')};
          -webkit-appearance: none;
          border-radius: 0;
        }
        select:hover {
          border-bottom: 1px solid ${grey4};
        }
        select:active {
          border-bottom: 1px solid ${grey4};
        }
      `}</style>
    </div>;
}; // Component Properties


cov_1ze90drzhi.s[3]++;
Input.propTypes = {
  type: PropTypes.string,
  fullWidth: PropTypes.bool
};
cov_1ze90drzhi.s[4]++;
Input.defaultProps = {
  type: 'button',
  fullWidth: false
};
export default Input;