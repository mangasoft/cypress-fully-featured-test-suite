var waitOn = require('wait-on');
var env = require('../../cypress.json');

function waitForApp() {
  var opts = {
    resources: [
      env.baseUrl
      // env.apiBaseUrl
    ],
    timeout: 10000
  };

  waitOn(opts, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log('Crate is Up and Running');
  });
}

waitForApp();
