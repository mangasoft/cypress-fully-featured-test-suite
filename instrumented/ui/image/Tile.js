var cov_1xhisw3kme = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/ui/image/Tile.js";
  var hash = "9f85637e7d33dd9affc4431402b7528cc87e07a2";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/ui/image/Tile.js",
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
          column: 71
        },
        end: {
          line: 7,
          column: 76
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
          line: 32,
          column: 1
        }
      },
      "4": {
        start: {
          line: 33,
          column: 0
        },
        end: {
          line: 37,
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
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 18,
            column: 25
          },
          end: {
            line: 18,
            column: 49
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 18,
            column: 34
          },
          end: {
            line: 18,
            column: 40
          }
        }, {
          start: {
            line: 18,
            column: 43
          },
          end: {
            line: 18,
            column: 49
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
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "9f85637e7d33dd9affc4431402b7528cc87e07a2"
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

cov_1xhisw3kme.s[0]++;

const Tile = props => {
  cov_1xhisw3kme.f[0]++;
  const {
    children,
    image,
    width,
    height,
    style,
    shadow,
    ...others
  } = (cov_1xhisw3kme.s[1]++, props);
  cov_1xhisw3kme.s[2]++;
  return <div style={Object.assign({
    height,
    width
  }, style)} {...others}>
      {children}

      {
      /* language=CSS */
    }
      <style jsx>{`
        div {
          background-image:url('${image}');
          background-size: 100% auto;
          box-shadow: ${shadow ? (cov_1xhisw3kme.b[0][0]++, shadow) : (cov_1xhisw3kme.b[0][1]++, 'none')};
        }
      `}</style>
    </div>;
}; // Component Properties


cov_1xhisw3kme.s[3]++;
Tile.propTypes = {
  image: PropTypes.string.isRequired,
  style: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
  shadow: PropTypes.string
};
cov_1xhisw3kme.s[4]++;
Tile.defaultProps = {
  style: {},
  width: '100%',
  height: '100%'
};
export default Tile;