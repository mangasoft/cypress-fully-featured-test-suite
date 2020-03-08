var cov_2dbqczqh17 = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/modules/pages/Home.js";
  var hash = "a161c623b31e38dd98fcfef9237a015dd3f63e05";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/modules/pages/Home.js",
    statementMap: {
      "0": {
        start: {
          line: 22,
          column: 13
        },
        end: {
          line: 63,
          column: 1
        }
      },
      "1": {
        start: {
          line: 23,
          column: 2
        },
        end: {
          line: 62,
          column: 8
        }
      },
      "2": {
        start: {
          line: 66,
          column: 0
        },
        end: {
          line: 68,
          column: 1
        }
      },
      "3": {
        start: {
          line: 72,
          column: 2
        },
        end: {
          line: 74,
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
            column: 13
          },
          end: {
            line: 22,
            column: 14
          }
        },
        loc: {
          start: {
            line: 23,
            column: 2
          },
          end: {
            line: 62,
            column: 8
          }
        },
        line: 23
      },
      "1": {
        name: "homeState",
        decl: {
          start: {
            line: 71,
            column: 9
          },
          end: {
            line: 71,
            column: 18
          }
        },
        loc: {
          start: {
            line: 71,
            column: 26
          },
          end: {
            line: 75,
            column: 1
          }
        },
        line: 71
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 49,
            column: 10
          },
          end: {
            line: 55,
            column: 21
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 50,
            column: 14
          },
          end: {
            line: 52,
            column: 21
          }
        }, {
          start: {
            line: 53,
            column: 14
          },
          end: {
            line: 55,
            column: 21
          }
        }],
        line: 49
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
    hash: "a161c623b31e38dd98fcfef9237a015dd3f63e05"
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
import { H1, H4 } from '../../ui/typography';
import Button from '../../ui/button';
import { white } from '../../ui/common/colors';
import { textLevel1 } from '../../ui/common/shadows'; // App Imports

import { APP_URL } from '../../setup/config/env';
import crateRoutes from '../../setup/routes/crate';
import userRoutes from '../../setup/routes/user';
import Onboarding from './Onboarding'; // Component

cov_2dbqczqh17.s[0]++;

const Home = props => {
  cov_2dbqczqh17.f[0]++;
  cov_2dbqczqh17.s[1]++;
  return <div>
    {
      /* Home */
    }
    <Grid alignCenter={true} style={{
      backgroundImage: `url('${APP_URL}/images/cover.jpg')`,
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      backgroundPosition: 'center top',
      height: 'calc(100vh - 5em)',
      textAlign: 'center',
      color: white
    }}>
      {
        /* SEO */
      }
      <Helmet>
        <title>Monthly supply of clothes and accessories for Men and Women - Crate</title>
      </Helmet>

      {
        /* Content */
      }
      <GridCell>
        <H1 font="secondary" style={{
          textShadow: textLevel1
        }}>Crate</H1>

        <H4 style={{
          textShadow: textLevel1,
          marginTop: '0.5em'
        }}>
          Your monthly subscription of trendy clothes and accessories
        </H4>

        {
          /* Call to action */
        }
        {props.user.isAuthenticated ? (cov_2dbqczqh17.b[0][0]++, <Link to={crateRoutes.list.path}>
                <Button theme="secondary" style={{
            marginTop: '1em'
          }}>Get Subscription</Button>
              </Link>) : (cov_2dbqczqh17.b[0][1]++, <Link to={userRoutes.signup.path}>
                <Button theme="secondary" style={{
            marginTop: '1em'
          }}>Get Started</Button>
              </Link>)}
      </GridCell>
    </Grid>

    {
      /* Onboarding */
    }
    <Onboarding />
  </div>;
}; // Component Properties


cov_2dbqczqh17.s[2]++;
Home.propTypes = {
  user: PropTypes.object.isRequired
}; // Component State

function homeState(state) {
  cov_2dbqczqh17.f[1]++;
  cov_2dbqczqh17.s[3]++;
  return {
    user: state.user
  };
}

export default connect(homeState, {})(Home);