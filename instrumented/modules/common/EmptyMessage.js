var cov_1bwx7n25l5 = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/modules/common/EmptyMessage.js";
  var hash = "8d8e20ca4751ddef2d17017f84ecccbbd20fb6df";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/modules/common/EmptyMessage.js",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 21
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
          column: 92
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
      },
      "3": {
        start: {
          line: 19,
          column: 0
        },
        end: {
          line: 21,
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
            column: 21
          },
          end: {
            line: 9,
            column: 22
          }
        },
        loc: {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 10,
            column: 92
          }
        },
        line: 10
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "8d8e20ca4751ddef2d17017f84ecccbbd20fb6df"
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

import { grey3 } from '../../ui/common/colors'; // Component

cov_1bwx7n25l5.s[0]++;

const EmptyMessage = props => {
  cov_1bwx7n25l5.f[0]++;
  cov_1bwx7n25l5.s[1]++;
  return <p style={{
    textAlign: 'center',
    color: grey3,
    flex: 1,
    padding: 10
  }}>{props.message}</p>;
}; // Component Properties


cov_1bwx7n25l5.s[2]++;
EmptyMessage.propTypes = {
  message: PropTypes.string
}; // Component Default Properties

cov_1bwx7n25l5.s[3]++;
EmptyMessage.defaultProps = {
  message: 'No data to show'
};
export default EmptyMessage;