var cov_wtt80hxjs = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/ui/icon/Icon.js";
  var hash = "be645aea51c7a24c845cd6fb20dddbe3409e8f50";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/ui/icon/Icon.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 13
        },
        end: {
          line: 23,
          column: 1
        }
      },
      "1": {
        start: {
          line: 7,
          column: 39
        },
        end: {
          line: 7,
          column: 44
        }
      },
      "2": {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 22,
          column: 3
        }
      },
      "3": {
        start: {
          line: 26,
          column: 0
        },
        end: {
          line: 28,
          column: 1
        }
      },
      "4": {
        start: {
          line: 29,
          column: 0
        },
        end: {
          line: 31,
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
            column: 13
          },
          end: {
            line: 6,
            column: 14
          }
        },
        loc: {
          start: {
            line: 6,
            column: 24
          },
          end: {
            line: 23,
            column: 1
          }
        },
        line: 6
      }
    },
    branchMap: {},
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
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "be645aea51c7a24c845cd6fb20dddbe3409e8f50"
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

cov_wtt80hxjs.s[0]++;

const Icon = props => {
  cov_wtt80hxjs.f[0]++;
  const {
    children,
    size,
    ...other
  } = (cov_wtt80hxjs.s[1]++, props);
  cov_wtt80hxjs.s[2]++;
  return <i className="material-icons" {...other}>
      {children}

      {
      /* language=CSS */
    }
      <style jsx>{`
        i {
          font-size: ${size}em;
          line-height: inherit;
          vertical-align: middle;
        }
      `}</style>
    </i>;
}; // Component Properties


cov_wtt80hxjs.s[3]++;
Icon.propTypes = {
  size: PropTypes.number
};
cov_wtt80hxjs.s[4]++;
Icon.defaultProps = {
  size: 1
};
export default Icon;