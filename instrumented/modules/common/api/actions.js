var cov_uz3x60r0a = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/modules/common/api/actions.js";
  var hash = "4e04980818002cd3cca3600666c882b951ee94d8";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/modules/common/api/actions.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 28
        },
        end: {
          line: 5,
          column: 49
        }
      },
      "1": {
        start: {
          line: 6,
          column: 28
        },
        end: {
          line: 6,
          column: 49
        }
      },
      "2": {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 10,
          column: 40
        }
      },
      "3": {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 14,
          column: 31
        }
      },
      "4": {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 24,
          column: 3
        }
      },
      "5": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 23,
          column: 6
        }
      }
    },
    fnMap: {
      "0": {
        name: "messageShow",
        decl: {
          start: {
            line: 9,
            column: 16
          },
          end: {
            line: 9,
            column: 27
          }
        },
        loc: {
          start: {
            line: 9,
            column: 37
          },
          end: {
            line: 11,
            column: 1
          }
        },
        line: 9
      },
      "1": {
        name: "messageHide",
        decl: {
          start: {
            line: 13,
            column: 16
          },
          end: {
            line: 13,
            column: 27
          }
        },
        loc: {
          start: {
            line: 13,
            column: 30
          },
          end: {
            line: 15,
            column: 1
          }
        },
        line: 13
      },
      "2": {
        name: "upload",
        decl: {
          start: {
            line: 17,
            column: 16
          },
          end: {
            line: 17,
            column: 22
          }
        },
        loc: {
          start: {
            line: 17,
            column: 29
          },
          end: {
            line: 25,
            column: 1
          }
        },
        line: 17
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 18,
            column: 9
          },
          end: {
            line: 18,
            column: 10
          }
        },
        loc: {
          start: {
            line: 18,
            column: 21
          },
          end: {
            line: 24,
            column: 3
          }
        },
        line: 18
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "4e04980818002cd3cca3600666c882b951ee94d8"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

// Actions Types
import axios from 'axios/index';
import { routeApi } from '../../../setup/routes';
export const MESSAGE_SHOW = (cov_uz3x60r0a.s[0]++, 'COMMON_MESSAGE_SHOW');
export const MESSAGE_HIDE = (cov_uz3x60r0a.s[1]++, 'COMMON_MESSAGE_HIDE'); // Actions

export function messageShow(message) {
  cov_uz3x60r0a.f[0]++;
  cov_uz3x60r0a.s[2]++;
  return {
    type: MESSAGE_SHOW,
    message
  };
}
export function messageHide() {
  cov_uz3x60r0a.f[1]++;
  cov_uz3x60r0a.s[3]++;
  return {
    type: MESSAGE_HIDE
  };
}
export function upload(data) {
  cov_uz3x60r0a.f[2]++;
  cov_uz3x60r0a.s[4]++;
  return dispatch => {
    cov_uz3x60r0a.f[3]++;
    cov_uz3x60r0a.s[5]++;
    return axios.post(routeApi + '/upload', data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  };
}