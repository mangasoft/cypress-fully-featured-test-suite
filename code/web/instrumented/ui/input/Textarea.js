var cov_utz2tvqlg = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/ui/input/Textarea.js";
  var hash = "3755c2bae09796f963ff9e595a11aadbcc14c028";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/ui/input/Textarea.js",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 17
        },
        end: {
          line: 38,
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
          line: 43,
          column: 1
        }
      },
      "4": {
        start: {
          line: 44,
          column: 0
        },
        end: {
          line: 46,
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
            column: 17
          },
          end: {
            line: 9,
            column: 18
          }
        },
        loc: {
          start: {
            line: 9,
            column: 28
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
    hash: "3755c2bae09796f963ff9e595a11aadbcc14c028"
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

cov_utz2tvqlg.s[0]++;

const Textarea = props => {
  cov_utz2tvqlg.f[0]++;
  const {
    children,
    fullWidth,
    ...other
  } = (cov_utz2tvqlg.s[1]++, props);
  cov_utz2tvqlg.s[2]++;
  return <span>
      <textarea {...other}>{children}</textarea>

      {
      /* language=CSS */
    }
      <style jsx>{`
        textarea {
          outline: none;
          color: ${black};
          padding-top: 0.8em;
          padding-bottom: 0.4em;
          font-size: 1em;
          border: none;
          background-color: transparent;
          border-bottom: 1px solid ${grey2};
          width: ${fullWidth ? (cov_utz2tvqlg.b[0][0]++, '100%') : (cov_utz2tvqlg.b[0][1]++, 'auto')};
        }
        textarea:hover {
          border-bottom: 1px solid ${grey4};
        }
        textarea:active {
          border-bottom: 1px solid ${grey4};
        }
      `}</style>
    </span>;
}; // Component Properties


cov_utz2tvqlg.s[3]++;
Textarea.propTypes = {
  fullWidth: PropTypes.bool
};
cov_utz2tvqlg.s[4]++;
Textarea.defaultProps = {
  fullWidth: false
};
export default Textarea;