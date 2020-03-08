var cov_1ewgo2h9qh = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/modules/common/Loading.js";
  var hash = "a5d0ede91d9ab721ba06dca8560c4425feac4efb";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/modules/common/Loading.js",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 16
        },
        end: {
          line: 11,
          column: 1
        }
      },
      "1": {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 10,
          column: 117
        }
      },
      "2": {
        start: {
          line: 14,
          column: 0
        },
        end: {
          line: 16,
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
            column: 16
          },
          end: {
            line: 9,
            column: 17
          }
        },
        loc: {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 10,
            column: 117
          }
        },
        line: 10
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 10,
            column: 68
          },
          end: {
            line: 10,
            column: 112
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 10,
            column: 84
          },
          end: {
            line: 10,
            column: 97
          }
        }, {
          start: {
            line: 10,
            column: 100
          },
          end: {
            line: 10,
            column: 112
          }
        }],
        line: 10
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "a5d0ede91d9ab721ba06dca8560c4425feac4efb"
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

import { grey2 } from '../../ui/common/colors'; // Component

cov_1ewgo2h9qh.s[0]++;

const Loading = props => {
  cov_1ewgo2h9qh.f[0]++;
  cov_1ewgo2h9qh.s[1]++;
  return <p style={{
    color: grey2,
    textAlign: 'center',
    padding: '2em'
  }}>{props.message ? (cov_1ewgo2h9qh.b[0][0]++, props.message) : (cov_1ewgo2h9qh.b[0][1]++, 'loading...')}</p>;
}; // Component Properties


cov_1ewgo2h9qh.s[2]++;
Loading.propTypes = {
  message: PropTypes.string
};
export default Loading;