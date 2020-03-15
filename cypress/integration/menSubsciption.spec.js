describe('mens subscriptions', () => {
  before('login', () => {
    cy.login();
  });

  it('should subscribe to mens clothes', () => {
    cy.visit('/crates');
    cy.contains('Clothes for Men')
      .contains('Subscribe')
      .click();
    cy.contains('Subscribed successfully.').should('be.visible');
    cy.url().should(
      'contain',
      `${Cypress.config().baseUrl}/user/subscriptions`
    );
    cy.contains('My subscriptions').should('be.visible');
    cy.get('[data-test=SubscribedCard]')
      .should('be.visible')
      .should('contain.text', 'Clothes for Men')
      .should('contain.text', 'A monthly supply of trendy clothes for men.')
      .should('contain', 'Unsubscribe');

    const todaysDate = Cypress.moment().format('ddd MMM DD YYYY');
    cy.get('[data-test=SubscribedDate]').should(
      'contain.text',
      `Subscribed on ${todaysDate}`
    );
  });

  it('should unsubscribe', () => {
    cy.get('[data-test=UnsubscribeButton]').click();
    cy.contains('Unsubscribed successfully.');
    cy.contains('You are not subscribed to any crates yet.').should(
      'be.visible'
    );
  });
});
