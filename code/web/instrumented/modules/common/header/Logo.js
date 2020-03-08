var cov_8pt16lki1 = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/modules/common/header/Logo.js";
  var hash = "6829b8cb9ca48907512cedc3ceb121372b8f3bfd";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/modules/common/header/Logo.js",
    statementMap: {
      "0": {
        start: {
          line: 13,
          column: 13
        },
        end: {
          line: 21,
          column: 1
        }
      },
      "1": {
        start: {
          line: 14,
          column: 24
        },
        end: {
          line: 14,
          column: 29
        }
      },
      "2": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 20,
          column: 3
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 13,
            column: 13
          },
          end: {
            line: 13,
            column: 14
          }
        },
        loc: {
          start: {
            line: 13,
            column: 24
          },
          end: {
            line: 21,
            column: 1
          }
        },
        line: 13
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
    hash: "6829b8cb9ca48907512cedc3ceb121372b8f3bfd"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

// Imports
import React from 'react';
import { Link } from 'react-router-dom'; // UI Imports

import { secondary } from '../../../ui/common/fonts';
import { textLevel1 } from '../../../ui/common/shadows'; // App Imports

import home from '../../../setup/routes/home'; // Component

cov_8pt16lki1.s[0]++;

const Logo = props => {
  cov_8pt16lki1.f[0]++;
  const { ...others
  } = (cov_8pt16lki1.s[1]++, props);
  cov_8pt16lki1.s[2]++;
  return <Link to={home.home.path} {...others}>
      <span style={{
      fontFamily: secondary,
      fontSize: '2em',
      color: 'white',
      textShadow: textLevel1
    }}>Crate</span>
    </Link>;
};

export default Logo;