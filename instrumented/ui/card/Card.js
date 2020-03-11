var cov_1wwpb7cibv = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/ui/card/Card.js";
  var hash = "e4f6865b132dfe4372ab44392592b6f22b6d80c8";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/ui/card/Card.js",
    statementMap: {
      "0": {
        start: {
          line: 8,
          column: 13
        },
        end: {
          line: 26,
          column: 1
        }
      },
      "1": {
        start: {
          line: 9,
          column: 33
        },
        end: {
          line: 9,
          column: 38
        }
      },
      "2": {
        start: {
          line: 11,
          column: 2
        },
        end: {
          line: 25,
          column: 3
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 8,
            column: 13
          },
          end: {
            line: 8,
            column: 14
          }
        },
        loc: {
          start: {
            line: 8,
            column: 24
          },
          end: {
            line: 26,
            column: 1
          }
        },
        line: 8
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "e4f6865b132dfe4372ab44392592b6f22b6d80c8"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

// Imports
import React from 'react'; // UI Imports

import { level1 } from '../common/shadows'; // Component

cov_1wwpb7cibv.s[0]++;

const Card = props => {
  cov_1wwpb7cibv.f[0]++;
  const {
    children,
    ...other
  } = (cov_1wwpb7cibv.s[1]++, props);
  cov_1wwpb7cibv.s[2]++;
  return <div {...other}>
      {children}

      {
      /* language=CSS */
    }
      <style jsx>{`
        div {
          border-radius: 0.2em;
          font-family: 'Roboto', sans-serif;
          box-shadow: ${level1};
        }
        `}
      </style>
    </div>;
};

export default Card;