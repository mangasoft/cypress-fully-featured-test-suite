Cypress.Commands.add('randomString', length => {
  Math.random()
    .toString(36)
    .slice(-length);
});

Cypress.Commands.add('startWeb', () => {
  cy.request(Cypress.config().baseUrl).then(response => {
    expect(response.status).to.eq(200);
  });
});

Cypress.Commands.add('startApi', () => {
  cy.request({
    url: Cypress.config().apiBaseUrl,
    headers: {
      Accept: 'text/html'
    }
  }).then(response => {
    expect(response.status).to.eq(200);
  });
});
