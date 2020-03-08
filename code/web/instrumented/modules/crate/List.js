var cov_16oty51hzv = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/modules/crate/List.js";
  var hash = "7ec0d1dd5c73256104e15e7772427111f0621d51";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/modules/crate/List.js",
    statementMap: {
      "0": {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 22,
          column: 48
        }
      },
      "1": {
        start: {
          line: 27,
          column: 4
        },
        end: {
          line: 27,
          column: 36
        }
      },
      "2": {
        start: {
          line: 31,
          column: 4
        },
        end: {
          line: 70,
          column: 6
        }
      },
      "3": {
        start: {
          line: 60,
          column: 16
        },
        end: {
          line: 62,
          column: 22
        }
      },
      "4": {
        start: {
          line: 75,
          column: 0
        },
        end: {
          line: 78,
          column: 2
        }
      },
      "5": {
        start: {
          line: 82,
          column: 2
        },
        end: {
          line: 84,
          column: 4
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
            line: 71,
            column: 3
          }
        },
        line: 30
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 59,
            column: 41
          },
          end: {
            line: 59,
            column: 42
          }
        },
        loc: {
          start: {
            line: 60,
            column: 16
          },
          end: {
            line: 62,
            column: 22
          }
        },
        line: 60
      },
      "4": {
        name: "listState",
        decl: {
          start: {
            line: 81,
            column: 9
          },
          end: {
            line: 81,
            column: 18
          }
        },
        loc: {
          start: {
            line: 81,
            column: 26
          },
          end: {
            line: 85,
            column: 1
          }
        },
        line: 81
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 56,
            column: 13
          },
          end: {
            line: 66,
            column: 13
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 57,
            column: 14
          },
          end: {
            line: 57,
            column: 25
          }
        }, {
          start: {
            line: 58,
            column: 16
          },
          end: {
            line: 66,
            column: 13
          }
        }],
        line: 56
      },
      "1": {
        loc: {
          start: {
            line: 58,
            column: 16
          },
          end: {
            line: 66,
            column: 13
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 59,
            column: 14
          },
          end: {
            line: 63,
            column: 16
          }
        }, {
          start: {
            line: 65,
            column: 14
          },
          end: {
            line: 65,
            column: 58
          }
        }],
        line: 58
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
    hash: "7ec0d1dd5c73256104e15e7772427111f0621d51"
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

import { getList as getCratesList } from './api/actions';
import Loading from '../common/Loading';
import EmptyMessage from '../common/EmptyMessage';
import CrateItem from './Item'; // Component

class List extends PureComponent {
  // Runs on server only for SSR
  static fetchData({
    store
  }) {
    cov_16oty51hzv.f[0]++;
    cov_16oty51hzv.s[0]++;
    return store.dispatch(getCratesList('ASC'));
  } // Runs on client only


  componentDidMount() {
    cov_16oty51hzv.f[1]++;
    cov_16oty51hzv.s[1]++;
    this.props.getCratesList('ASC');
  }

  render() {
    cov_16oty51hzv.f[2]++;
    cov_16oty51hzv.s[2]++;
    return <div>
        {
        /* SEO */
      }
        <Helmet>
          <title>Crates for everyone! - Crate</title>
        </Helmet>

        {
        /* Top title bar */
      }
        <Grid style={{
        backgroundColor: grey
      }}>
          <GridCell data-test="HomePageBanner" style={{
          padding: '2em',
          textAlign: 'center'
        }}>
            <H3 font="secondary">Crates for everyone!</H3>

            <p style={{
            marginTop: '1em',
            color: grey2
          }}>
              You can choose crate which suits your need. You can also subscribe
              to multiple crates.
            </p>
          </GridCell>
        </Grid>

        {
        /* Crate list */
      }
        <Grid>
          <GridCell data-test="CrateList">
            {this.props.crates.isLoading ? (cov_16oty51hzv.b[0][0]++, <Loading />) : (cov_16oty51hzv.b[0][1]++, this.props.crates.list.length > 0 ? (cov_16oty51hzv.b[1][0]++, this.props.crates.list.map(crate => {
            cov_16oty51hzv.f[3]++;
            cov_16oty51hzv.s[3]++;
            return <div key={crate.id} style={{
              margin: '2em',
              float: 'left'
            }}>
                  <CrateItem crate={crate} />
                </div>;
          })) : (cov_16oty51hzv.b[1][1]++, <EmptyMessage message="No crates to show" />))}
          </GridCell>
        </Grid>
      </div>;
  }

} // Component Properties


cov_16oty51hzv.s[4]++;
List.propTypes = {
  crates: PropTypes.object.isRequired,
  getCratesList: PropTypes.func.isRequired
}; // Component State

function listState(state) {
  cov_16oty51hzv.f[4]++;
  cov_16oty51hzv.s[5]++;
  return {
    crates: state.crates
  };
}

export default connect(listState, {
  getCratesList
})(List);