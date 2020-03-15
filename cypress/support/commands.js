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

Cypress.Commands.add('login', () => {
  cy.request({
    url: Cypress.config().apiBaseUrl,
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=UTF-8' },
    body: {
      query:
        'query ($email: String, $password: String) { userLogin (email: $email, password: $password) { user {name, email, role}, token } }',
      variables: {
        email: Cypress.config().email,
        password: Cypress.config().password
      }
    }
  })
    .its('body.data.userLogin')
    .should('exist')
    .then(data => {
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
    });
  cy.visit('/');
});
