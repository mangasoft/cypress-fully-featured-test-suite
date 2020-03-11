var cov_8cv0xf9rs = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/ui/grid/GridCell.js";
  var hash = "d146b91c37fa2d9cc59a42abe5aa378d8d3ccf06";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/ui/grid/GridCell.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 17
        },
        end: {
          line: 36,
          column: 1
        }
      },
      "1": {
        start: {
          line: 16,
          column: 6
        },
        end: {
          line: 16,
          column: 11
        }
      },
      "2": {
        start: {
          line: 18,
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
          line: 54,
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
            column: 17
          },
          end: {
            line: 6,
            column: 18
          }
        },
        loc: {
          start: {
            line: 6,
            column: 28
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
            line: 26,
            column: 13
          },
          end: {
            line: 26,
            column: 54
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 26,
            column: 24
          },
          end: {
            line: 26,
            column: 49
          }
        }, {
          start: {
            line: 26,
            column: 52
          },
          end: {
            line: 26,
            column: 54
          }
        }],
        line: 26
      },
      "1": {
        loc: {
          start: {
            line: 27,
            column: 13
          },
          end: {
            line: 27,
            column: 55
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 27,
            column: 27
          },
          end: {
            line: 27,
            column: 50
          }
        }, {
          start: {
            line: 27,
            column: 53
          },
          end: {
            line: 27,
            column: 55
          }
        }],
        line: 27
      },
      "2": {
        loc: {
          start: {
            line: 28,
            column: 13
          },
          end: {
            line: 28,
            column: 53
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 28,
            column: 27
          },
          end: {
            line: 28,
            column: 48
          }
        }, {
          start: {
            line: 28,
            column: 51
          },
          end: {
            line: 28,
            column: 53
          }
        }],
        line: 28
      },
      "3": {
        loc: {
          start: {
            line: 29,
            column: 13
          },
          end: {
            line: 29,
            column: 61
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 29,
            column: 28
          },
          end: {
            line: 29,
            column: 56
          }
        }, {
          start: {
            line: 29,
            column: 59
          },
          end: {
            line: 29,
            column: 61
          }
        }],
        line: 29
      },
      "4": {
        loc: {
          start: {
            line: 30,
            column: 13
          },
          end: {
            line: 30,
            column: 60
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 30,
            column: 29
          },
          end: {
            line: 30,
            column: 55
          }
        }, {
          start: {
            line: 30,
            column: 58
          },
          end: {
            line: 30,
            column: 60
          }
        }],
        line: 30
      },
      "5": {
        loc: {
          start: {
            line: 31,
            column: 13
          },
          end: {
            line: 31,
            column: 63
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 31,
            column: 22
          },
          end: {
            line: 31,
            column: 42
          }
        }, {
          start: {
            line: 31,
            column: 45
          },
          end: {
            line: 31,
            column: 63
          }
        }],
        line: 31
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
    hash: "d146b91c37fa2d9cc59a42abe5aa378d8d3ccf06"
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

cov_8cv0xf9rs.s[0]++;

const GridCell = props => {
  cov_8cv0xf9rs.f[0]++;
  const {
    children,
    alignTop,
    alignBottom,
    alignCenter,
    justifyRight,
    justifyCenter,
    gutter,
    ...others
  } = (cov_8cv0xf9rs.s[1]++, props);
  cov_8cv0xf9rs.s[2]++;
  return <div {...others}>
      {children}

      {
      /* language=CSS */
    }
      <style jsx>{`
        div {
          flex: 1;
          ${alignTop ? (cov_8cv0xf9rs.b[0][0]++, 'align-self: flex-start;') : (cov_8cv0xf9rs.b[0][1]++, '')}
          ${alignBottom ? (cov_8cv0xf9rs.b[1][0]++, 'align-self: flex-end;') : (cov_8cv0xf9rs.b[1][1]++, '')}
          ${alignCenter ? (cov_8cv0xf9rs.b[2][0]++, 'align-self: center;') : (cov_8cv0xf9rs.b[2][1]++, '')}
          ${justifyRight ? (cov_8cv0xf9rs.b[3][0]++, 'justify-content: flex-end;') : (cov_8cv0xf9rs.b[3][1]++, '')}
          ${justifyCenter ? (cov_8cv0xf9rs.b[4][0]++, 'justify-content: center;') : (cov_8cv0xf9rs.b[4][1]++, '')}
          ${gutter ? (cov_8cv0xf9rs.b[5][0]++, 'padding-left: 1em;') : (cov_8cv0xf9rs.b[5][1]++, 'padding-left: 0;')}
        }
      `}</style>
    </div>;
}; // Component Properties


cov_8cv0xf9rs.s[3]++;
GridCell.propTypes = {
  alignTop: PropTypes.bool,
  alignBottom: PropTypes.bool,
  alignCenter: PropTypes.bool,
  justifyRight: PropTypes.bool,
  justifyCenter: PropTypes.bool,
  gutter: PropTypes.bool
};
cov_8cv0xf9rs.s[4]++;
GridCell.defaultProps = {
  alignTop: false,
  alignBottom: false,
  alignCenter: false,
  justifyRight: false,
  justifyCenter: false,
  gutter: false
};
export default GridCell;