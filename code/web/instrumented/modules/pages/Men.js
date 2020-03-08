var cov_a0xwao2oc = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/modules/pages/Men.js";
  var hash = "ce2aa84465558323d29ed1b05e628e00918f4522";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/modules/pages/Men.js",
    statementMap: {
      "0": {
        start: {
          line: 21,
          column: 12
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
            column: 12
          },
          end: {
            line: 21,
            column: 13
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
        name: "menState",
        decl: {
          start: {
            line: 79,
            column: 9
          },
          end: {
            line: 79,
            column: 17
          }
        },
        loc: {
          start: {
            line: 79,
            column: 25
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
    hash: "ce2aa84465558323d29ed1b05e628e00918f4522"
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

cov_a0xwao2oc.s[0]++;

const Men = props => {
  cov_a0xwao2oc.f[0]++;
  cov_a0xwao2oc.s[1]++;
  return <Grid alignCenter={true} style={{
    padding: '2em'
  }}>
    {
      /* SEO */
    }
    <Helmet>
      <title>Monthly supply of clothes and accessories for Men - Crate</title>
    </Helmet>

    {
      /* Left Content - Image Collage */
    }
    <GridCell>
      <Grid gutter={true} alignCenter={true}>
        <GridCell justifyCenter={true}>
          <ImageTile width={300} height={530} shadow={level1} image={`${APP_URL}/images/stock/men/1.jpg`} />
        </GridCell>

        <GridCell>
          <Grid>
            <GridCell justifyCenter={true}>
              <ImageTile width={170} height={250} shadow={level1} image={`${APP_URL}/images/stock/men/2.jpg`} />
            </GridCell>
          </Grid>

          <Grid>
            <GridCell justifyCenter={true}>
              <ImageTile width={170} height={250} shadow={level1} image={`${APP_URL}/images/stock/men/3.jpg`} style={{
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
      <H2 font="secondary">Monthly crates for Men</H2>

      <H5 style={{
        marginTop: '0.5em'
      }}>
        Save time. Look great. The personal styling service customized to your fit, lifestyle & spending preferences.
      </H5>

      {
        /* Call to action */
      }
      {props.user.isAuthenticated ? (cov_a0xwao2oc.b[0][0]++, <Link to={crateRoutes.list.path}>
              <Button theme="secondary" style={{
          marginTop: '1em'
        }}>Get Subscription</Button>
            </Link>) : (cov_a0xwao2oc.b[0][1]++, <Link to={userRoutes.signup.path}>
              <Button theme="secondary" style={{
          marginTop: '1em'
        }}>Get Started</Button>
            </Link>)}
    </GridCell>
  </Grid>;
}; // Component Properties


cov_a0xwao2oc.s[2]++;
Men.propTypes = {
  user: PropTypes.object.isRequired
}; // Component State

function menState(state) {
  cov_a0xwao2oc.f[1]++;
  cov_a0xwao2oc.s[3]++;
  return {
    user: state.user
  };
}

export default connect(menState, {})(Men);