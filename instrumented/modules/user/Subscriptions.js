var cov_2jrgfb07cy = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/modules/user/Subscriptions.js";
  var hash = "ba0f4ec36802785cf55740cce6285e0b681b75a8";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/modules/user/Subscriptions.js",
    statementMap: {
      "0": {
        start: {
          line: 23,
          column: 4
        },
        end: {
          line: 23,
          column: 42
        }
      },
      "1": {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 28,
          column: 30
        }
      },
      "2": {
        start: {
          line: 32,
          column: 4
        },
        end: {
          line: 67,
          column: 5
        }
      },
      "3": {
        start: {
          line: 58,
          column: 24
        },
        end: {
          line: 60,
          column: 30
        }
      },
      "4": {
        start: {
          line: 72,
          column: 0
        },
        end: {
          line: 75,
          column: 1
        }
      },
      "5": {
        start: {
          line: 79,
          column: 2
        },
        end: {
          line: 81,
          column: 3
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
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
            column: 30
          },
          end: {
            line: 24,
            column: 3
          }
        },
        line: 22
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 27,
            column: 2
          },
          end: {
            line: 27,
            column: 3
          }
        },
        loc: {
          start: {
            line: 27,
            column: 22
          },
          end: {
            line: 29,
            column: 3
          }
        },
        line: 27
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 31,
            column: 2
          },
          end: {
            line: 31,
            column: 3
          }
        },
        loc: {
          start: {
            line: 31,
            column: 11
          },
          end: {
            line: 68,
            column: 3
          }
        },
        line: 31
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 57,
            column: 56
          },
          end: {
            line: 57,
            column: 57
          }
        },
        loc: {
          start: {
            line: 58,
            column: 24
          },
          end: {
            line: 60,
            column: 30
          }
        },
        line: 58
      },
      "4": {
        name: "subscriptionsState",
        decl: {
          start: {
            line: 78,
            column: 9
          },
          end: {
            line: 78,
            column: 27
          }
        },
        loc: {
          start: {
            line: 78,
            column: 35
          },
          end: {
            line: 82,
            column: 1
          }
        },
        line: 78
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 54,
            column: 14
          },
          end: {
            line: 62,
            column: 90
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 55,
            column: 18
          },
          end: {
            line: 55,
            column: 28
          }
        }, {
          start: {
            line: 56,
            column: 18
          },
          end: {
            line: 62,
            column: 90
          }
        }],
        line: 54
      },
      "1": {
        loc: {
          start: {
            line: 56,
            column: 18
          },
          end: {
            line: 62,
            column: 90
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 57,
            column: 22
          },
          end: {
            line: 61,
            column: 24
          }
        }, {
          start: {
            line: 62,
            column: 22
          },
          end: {
            line: 62,
            column: 90
          }
        }],
        line: 56
      }
    },
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
      "3": 0,
      "4": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "ba0f4ec36802785cf55740cce6285e0b681b75a8"
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

import { Grid, GridCell } from '../../ui/grid';
import { H3 } from '../../ui/typography';
import { grey, grey2 } from '../../ui/common/colors'; // App Imports

import { getListByUser } from '../subscription/api/actions';
import Loading from '../common/Loading';
import EmptyMessage from '../common/EmptyMessage';
import SubscriptionItem from '../subscription/Item'; // Component

class Subscriptions extends PureComponent {
  // Runs on server only for SSR
  static fetchData({
    store
  }) {
    cov_2jrgfb07cy.f[0]++;
    cov_2jrgfb07cy.s[0]++;
    return store.dispatch(getListByUser());
  } // Runs on client only


  componentDidMount() {
    cov_2jrgfb07cy.f[1]++;
    cov_2jrgfb07cy.s[1]++;
    this.props.getListByUser();
  }

  render() {
    cov_2jrgfb07cy.f[2]++;
    cov_2jrgfb07cy.s[2]++;
    return <div>
        {
        /* SEO */
      }
        <Helmet>
          <title>My Subscriptions - Crate</title>
        </Helmet>

        {
        /* Top title bar */
      }
        <Grid style={{
        backgroundColor: grey
      }}>
          <GridCell style={{
          padding: '2em',
          textAlign: 'center'
        }}>
            <H3 font="secondary">My subscriptions</H3>

            <p style={{
            marginTop: '1em',
            color: grey2
          }}>The crates you are subscribed to are listed here. You can
              cancel
              anytime.</p>
          </GridCell>
        </Grid>

        {
        /* Product list */
      }
        <Grid>
          <GridCell>
            {this.props.subscriptions.isLoading ? (cov_2jrgfb07cy.b[0][0]++, <Loading />) : (cov_2jrgfb07cy.b[0][1]++, this.props.subscriptions.list.length > 0 ? (cov_2jrgfb07cy.b[1][0]++, this.props.subscriptions.list.map(subscription => {
            cov_2jrgfb07cy.f[3]++;
            cov_2jrgfb07cy.s[3]++;
            return <div key={subscription.id} style={{
              margin: '2em',
              float: 'left'
            }}>
                          <SubscriptionItem subscription={subscription} />
                        </div>;
          })) : (cov_2jrgfb07cy.b[1][1]++, <EmptyMessage message="You are not subscribed to any crates yet." />))}
          </GridCell>
        </Grid>
      </div>;
  }

} // Component Properties


cov_2jrgfb07cy.s[4]++;
Subscriptions.propTypes = {
  subscriptions: PropTypes.object.isRequired,
  getListByUser: PropTypes.func.isRequired
}; // Component State

function subscriptionsState(state) {
  cov_2jrgfb07cy.f[4]++;
  cov_2jrgfb07cy.s[5]++;
  return {
    subscriptions: state.subscriptionsByUser
  };
}

export default connect(subscriptionsState, {
  getListByUser
})(Subscriptions);