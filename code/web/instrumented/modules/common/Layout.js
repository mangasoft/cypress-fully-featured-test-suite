var cov_lu3r3sguq = function () {
  var path = "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/modules/common/Layout.js";
  var hash = "5ba4a0fad2dccbae25d2e8e8663107ec69faee18";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/abhijeet.daspatnaik/Documents/projects/crate-abhidp/code/web/src/modules/common/Layout.js",
    statementMap: {
      "0": {
        start: {
          line: 19,
          column: 25
        },
        end: {
          line: 19,
          column: 35
        }
      },
      "1": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 58,
          column: 5
        }
      },
      "2": {
        start: {
          line: 33,
          column: 10
        },
        end: {
          line: 55,
          column: 16
        }
      },
      "3": {
        start: {
          line: 63,
          column: 0
        },
        end: {
          line: 66,
          column: 1
        }
      },
      "4": {
        start: {
          line: 70,
          column: 2
        },
        end: {
          line: 72,
          column: 3
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
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
            column: 11
          },
          end: {
            line: 59,
            column: 3
          }
        },
        line: 18
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 32,
            column: 50
          },
          end: {
            line: 32,
            column: 51
          }
        },
        loc: {
          start: {
            line: 33,
            column: 10
          },
          end: {
            line: 55,
            column: 16
          }
        },
        line: 33
      },
      "2": {
        name: "commonState",
        decl: {
          start: {
            line: 69,
            column: 9
          },
          end: {
            line: 69,
            column: 20
          }
        },
        loc: {
          start: {
            line: 69,
            column: 28
          },
          end: {
            line: 73,
            column: 1
          }
        },
        line: 69
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
      "2": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "5ba4a0fad2dccbae25d2e8e8663107ec69faee18"
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
import { connect } from 'react-redux'; // UI Imports

import Icon from '../../ui/icon/Icon';
import { white, black } from '../../ui/common/colors';
import { level2 } from '../../ui/common/shadows'; // App Imports

import { renderIf } from '../../setup/helpers';
import { messageHide } from './api/actions';
import Header from './header/Header';

class Layout extends PureComponent {
  render() {
    cov_lu3r3sguq.f[0]++;
    const {
      children
    } = (cov_lu3r3sguq.s[0]++, this.props);
    cov_lu3r3sguq.s[1]++;
    return <div>
        {
        /* Header */
      }
        <Header />

        {
        /* Page Content */
      }
        <section style={{
        marginTop: '5em'
      }}>
          {children}
        </section>

        {
        /* Messages */
      }
        {renderIf(this.props.common.message.open, () => {
        cov_lu3r3sguq.f[1]++;
        cov_lu3r3sguq.s[2]++;
        return <div style={{
          boxShadow: level2,
          position: 'fixed',
          right: '2em',
          bottom: '2em',
          backgroundColor: black,
          color: white,
          borderRadius: '3em',
          maxWidth: '30em'
        }}>
            <span style={{
            float: 'left',
            padding: '1em 0em 1em 2em',
            marginRight: '4em'
          }}>{this.props.common.message.text}</span>

            <Icon style={{
            position: 'absolute',
            padding: '1em',
            cursor: 'pointer',
            right: '0.5em',
            top: 0
          }} onClick={this.props.messageHide}>
              close
            </Icon>
          </div>;
      })}
      </div>;
  }

} // Component Properties


cov_lu3r3sguq.s[3]++;
Layout.propTypes = {
  common: PropTypes.object.isRequired,
  messageHide: PropTypes.func.isRequired
}; // Component State

function commonState(state) {
  cov_lu3r3sguq.f[2]++;
  cov_lu3r3sguq.s[4]++;
  return {
    common: state.common
  };
}

export default connect(commonState, {
  messageHide
})(Layout);