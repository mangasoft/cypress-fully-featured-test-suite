var cov_mk4d16a99 = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/modules/common/header/MenuItem.js";
  var hash = "5d3f14126e93ba4d46e8520feca15ca94eb10841";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/modules/common/header/MenuItem.js",
    statementMap: {
      "0": {
        start: {
          line: 12,
          column: 17
        },
        end: {
          line: 41,
          column: 1
        }
      },
      "1": {
        start: {
          line: 13,
          column: 57
        },
        end: {
          line: 13,
          column: 62
        }
      },
      "2": {
        start: {
          line: 15,
          column: 24
        },
        end: {
          line: 21,
          column: 3
        }
      },
      "3": {
        start: {
          line: 16,
          column: 27
        },
        end: {
          line: 16,
          column: 64
        }
      },
      "4": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 20,
          column: 15
        }
      },
      "5": {
        start: {
          line: 23,
          column: 2
        },
        end: {
          line: 40,
          column: 3
        }
      },
      "6": {
        start: {
          line: 44,
          column: 0
        },
        end: {
          line: 49,
          column: 1
        }
      },
      "7": {
        start: {
          line: 50,
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
            line: 12,
            column: 17
          },
          end: {
            line: 12,
            column: 18
          }
        },
        loc: {
          start: {
            line: 12,
            column: 28
          },
          end: {
            line: 41,
            column: 1
          }
        },
        line: 12
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 15,
            column: 24
          },
          end: {
            line: 15,
            column: 25
          }
        },
        loc: {
          start: {
            line: 15,
            column: 30
          },
          end: {
            line: 21,
            column: 3
          }
        },
        line: 15
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 18,
            column: 11
          },
          end: {
            line: 20,
            column: 15
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 18,
            column: 12
          },
          end: {
            line: 18,
            column: 47
          }
        }, {
          start: {
            line: 18,
            column: 51
          },
          end: {
            line: 18,
            column: 77
          }
        }, {
          start: {
            line: 19,
            column: 9
          },
          end: {
            line: 19,
            column: 39
          }
        }, {
          start: {
            line: 20,
            column: 9
          },
          end: {
            line: 20,
            column: 15
          }
        }],
        line: 18
      },
      "1": {
        loc: {
          start: {
            line: 31,
            column: 11
          },
          end: {
            line: 35,
            column: 17
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 31,
            column: 29
          },
          end: {
            line: 35,
            column: 9
          }
        }, {
          start: {
            line: 35,
            column: 12
          },
          end: {
            line: 35,
            column: 17
          }
        }],
        line: 31
      },
      "2": {
        loc: {
          start: {
            line: 32,
            column: 28
          },
          end: {
            line: 32,
            column: 70
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 32,
            column: 51
          },
          end: {
            line: 32,
            column: 60
          }
        }, {
          start: {
            line: 32,
            column: 63
          },
          end: {
            line: 32,
            column: 70
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
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0, 0, 0],
      "1": [0, 0],
      "2": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "5d3f14126e93ba4d46e8520feca15ca94eb10841"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

// Imports
import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom'; // UI Imports

import { white } from '../../../ui/common/colors';
import { primary, secondary } from '../../../ui/common/gradients';
import { level1 } from '../../../ui/common/shadows'; // Component

cov_mk4d16a99.s[0]++;

const MenuItem = props => {
  cov_mk4d16a99.f[0]++;
  const {
    children,
    to,
    type,
    active,
    style,
    section
  } = (cov_mk4d16a99.s[1]++, props);
  cov_mk4d16a99.s[2]++;

  const isActiveRoute = () => {
    cov_mk4d16a99.f[1]++;
    const currentSection = (cov_mk4d16a99.s[3]++, props.location.pathname.split('/')[1]);
    cov_mk4d16a99.s[4]++;
    return (cov_mk4d16a99.b[0][0]++, currentSection === to.split('/')[1]) && (cov_mk4d16a99.b[0][1]++, currentSection === section) || (cov_mk4d16a99.b[0][2]++, props.location.pathname === to) || (cov_mk4d16a99.b[0][3]++, active);
  };

  cov_mk4d16a99.s[5]++;
  return <Link to={to} style={Object.assign({
    padding: '0.6em 1em',
    textTransform: 'uppercase',
    color: white
  }, isActiveRoute() ? (cov_mk4d16a99.b[1][0]++, {
    backgroundImage: type === 'secondary' ? (cov_mk4d16a99.b[2][0]++, secondary) : (cov_mk4d16a99.b[2][1]++, primary),
    borderRadius: '1.4em',
    boxShadow: level1
  }) : (cov_mk4d16a99.b[1][1]++, style))}>
      {children}
    </Link>;
}; // Component Properties


cov_mk4d16a99.s[6]++;
MenuItem.propTypes = {
  to: PropTypes.string.isRequired,
  type: PropTypes.string,
  active: PropTypes.bool,
  style: PropTypes.object
};
cov_mk4d16a99.s[7]++;
MenuItem.defaultProps = {
  type: 'secondary',
  active: false,
  style: {}
};
export default withRouter(MenuItem);