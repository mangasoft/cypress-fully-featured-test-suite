var cov_1ekk8jrfus = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/modules/product/Item.js";
  var hash = "5b71e93250b7a68194e446dd2330100f06d0b25a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/modules/product/Item.js",
    statementMap: {
      "0": {
        start: {
          line: 15,
          column: 13
        },
        end: {
          line: 32,
          column: 1
        }
      },
      "1": {
        start: {
          line: 17,
          column: 45
        },
        end: {
          line: 17,
          column: 58
        }
      },
      "2": {
        start: {
          line: 19,
          column: 2
        },
        end: {
          line: 31,
          column: 3
        }
      },
      "3": {
        start: {
          line: 35,
          column: 0
        },
        end: {
          line: 37,
          column: 1
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 15,
            column: 13
          },
          end: {
            line: 15,
            column: 14
          }
        },
        loc: {
          start: {
            line: 15,
            column: 24
          },
          end: {
            line: 32,
            column: 1
          }
        },
        line: 15
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "5b71e93250b7a68194e446dd2330100f06d0b25a"
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
import { Link } from 'react-router-dom'; // UI Imports

import Card from '../../ui/card/Card';
import H4 from '../../ui/typography/H4';
import { white, grey2, black } from '../../ui/common/colors'; // App Imports

import { routeImage, routes } from '../../setup/routes'; // Component

cov_1ekk8jrfus.s[0]++;

const Item = props => {
  cov_1ekk8jrfus.f[0]++;
  const {
    name,
    slug,
    description,
    image
  } = (cov_1ekk8jrfus.s[1]++, props.product);
  cov_1ekk8jrfus.s[2]++;
  return <Link to={routes.product.path(slug)}>
      <Card style={{
      width: '25em',
      margin: '2.5em auto',
      backgroundColor: white
    }}>
        <img src={routeImage + image} alt={name} style={{
        width: '100%'
      }} />

        <div style={{
        padding: '1em 1.2em'
      }}>
          <H4 font="secondary" style={{
          color: black
        }}>{name}</H4>

          <p style={{
          color: grey2,
          marginTop: '1em'
        }}>{description}</p>
        </div>
      </Card>
    </Link>;
}; // Component Properties


cov_1ekk8jrfus.s[3]++;
Item.propTypes = {
  product: PropTypes.object.isRequired
};
export default Item;