var cov_2doi1lzu5k = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/ui/modal/Modal.js";
  var hash = "eaab68f5161c4604cbbe73f002921a0eb38bb4fa";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/ui/modal/Modal.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 14
        },
        end: {
          line: 36,
          column: 1
        }
      },
      "1": {
        start: {
          line: 7,
          column: 42
        },
        end: {
          line: 7,
          column: 47
        }
      },
      "2": {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 35,
          column: 3
        }
      },
      "3": {
        start: {
          line: 39,
          column: 0
        },
        end: {
          line: 41,
          column: 1
        }
      },
      "4": {
        start: {
          line: 42,
          column: 0
        },
        end: {
          line: 44,
          column: 1
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 6,
            column: 14
          },
          end: {
            line: 6,
            column: 15
          }
        },
        loc: {
          start: {
            line: 6,
            column: 25
          },
          end: {
            line: 36,
            column: 1
          }
        },
        line: 6
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 17,
            column: 19
          },
          end: {
            line: 17,
            column: 49
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 17,
            column: 29
          },
          end: {
            line: 17,
            column: 38
          }
        }, {
          start: {
            line: 17,
            column: 41
          },
          end: {
            line: 17,
            column: 49
          }
        }],
        line: 17
      },
      "1": {
        loc: {
          start: {
            line: 18,
            column: 16
          },
          end: {
            line: 18,
            column: 31
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 18,
            column: 26
          },
          end: {
            line: 18,
            column: 27
          }
        }, {
          start: {
            line: 18,
            column: 30
          },
          end: {
            line: 18,
            column: 31
          }
        }],
        line: 18
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
      "1": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "eaab68f5161c4604cbbe73f002921a0eb38bb4fa"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

// Imports
import React from 'react';
import PropTypes from 'prop-types'; // Component

cov_2doi1lzu5k.s[0]++;

const Modal = props => {
  cov_2doi1lzu5k.f[0]++;
  const {
    children,
    visible,
    ...other
  } = (cov_2doi1lzu5k.s[1]++, props);
  cov_2doi1lzu5k.s[2]++;
  return <div {...other} style={{
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 9,
    visibility: visible ? (cov_2doi1lzu5k.b[0][0]++, 'visible') : (cov_2doi1lzu5k.b[0][1]++, 'hidden'),
    opacity: visible ? (cov_2doi1lzu5k.b[1][0]++, 1) : (cov_2doi1lzu5k.b[1][1]++, 0),
    transition: 'opacity 0.25s ease-in-out'
  }}>
      <div style={{
      background: `url('/images/cover.jpg') top center`,
      backgroundSize: 'cover',
      position: 'fixed',
      top: '-40px',
      right: '-40px',
      bottom: '-40px',
      left: '-40px',
      zIndex: -1,
      filter: 'blur(25px)'
    }} />

      {children}
    </div>;
}; // Component Properties


cov_2doi1lzu5k.s[3]++;
Modal.propTypes = {
  visible: PropTypes.bool.isRequired
};
cov_2doi1lzu5k.s[4]++;
Modal.defaultProps = {
  visible: false
};
export default Modal;