Cypress.Commands.add('randomString', length => {
  Math.random()
    .toString(36)
    .slice(-length);
});
