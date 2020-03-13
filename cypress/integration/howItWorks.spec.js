describe('should have a How It Works page', () => {
  it('should navigate to How It Works page from homepage', () => {
    cy.visit('/');
    cy.contains('Next').click();
    cy.contains('Next').click();
    cy.contains('Next').click();
    cy.get('[data-test=StartButton]').click({ force: true });

    cy.get('[href="/how-it-works"]').click();
    cy.url().should('contain', '/how-it-works');
    cy.title().should('eq', 'How it works? - Crate');
  });

  it('should validate all the required components are present', () => {
    cy.contains('How it works').should('be.visible');
    cy.contains(
      'Just 3 easy steps to subscribe and receive your monthly subscription of trendy clothes and accessories'
    ).should('be.visible');
    cy.contains('Subscribe to your crate').should('be.visible');
    cy.contains('Choose one or multiple crates as per your need.').should(
      'be.visible'
    );
    cy.contains('Receive a Fix Delivery').should('be.visible');
    cy.contains(
      'Get 3 to 5 pieces of clothing or accessories delivered to your door.'
    ).should('be.visible');
    cy.contains('Keep what you want').should('be.visible');
    cy.contains(
      'Get 3 to 5 pieces of clothing or accessories delivered to your door.'
    ).should('be.visible');
  });

  it('should navigate to sign up page upon clicking on start button', () => {
    cy.get('[data-test=StartButton]').click();
    cy.url().should('contain', 'user/signup');
    cy.title().should('eq', 'Create an account - Crate');
  });
});
