var cov_ehkkka0ap = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/modules/extra/DummyComponentRedux.js";
  var hash = "b9d9be0c96be440d449609b9a2df05c2ebbbe4e2";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/modules/extra/DummyComponentRedux.js",
    statementMap: {
      "0": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 13,
          column: 16
        }
      },
      "1": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 15,
          column: 19
        }
      },
      "2": {
        start: {
          line: 23,
          column: 4
        },
        end: {
          line: 27,
          column: 5
        }
      },
      "3": {
        start: {
          line: 32,
          column: 0
        },
        end: {
          line: 35,
          column: 1
        }
      },
      "4": {
        start: {
          line: 39,
          column: 2
        },
        end: {
          line: 39,
          column: 14
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 12,
            column: 2
          },
          end: {
            line: 12,
            column: 3
          }
        },
        loc: {
          start: {
            line: 12,
            column: 21
          },
          end: {
            line: 16,
            column: 3
          }
        },
        line: 12
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 18,
            column: 2
          },
          end: {
            line: 18,
            column: 3
          }
        },
        loc: {
          start: {
            line: 18,
            column: 22
          },
          end: {
            line: 20,
            column: 3
          }
        },
        line: 18
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 22,
            column: 2
          },
          end: {
            line: 22,
            column: 3
          }
        },
        loc: {
          start: {
            line: 22,
            column: 11
          },
          end: {
            line: 28,
            column: 3
          }
        },
        line: 22
      },
      "3": {
        name: "dummyComponentReduxState",
        decl: {
          start: {
            line: 38,
            column: 9
          },
          end: {
            line: 38,
            column: 33
          }
        },
        loc: {
          start: {
            line: 38,
            column: 41
          },
          end: {
            line: 40,
            column: 1
          }
        },
        line: 38
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
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "b9d9be0c96be440d449609b9a2df05c2ebbbe4e2"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

// Imports
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; // App Imports
// import { someAction } from './api/actions'
// Component

class DummyComponentRedux extends PureComponent {
  constructor(props) {
    cov_ehkkka0ap.f[0]++;
    cov_ehkkka0ap.s[0]++;
    super(props);
    cov_ehkkka0ap.s[1]++;
    this.state = {};
  }

  componentDidMount() {// this.props.someAction()

    cov_ehkkka0ap.f[1]++;
  }

  render() {
    cov_ehkkka0ap.f[2]++;
    cov_ehkkka0ap.s[2]++;
    return <div>
        <h1>Dummy Component Redux</h1>
      </div>;
  }

} // Component Properties


cov_ehkkka0ap.s[3]++;
DummyComponentRedux.propTypes = {
  dummyId: PropTypes.number.isRequired // someAction: PropTypes.func.isRequired,

}; // Component State

function dummyComponentReduxState(state) {
  cov_ehkkka0ap.f[3]++;
  cov_ehkkka0ap.s[4]++;
  return state;
}

export default connect(dummyComponentReduxState, {
  /* someAction */
})(DummyComponentRedux);