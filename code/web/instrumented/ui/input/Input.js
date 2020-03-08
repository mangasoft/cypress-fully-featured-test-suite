var cov_2c3yqabu8a = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/ui/input/Input.js";
  var hash = "ff43b88f9b6a1718dce443b2c053d91d56f80fa8";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/ui/input/Input.js",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 14
        },
        end: {
          line: 38,
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
          line: 37,
          column: 3
        }
      },
      "3": {
        start: {
          line: 41,
          column: 0
        },
        end: {
          line: 44,
          column: 1
        }
      },
      "4": {
        start: {
          line: 45,
          column: 0
        },
        end: {
          line: 48,
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
            line: 38,
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
    hash: "ff43b88f9b6a1718dce443b2c053d91d56f80fa8"
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

cov_2c3yqabu8a.s[0]++;

const Input = props => {
  cov_2c3yqabu8a.f[0]++;
  const {
    type,
    fullWidth,
    ...other
  } = (cov_2c3yqabu8a.s[1]++, props);
  cov_2c3yqabu8a.s[2]++;
  return <div>
      <input type={type} {...other} />

      {
      /* language=CSS */
    }
      <style jsx>{`
        input {
          outline: none;
          padding-top: 0.8em;
          padding-bottom: 0.4em;
          font-size: 1em;
          border: none;
          background-color: transparent;
          color: ${black};
          border-bottom: 1px solid ${grey2};
          width: ${fullWidth ? (cov_2c3yqabu8a.b[0][0]++, '100%') : (cov_2c3yqabu8a.b[0][1]++, 'auto')};
        }
        input:hover {
          border-bottom: 1px solid ${grey4};
        }
        input:active {
          border-bottom: 1px solid ${grey4};
        }
      `}</style>
    </div>;
}; // Component Properties


cov_2c3yqabu8a.s[3]++;
Input.propTypes = {
  type: PropTypes.string,
  fullWidth: PropTypes.bool
};
cov_2c3yqabu8a.s[4]++;
Input.defaultProps = {
  type: 'button',
  fullWidth: false
};
export default Input;