var cov_2nyn3t312e = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/modules/pages/Women.js";
  var hash = "8aa95f6b3dcf56c4a2900ab79bbbb24ec9b32b53";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/modules/pages/Women.js",
    statementMap: {
      "0": {
        start: {
          line: 21,
          column: 14
        },
        end: {
          line: 71,
          column: 1
        }
      },
      "1": {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 70,
          column: 9
        }
      },
      "2": {
        start: {
          line: 74,
          column: 0
        },
        end: {
          line: 76,
          column: 1
        }
      },
      "3": {
        start: {
          line: 80,
          column: 2
        },
        end: {
          line: 82,
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
            column: 14
          },
          end: {
            line: 21,
            column: 15
          }
        },
        loc: {
          start: {
            line: 22,
            column: 2
          },
          end: {
            line: 70,
            column: 9
          }
        },
        line: 22
      },
      "1": {
        name: "womenState",
        decl: {
          start: {
            line: 79,
            column: 9
          },
          end: {
            line: 79,
            column: 19
          }
        },
        loc: {
          start: {
            line: 79,
            column: 27
          },
          end: {
            line: 83,
            column: 1
          }
        },
        line: 79
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 61,
            column: 8
          },
          end: {
            line: 67,
            column: 19
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 62,
            column: 12
          },
          end: {
            line: 64,
            column: 19
          }
        }, {
          start: {
            line: 65,
            column: 12
          },
          end: {
            line: 67,
            column: 19
          }
        }],
        line: 61
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "8aa95f6b3dcf56c4a2900ab79bbbb24ec9b32b53"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

// Imports
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'; // UI Imports

import { Grid, GridCell } from '../../ui/grid';
import { H2, H5 } from '../../ui/typography';
import Button from '../../ui/button';
import ImageTile from '../../ui/image/Tile';
import { level1 } from '../../ui/common/shadows'; // App Imports

import { APP_URL } from '../../setup/config/env';
import crateRoutes from '../../setup/routes/crate';
import userRoutes from '../../setup/routes/user'; // Component

cov_2nyn3t312e.s[0]++;

const Women = props => {
  cov_2nyn3t312e.f[0]++;
  cov_2nyn3t312e.s[1]++;
  return <Grid alignCenter={true} style={{
    padding: '2em'
  }}>
    {
      /* SEO */
    }
    <Helmet>
      <title>Monthly supply of clothes and accessories for Women - Crate</title>
    </Helmet>

    {
      /* Left Content - Image Collage */
    }
    <GridCell>
      <Grid gutter={true} alignCenter={true}>
        <GridCell justifyCenter={true}>
          <ImageTile width={300} height={530} shadow={level1} image={`${APP_URL}/images/stock/women/1.jpg`} />
        </GridCell>

        <GridCell>
          <Grid>
            <GridCell justifyCenter={true}>
              <ImageTile width={170} height={250} shadow={level1} image={`${APP_URL}/images/stock/women/2.jpg`} />
            </GridCell>
          </Grid>

          <Grid>
            <GridCell justifyCenter={true}>
              <ImageTile width={170} height={250} shadow={level1} image={`${APP_URL}/images/stock/women/3.jpg`} style={{
                marginTop: '1.9em'
              }} />
            </GridCell>
          </Grid>
        </GridCell>
      </Grid>
    </GridCell>

    {
      /* Right Content */
    }
    <GridCell style={{
      textAlign: 'center'
    }}>
      <H2 font="secondary">Monthly crates for Women</H2>

      <H5 style={{
        marginTop: '0.5em'
      }}>
        Save time. Look great. The personal styling service customized to your fit, lifestyle & spending preferences.
      </H5>

      {
        /* Call to action */
      }
      {props.user.isAuthenticated ? (cov_2nyn3t312e.b[0][0]++, <Link to={crateRoutes.list.path}>
              <Button theme="secondary" style={{
          marginTop: '1em'
        }}>Get Subscription</Button>
            </Link>) : (cov_2nyn3t312e.b[0][1]++, <Link to={userRoutes.signup.path}>
              <Button theme="secondary" style={{
          marginTop: '1em'
        }}>Get Started</Button>
            </Link>)}
    </GridCell>
  </Grid>;
}; // Component Properties


cov_2nyn3t312e.s[2]++;
Women.propTypes = {
  user: PropTypes.object.isRequired
}; // Component State

function womenState(state) {
  cov_2nyn3t312e.f[1]++;
  cov_2nyn3t312e.s[3]++;
  return {
    user: state.user
  };
}

export default connect(womenState, {})(Women);