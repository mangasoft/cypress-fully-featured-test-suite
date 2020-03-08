var cov_1o2j1hwxxe = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/ui/input/File.js";
  var hash = "96c0fa05722051f0aa08f9c546ce6ef0295612e5";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/ui/input/File.js",
    statementMap: {
      "0": {
        start: {
          line: 12,
          column: 13
        },
        end: {
          line: 76,
          column: 1
        }
      },
      "1": {
        start: {
          line: 13,
          column: 42
        },
        end: {
          line: 13,
          column: 47
        }
      },
      "2": {
        start: {
          line: 15,
          column: 2
        },
        end: {
          line: 75,
          column: 3
        }
      },
      "3": {
        start: {
          line: 79,
          column: 0
        },
        end: {
          line: 83,
          column: 1
        }
      },
      "4": {
        start: {
          line: 84,
          column: 0
        },
        end: {
          line: 88,
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
            column: 13
          },
          end: {
            line: 12,
            column: 14
          }
        },
        loc: {
          start: {
            line: 12,
            column: 24
          },
          end: {
            line: 76,
            column: 1
          }
        },
        line: 12
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
    hash: "96c0fa05722051f0aa08f9c546ce6ef0295612e5"
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

import { grey2, grey4, black, white } from '../common/colors';
import { primary, secondary } from "../common/gradients";
import { level1, level2, level3, level4 } from "../common/shadows";
import Icon from '../icon'; // Component

cov_1o2j1hwxxe.s[0]++;

const File = props => {
  cov_1o2j1hwxxe.f[0]++;
  const {
    text,
    style,
    name,
    ...other
  } = (cov_1o2j1hwxxe.s[1]++, props);
  cov_1o2j1hwxxe.s[2]++;
  return <div>
      <div className="file-upload" style={style}>
        <label htmlFor={`file-upload-${name}`} className="file-upload__label"><Icon size={1.2}>file_upload</Icon> {text}</label>
        <input className="file-upload__input" type="file" name={name} id={`file-upload-${name}`} {...other} />
      </div>

      {
      /* language=CSS */
    }
      <style jsx>{`
        .file-upload {
          position: relative;
          display: inline-block;
        }

        .file-upload__label {
          display: block;
          padding: 0.8em 1.8em;
          border: none;
          border-radius: 1.4em;
          text-transform: uppercase;
          font-family: 'Roboto', sans-serif;
          cursor: pointer;
          outline: none;
          font-size: 1em;
          color: ${black};
        }
        .file-upload__label:hover {
          box-shadow: ${level3};
        }
        .file-upload__label:active {
          box-shadow: ${level4};
        }
        .file-upload__label:disabled {
          color: ${white};
          box-shadow: ${level1};
          background-color: ${grey2};
          background-image: none;
        }

        .file-upload__input {
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          font-size: 1;
          width:0;
          height: 100%;
          opacity: 0;
        }
        `}
      </style>
    </div>;
}; // Component Properties


cov_1o2j1hwxxe.s[3]++;
File.propTypes = {
  text: PropTypes.string,
  name: PropTypes.string,
  style: PropTypes.object
};
cov_1o2j1hwxxe.s[4]++;
File.defaultProps = {
  text: 'Upload File',
  name: 'file',
  style: {}
};
export default File;