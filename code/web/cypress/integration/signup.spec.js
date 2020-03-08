import { randomString } from '../support/helper';

describe('should signup successfully', () => {
  it('should navigate to signup page and see signup form and placeholders for all fields', () => {
    cy.visit(`${Cypress.config().baseUrl}/user/signup`);
    cy.title().should('eq', 'Create an account - Crate');
    cy.get('h3').should('contain.text', 'Create an account');
    cy.get('#signUpForm')
      .should('be.visible')
      .get('#name')
      .should('have.attr', 'placeholder', 'Name')
      .get('#email')
      .should('have.attr', 'placeholder', 'Email')
      .get('#password')
      .should('have.attr', 'placeholder', 'Password');
  });

  xit('should show error message when signup fails', () => {
    cy.get('#signUpForm').within(() => {
      cy.get('#name')
        .clear()
        .type('John Doe')
        .get('#email')
        .clear()
        .type('John@crate.com')
        .get('#password')
        .clear()
        .type('Pass1234');
      cy.contains('Signup').click();
    });
    cy.contains('Err').should('be.visible');
  });

  it('should fill up the signup form and complete signup process successfully', () => {
    cy.get('#signUpForm').within(() => {
      cy.get('#name')
        .clear()
        .type(randomString(20))
        .get('#email')
        .clear()
        .type(randomString(10) + `@crate.com`)
        .get('#password')
        .clear()
        .type(randomString(10));
      cy.contains('Signup').click();
    });
    cy.contains('Signed up successfully.').should('be.visible');
  });
});
