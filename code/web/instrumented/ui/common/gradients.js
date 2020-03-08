var cov_2annfg4c29 = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/ui/common/gradients.js";
  var hash = "e4d2210a8ab7dafa8b43672ba021c970d6099bd3";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/ui/common/gradients.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 23
        },
        end: {
          line: 6,
          column: 96
        }
      },
      "1": {
        start: {
          line: 8,
          column: 25
        },
        end: {
          line: 8,
          column: 102
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "e4d2210a8ab7dafa8b43672ba021c970d6099bd3"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

// Gradients
// App Imports
import { primary as primaryColor, primaryAccent, secondary as secondaryColor, secondaryAccent } from '../common/colors';
export const primary = (cov_2annfg4c29.s[0]++, `linear-gradient( 90deg, ${primaryAccent} 10%, ${primaryColor} 100%)`);
export const secondary = (cov_2annfg4c29.s[1]++, `linear-gradient( 90deg, ${secondaryAccent} 10%, ${secondaryColor} 100%)`);