describe('empty subscription', () => {
  before('login', () => {
    cy.login();
  });

  it('return empty crate list', () => {
    cy.server();
    cy.route({
      method: 'POST',
      url: Cypress.config().apiBaseUrl,
      response: {
        data: {
          subscriptionsByUser: []
        }
      }
    }).as('emptySubscriptions');
    cy.visit('/user/subscriptions').wait('@emptySubscriptions');

    cy.get('body')
      .should('contain.text', 'My subscriptions')
      .and(
        'contain.text',
        'The crates you are subscribed to are listed here. You can cancel anytime.'
      )
      .and('contain.text', 'You are not subscribed to any crates yet.');
  });
});
