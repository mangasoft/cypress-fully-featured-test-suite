var cov_lblc3u62k = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/modules/common/NotFound.js";
  var hash = "8b7fd584a1be7a03940313a43f4af79bfa5c19fc";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/modules/common/NotFound.js",
    statementMap: {
      "0": {
        start: {
          line: 16,
          column: 17
        },
        end: {
          line: 46,
          column: 1
        }
      },
      "1": {
        start: {
          line: 17,
          column: 2
        },
        end: {
          line: 45,
          column: 8
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 16,
            column: 17
          },
          end: {
            line: 16,
            column: 18
          }
        },
        loc: {
          start: {
            line: 17,
            column: 2
          },
          end: {
            line: 45,
            column: 8
          }
        },
        line: 17
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "8b7fd584a1be7a03940313a43f4af79bfa5c19fc"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

// Imports
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'; // UI Imports

import { Grid, GridCell } from '../../ui/grid';
import { H3 } from '../../ui/typography';
import { grey } from '../../ui/common/colors'; // App Imports

import { APP_URL } from '../../setup/config/env';
import home from '../../setup/routes/home'; // Component

cov_lblc3u62k.s[0]++;

const NotFound = () => {
  cov_lblc3u62k.f[0]++;
  cov_lblc3u62k.s[1]++;
  return <div>
    {
      /* SEO */
    }
    <Helmet>
      <title>Lost? - Crate</title>
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
        <H3 font="secondary">Feeling lost?</H3>
      </GridCell>
    </Grid>

    <Grid>
      <GridCell style={{
        textAlign: 'center'
      }}>
        <p style={{
          textAlign: 'center',
          marginTop: '2em',
          marginBottom: '2em'
        }}>
          <img src={`${APP_URL}/images/crate-broken.png`} alt="404" style={{
            width: '10em'
          }} />
        </p>

        <H3 font="secondary">Page you are looking for does not exists or has removed. It's 404.</H3>

        <p style={{
          marginTop: '2em'
        }}>What can you do?</p>

        <p style={{
          marginTop: '0.5em'
        }}>You can go to <Link to={home.home.path}>home page.</Link> or contact us for
          any
          help.</p>
      </GridCell>
    </Grid>
  </div>;
};

export default NotFound;