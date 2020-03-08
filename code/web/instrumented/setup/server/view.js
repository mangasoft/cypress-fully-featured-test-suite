var cov_llvv6yzrv = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/setup/server/view.js";
  var hash = "a36b4664501e4d4e75d4341e3d418dc66b886b32";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/setup/server/view.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 14
        },
        end: {
          line: 62,
          column: 1
        }
      },
      "1": {
        start: {
          line: 2,
          column: 0
        },
        end: {
          line: 61,
          column: 8
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 1,
            column: 14
          },
          end: {
            line: 1,
            column: 15
          }
        },
        loc: {
          start: {
            line: 2,
            column: 0
          },
          end: {
            line: 61,
            column: 8
          }
        },
        line: 2
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 1,
            column: 34
          },
          end: {
            line: 1,
            column: 47
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 1,
            column: 43
          },
          end: {
            line: 1,
            column: 47
          }
        }],
        line: 1
      },
      "1": {
        loc: {
          start: {
            line: 1,
            column: 49
          },
          end: {
            line: 1,
            column: 61
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 1,
            column: 59
          },
          end: {
            line: 1,
            column: 61
          }
        }],
        line: 1
      },
      "2": {
        loc: {
          start: {
            line: 1,
            column: 63
          },
          end: {
            line: 1,
            column: 74
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 1,
            column: 72
          },
          end: {
            line: 1,
            column: 74
          }
        }],
        line: 1
      },
      "3": {
        loc: {
          start: {
            line: 1,
            column: 76
          },
          end: {
            line: 1,
            column: 93
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 1,
            column: 91
          },
          end: {
            line: 1,
            column: 93
          }
        }],
        line: 1
      },
      "4": {
        loc: {
          start: {
            line: 10,
            column: 7
          },
          end: {
            line: 10,
            column: 71
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 10,
            column: 16
          },
          end: {
            line: 10,
            column: 66
          }
        }, {
          start: {
            line: 10,
            column: 69
          },
          end: {
            line: 10,
            column: 71
          }
        }],
        line: 10
      },
      "5": {
        loc: {
          start: {
            line: 52,
            column: 73
          },
          end: {
            line: 52,
            column: 125
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 52,
            column: 102
          },
          end: {
            line: 52,
            column: 119
          }
        }, {
          start: {
            line: 52,
            column: 123
          },
          end: {
            line: 52,
            column: 125
          }
        }],
        line: 52
      }
    },
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0],
      "1": [0],
      "2": [0],
      "3": [0],
      "4": [0, 0],
      "5": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "a36b4664501e4d4e75d4341e3d418dc66b886b32"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

cov_llvv6yzrv.s[0]++;

const index = (APP_URL, NODE_ENV, helmet = (cov_llvv6yzrv.b[0][0]++, null), appHtml = (cov_llvv6yzrv.b[1][0]++, ''), styles = (cov_llvv6yzrv.b[2][0]++, ''), initialState = (cov_llvv6yzrv.b[3][0]++, {})) => {
  cov_llvv6yzrv.f[0]++;
  cov_llvv6yzrv.s[1]++;
  return `<!doctype html>
<html lang="en">
<head>
    <!-- Meta -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="theme-color" content="#7367F0">
    ${helmet ? (cov_llvv6yzrv.b[4][0]++, helmet.title.toString() + ' ' + helmet.meta.toString()) : (cov_llvv6yzrv.b[4][1]++, '')}
  
    <link rel="manifest" href="/manifest.json">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="#7367F0">
    <meta name="apple-mobile-web-app-title" content="Crate">
    <meta name="msapplication-TileColor" content="#2F3BA2">
    <link rel="canonical" href="${APP_URL}">
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="${APP_URL}/images/favicon/favicon.ico" />
    <link rel="icon" type="image/png" sizes="16x16" href="${APP_URL}/images/favicon/favicon-16x16.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="${APP_URL}/images/favicon/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="96x96" href="${APP_URL}/images/favicon/favicon-96x96.png" />
    <link rel="apple-touch-icon" href="${APP_URL}/mages/icons/icon-152x152.png">
    <meta name="msapplication-TileImage" content="${APP_URL}/images/icons/icon-144x144.png">
    
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    
    <!-- CSS - Reset -->
    <link href="${APP_URL}/css/reset.css" rel="stylesheet" />
    
    <!-- CSS - Common -->
    <link href="${APP_URL}/css/common.css" rel="stylesheet" />
    
    <!-- CSS - Generated -->
    ${styles}
</head>
<body>
    <!-- App -->
    <main id="app">${appHtml}</main>
    
    <!-- Initial State -->
    <script>
        window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
    </script>
    
    <!-- JS Bundle -->
    <script type="text/javascript" src="${APP_URL}/js/bundles/vendor.js"></script>
    <script type="text/javascript" src="${APP_URL}/js/bundles/app.js${NODE_ENV !== 'production' ? (cov_llvv6yzrv.b[5][0]++, '?' + Math.random()) : (cov_llvv6yzrv.b[5][1]++, '')}"></script>
    <script>
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker
          .register('${APP_URL}/js/service-worker.js')
          .then(function() { console.log('Service Worker Registered') })
      }
    </script>
</body>
</html>`;
};

export default index;