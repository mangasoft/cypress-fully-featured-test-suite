var cov_1r8ib41znb = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/modules/pages/HowItWorks.js";
  var hash = "13e0edb119f2d85b8fda3ae128b707745423ef42";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/modules/pages/HowItWorks.js",
    statementMap: {
      "0": {
        start: {
          line: 22,
          column: 19
        },
        end: {
          line: 94,
          column: 1
        }
      },
      "1": {
        start: {
          line: 23,
          column: 2
        },
        end: {
          line: 93,
          column: 8
        }
      },
      "2": {
        start: {
          line: 97,
          column: 0
        },
        end: {
          line: 99,
          column: 1
        }
      },
      "3": {
        start: {
          line: 103,
          column: 2
        },
        end: {
          line: 105,
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
            column: 19
          },
          end: {
            line: 22,
            column: 20
          }
        },
        loc: {
          start: {
            line: 23,
            column: 2
          },
          end: {
            line: 93,
            column: 8
          }
        },
        line: 23
      },
      "1": {
        name: "howItWorksState",
        decl: {
          start: {
            line: 102,
            column: 9
          },
          end: {
            line: 102,
            column: 24
          }
        },
        loc: {
          start: {
            line: 102,
            column: 32
          },
          end: {
            line: 106,
            column: 1
          }
        },
        line: 102
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 83,
            column: 10
          },
          end: {
            line: 89,
            column: 21
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 84,
            column: 14
          },
          end: {
            line: 86,
            column: 21
          }
        }, {
          start: {
            line: 87,
            column: 14
          },
          end: {
            line: 89,
            column: 21
          }
        }],
        line: 83
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
    hash: "13e0edb119f2d85b8fda3ae128b707745423ef42"
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
import { H3, H4 } from '../../ui/typography';
import Button from '../../ui/button';
import Icon from '../../ui/icon';
import { textLevel1 } from '../../ui/common/shadows';
import { white, grey, grey2, grey3 } from '../../ui/common/colors'; // App Imports

import { APP_URL } from '../../setup/config/env';
import crateRoutes from '../../setup/routes/crate';
import userRoutes from '../../setup/routes/user'; // Component

cov_1r8ib41znb.s[0]++;

const HowItWorks = props => {
  cov_1r8ib41znb.f[0]++;
  cov_1r8ib41znb.s[1]++;
  return <div>
    {
      /* SEO */
    }
    <Helmet>
      <title>How it works? - Crate</title>
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
        <H3 font="secondary">How it works</H3>

        <p style={{
          marginTop: '1em',
          color: grey2
        }}>Just 3 easy steps to subscribe and receive your monthly
          subscription
          of trendy clothes and accessories</p>
      </GridCell>
    </Grid>

    {
      /* 1 - Fill Out Your Style Profile */
    }
    <Grid>
      <GridCell justifyCenter={true} style={{
        textAlign: 'center',
        padding: '8em 0em'
      }}>
        <Icon size={4} style={{
          color: grey3,
          textShadow: textLevel1
        }}>looks_one</Icon>

        <H4 style={{
          marginTop: '0.5em',
          textTransform: 'uppercase'
        }}>Subscribe to your crate</H4>

        <p style={{
          marginTop: '0.5em',
          color: grey3
        }}>Choose one or multiple crates as per your need.</p>
      </GridCell>

      <GridCell style={{
        background: `url('${APP_URL}/images/stock/how-it-works/1.jpg') center top no-repeat`
      }} />
    </Grid>

    {
      /* 2 - Receive a Fix Delivery */
    }
    <Grid>
      <GridCell style={{
        background: `url('${APP_URL}/images/stock/how-it-works/2.jpg') center top no-repeat`
      }} />

      <GridCell justifyCenter={true} style={{
        textAlign: 'center',
        padding: '8em 0em'
      }}>
        <Icon size={4} style={{
          color: grey3,
          textShadow: textLevel1
        }}>looks_two</Icon>

        <H4 style={{
          marginTop: '0.5em',
          textTransform: 'uppercase'
        }}>Receive a Fix Delivery</H4>

        <p style={{
          marginTop: '0.5em',
          color: grey3
        }}>Get 3 to 5 pieces of clothing or accessories delivered to your door.</p>
      </GridCell>
    </Grid>

    {
      /* 3 - Keep what you want */
    }
    <Grid>
      <GridCell justifyCenter={true} style={{
        textAlign: 'center',
        padding: '8em 0em'
      }}>
        <Icon size={4} style={{
          color: grey3,
          textShadow: textLevel1
        }}>looks_3</Icon>

        <H4 style={{
          marginTop: '0.5em',
          textTransform: 'uppercase'
        }}>Keep what you want</H4>

        <p style={{
          marginTop: '0.5em',
          color: grey3
        }}>Only pay for what you keep. Returns are easy and free.</p>
      </GridCell>

      <GridCell style={{
        background: `url('${APP_URL}/images/stock/how-it-works/3.jpg') center top no-repeat`
      }} />
    </Grid>

    {
      /* Bottom call to action bar */
    }
    <Grid style={{
      backgroundColor: grey
    }}>
      <GridCell style={{
        padding: '3em',
        textAlign: 'center'
      }}>
        {props.user.isAuthenticated ? (cov_1r8ib41znb.b[0][0]++, <Link to={crateRoutes.list.path}>
                <Button theme="primary">Subscribe <Icon size={1.2} style={{
              color: white
            }}>navigate_next</Icon></Button>
              </Link>) : (cov_1r8ib41znb.b[0][1]++, <Link to={userRoutes.signup.path}>
                <Button theme="primary">Start <Icon size={1.2} style={{
              color: white
            }}>navigate_next</Icon></Button>
              </Link>)}
      </GridCell>
    </Grid>
  </div>;
}; // Component Properties


cov_1r8ib41znb.s[2]++;
HowItWorks.propTypes = {
  user: PropTypes.object.isRequired
}; // Component State

function howItWorksState(state) {
  cov_1r8ib41znb.f[1]++;
  cov_1r8ib41znb.s[3]++;
  return {
    user: state.user
  };
}

export default connect(howItWorksState, {})(HowItWorks);