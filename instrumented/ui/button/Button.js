var cov_1wfyitr2ci = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/ui/button/Button.js";
  var hash = "e20880c14c6c48765eb8db346e7206b2856c3d0d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/ui/button/Button.js",
    statementMap: {
      "0": {
        start: {
          line: 11,
          column: 15
        },
        end: {
          line: 50,
          column: 1
        }
      },
      "1": {
        start: {
          line: 12,
          column: 56
        },
        end: {
          line: 12,
          column: 61
        }
      },
      "2": {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 49,
          column: 3
        }
      },
      "3": {
        start: {
          line: 53,
          column: 0
        },
        end: {
          line: 57,
          column: 1
        }
      },
      "4": {
        start: {
          line: 58,
          column: 0
        },
        end: {
          line: 62,
          column: 1
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 11,
            column: 15
          },
          end: {
            line: 11,
            column: 16
          }
        },
        loc: {
          start: {
            line: 11,
            column: 26
          },
          end: {
            line: 50,
            column: 1
          }
        },
        line: 11
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 29,
            column: 20
          },
          end: {
            line: 29,
            column: 52
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 29,
            column: 39
          },
          end: {
            line: 29,
            column: 44
          }
        }, {
          start: {
            line: 29,
            column: 47
          },
          end: {
            line: 29,
            column: 52
          }
        }],
        line: 29
      },
      "1": {
        loc: {
          start: {
            line: 30,
            column: 25
          },
          end: {
            line: 30,
            column: 59
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 30,
            column: 44
          },
          end: {
            line: 30,
            column: 50
          }
        }, {
          start: {
            line: 30,
            column: 53
          },
          end: {
            line: 30,
            column: 59
          }
        }],
        line: 30
      },
      "2": {
        loc: {
          start: {
            line: 31,
            column: 31
          },
          end: {
            line: 31,
            column: 112
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 31,
            column: 53
          },
          end: {
            line: 31,
            column: 60
          }
        }, {
          start: {
            line: 31,
            column: 63
          },
          end: {
            line: 31,
            column: 112
          }
        }],
        line: 31
      },
      "3": {
        loc: {
          start: {
            line: 31,
            column: 63
          },
          end: {
            line: 31,
            column: 112
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 31,
            column: 87
          },
          end: {
            line: 31,
            column: 96
          }
        }, {
          start: {
            line: 31,
            column: 99
          },
          end: {
            line: 31,
            column: 112
          }
        }],
        line: 31
      },
      "4": {
        loc: {
          start: {
            line: 32,
            column: 31
          },
          end: {
            line: 32,
            column: 121
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 32,
            column: 53
          },
          end: {
            line: 32,
            column: 68
          }
        }, {
          start: {
            line: 32,
            column: 71
          },
          end: {
            line: 32,
            column: 121
          }
        }],
        line: 32
      },
      "5": {
        loc: {
          start: {
            line: 32,
            column: 71
          },
          end: {
            line: 32,
            column: 121
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 32,
            column: 95
          },
          end: {
            line: 32,
            column: 112
          }
        }, {
          start: {
            line: 32,
            column: 115
          },
          end: {
            line: 32,
            column: 121
          }
        }],
        line: 32
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
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "e20880c14c6c48765eb8db346e7206b2856c3d0d"
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

import { white, grey2, black, primary, secondary } from '../common/colors';
import { primary as primaryGradient, secondary as secondaryGradient } from '../common/gradients';
import { level1, level2, level3, level4 } from '../common/shadows'; // Component

cov_1wfyitr2ci.s[0]++;

const Button = props => {
  cov_1wfyitr2ci.f[0]++;
  const {
    children,
    type,
    disabled,
    theme,
    ...other
  } = (cov_1wfyitr2ci.s[1]++, props);
  cov_1wfyitr2ci.s[2]++;
  return <button type={type} disabled={disabled} {...other}>
      {children}

      {
      /* language=CSS */
    }
      <style jsx>{`
        button {
          padding: 0.7em 1.7em;
          border: none;
          border-radius: 1.4em;
          text-transform: uppercase;
          font-family: 'Roboto', sans-serif;
          cursor: pointer;
          outline: none;
          font-size: 1em;
          color: ${theme !== 'none' ? (cov_1wfyitr2ci.b[0][0]++, white) : (cov_1wfyitr2ci.b[0][1]++, black)};
          box-shadow: ${theme !== 'none' ? (cov_1wfyitr2ci.b[1][0]++, level2) : (cov_1wfyitr2ci.b[1][1]++, 'none')};
          background-color: ${theme === 'primary' ? (cov_1wfyitr2ci.b[2][0]++, primary) : (cov_1wfyitr2ci.b[2][1]++, theme === 'secondary' ? (cov_1wfyitr2ci.b[3][0]++, secondary) : (cov_1wfyitr2ci.b[3][1]++, 'transparent'))};
          background-image: ${theme === 'primary' ? (cov_1wfyitr2ci.b[4][0]++, primaryGradient) : (cov_1wfyitr2ci.b[4][1]++, theme === 'secondary' ? (cov_1wfyitr2ci.b[5][0]++, secondaryGradient) : (cov_1wfyitr2ci.b[5][1]++, 'none'))};
        }
        button:hover {
          box-shadow: ${level3};
        }
        button:active {
          box-shadow: ${level4};
        }
        button:disabled {
          color: ${white};
          box-shadow: ${level1};
          background-color: ${grey2};
          background-image: none;
        }
      `}
      </style>
    </button>;
}; // Component Properties


cov_1wfyitr2ci.s[3]++;
Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  theme: PropTypes.string
};
cov_1wfyitr2ci.s[4]++;
Button.defaultProps = {
  type: 'button',
  disabled: false,
  theme: 'none'
};
export default Button;