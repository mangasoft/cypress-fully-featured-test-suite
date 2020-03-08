var cov_1m4qb0d8nk = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/modules/admin/subscription/List.js";
  var hash = "bfeb6bec3e5796d53b395cb70325e163f19dcfc0";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/modules/admin/subscription/List.js",
    statementMap: {
      "0": {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 22,
          column: 55
        }
      },
      "1": {
        start: {
          line: 27,
          column: 4
        },
        end: {
          line: 27,
          column: 43
        }
      },
      "2": {
        start: {
          line: 31,
          column: 32
        },
        end: {
          line: 31,
          column: 56
        }
      },
      "3": {
        start: {
          line: 33,
          column: 4
        },
        end: {
          line: 93,
          column: 5
        }
      },
      "4": {
        start: {
          line: 67,
          column: 26
        },
        end: {
          line: 79,
          column: 31
        }
      },
      "5": {
        start: {
          line: 98,
          column: 0
        },
        end: {
          line: 103,
          column: 1
        }
      },
      "6": {
        start: {
          line: 107,
          column: 2
        },
        end: {
          line: 109,
          column: 3
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 21,
            column: 2
          },
          end: {
            line: 21,
            column: 3
          }
        },
        loc: {
          start: {
            line: 21,
            column: 30
          },
          end: {
            line: 23,
            column: 3
          }
        },
        line: 21
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 26,
            column: 2
          },
          end: {
            line: 26,
            column: 3
          }
        },
        loc: {
          start: {
            line: 26,
            column: 22
          },
          end: {
            line: 28,
            column: 3
          }
        },
        line: 26
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 30,
            column: 2
          },
          end: {
            line: 30,
            column: 3
          }
        },
        loc: {
          start: {
            line: 30,
            column: 11
          },
          end: {
            line: 94,
            column: 3
          }
        },
        line: 30
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 66,
            column: 33
          },
          end: {
            line: 66,
            column: 34
          }
        },
        loc: {
          start: {
            line: 67,
            column: 26
          },
          end: {
            line: 79,
            column: 31
          }
        },
        line: 67
      },
      "4": {
        name: "listState",
        decl: {
          start: {
            line: 106,
            column: 9
          },
          end: {
            line: 106,
            column: 18
          }
        },
        loc: {
          start: {
            line: 106,
            column: 26
          },
          end: {
            line: 110,
            column: 1
          }
        },
        line: 106
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 59,
            column: 18
          },
          end: {
            line: 85,
            column: 29
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 60,
            column: 22
          },
          end: {
            line: 64,
            column: 27
          }
        }, {
          start: {
            line: 65,
            column: 22
          },
          end: {
            line: 85,
            column: 29
          }
        }],
        line: 59
      },
      "1": {
        loc: {
          start: {
            line: 65,
            column: 22
          },
          end: {
            line: 85,
            column: 29
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 66,
            column: 24
          },
          end: {
            line: 80,
            column: 26
          }
        }, {
          start: {
            line: 81,
            column: 24
          },
          end: {
            line: 85,
            column: 29
          }
        }],
        line: 65
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "bfeb6bec3e5796d53b395cb70325e163f19dcfc0"
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
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet'; // UI Imports

import { Grid, GridCell } from '../../../ui/grid'; // App Imports

import { getList as getSubscriptionsList } from '../../subscription/api/actions';
import { messageShow, messageHide } from '../../common/api/actions';
import Loading from '../../common/Loading';
import EmptyMessage from '../../common/EmptyMessage';
import AdminMenu from '../common/Menu'; // Component

class List extends PureComponent {
  // Runs on server only for SSR
  static fetchData({
    store
  }) {
    cov_1m4qb0d8nk.f[0]++;
    cov_1m4qb0d8nk.s[0]++;
    return store.dispatch(getSubscriptionsList('DESC'));
  } // Runs on client only


  componentDidMount() {
    cov_1m4qb0d8nk.f[1]++;
    cov_1m4qb0d8nk.s[1]++;
    this.props.getSubscriptionsList('DESC');
  }

  render() {
    cov_1m4qb0d8nk.f[2]++;
    const {
      isLoading,
      list
    } = (cov_1m4qb0d8nk.s[2]++, this.props.subscriptions);
    cov_1m4qb0d8nk.s[3]++;
    return <div>
        {
        /* SEO */
      }
        <Helmet>
          <title>Crates - Admin - Crate</title>
        </Helmet>

        {
        /* Top menu bar */
      }
        <AdminMenu />

        {
        /* Page Content */
      }
        <div>
          {
          /* Subscriptions list */
        }
          <Grid alignCenter={true} style={{
          padding: '1em'
        }}>
            <GridCell>
              <table className="striped">
                <thead>
                  <tr>
                    <th>Crate</th>
                    <th>User</th>
                    <th>Created at</th>
                  </tr>
                </thead>

                <tbody>
                {isLoading ? (cov_1m4qb0d8nk.b[0][0]++, <tr>
                        <td colSpan="6">
                          <Loading message="loading crates..." />
                        </td>
                      </tr>) : (cov_1m4qb0d8nk.b[0][1]++, list.length > 0 ? (cov_1m4qb0d8nk.b[1][0]++, list.map(({
                  id,
                  user,
                  crate,
                  createdAt
                }) => {
                  cov_1m4qb0d8nk.f[3]++;
                  cov_1m4qb0d8nk.s[4]++;
                  return <tr key={id}>
                            <td>
                              {crate.name}
                            </td>

                            <td>
                              {user.name} - {user.email}
                            </td>

                            <td>
                              {new Date(parseInt(createdAt)).toDateString()}
                            </td>
                          </tr>;
                })) : (cov_1m4qb0d8nk.b[1][1]++, <tr>
                          <td colSpan="6">
                            <EmptyMessage message="No subscriptions to show." />
                          </td>
                        </tr>))}
                </tbody>
              </table>
            </GridCell>
          </Grid>
        </div>
      </div>;
  }

} // Component Properties


cov_1m4qb0d8nk.s[5]++;
List.propTypes = {
  subscriptions: PropTypes.object.isRequired,
  getSubscriptionsList: PropTypes.func.isRequired,
  messageShow: PropTypes.func.isRequired,
  messageHide: PropTypes.func.isRequired
}; // Component State

function listState(state) {
  cov_1m4qb0d8nk.f[4]++;
  cov_1m4qb0d8nk.s[6]++;
  return {
    subscriptions: state.subscriptions
  };
}

export default connect(listState, {
  getSubscriptionsList,
  messageShow,
  messageHide
})(List);