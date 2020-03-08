var cov_1xyrvda5jo = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/ui/common/fonts.js";
  var hash = "afae337ef977c04484a116019f340307b8dc2ac6";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/ui/common/fonts.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 23
        },
        end: {
          line: 3,
          column: 45
        }
      },
      "1": {
        start: {
          line: 5,
          column: 25
        },
        end: {
          line: 5,
          column: 45
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
    hash: "afae337ef977c04484a116019f340307b8dc2ac6"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

// Fonts
export const primary = (cov_1xyrvda5jo.s[0]++, `'Roboto', sans-serif`);
export const secondary = (cov_1xyrvda5jo.s[1]++, `'Lobster', cursive`);