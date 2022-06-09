import { environment } from '../../src/environments/environment';

describe('App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have two dropdowns', () => {
    cy.get('mat-form-field').should('have.length', 2);
    cy.get('mat-form-field label mat-label').first().should('have.text', 'Region');
    cy.get('mat-form-field label mat-label').last().should('have.text', 'Country');
    cy.get('mat-form-field label mat-label').last().should('have.text', 'Country');
  });

  it('should have the Region dropdown which has two options', () => {
    cy.get('mat-form-field').first().click();
    cy.get('mat-option').should('have.length', 2);
    cy.get('mat-option .mat-option-text').first().should('have.text', ' Asia ');
    cy.get('mat-option .mat-option-text').last().should('have.text', ' Europe ');
  });

  it('should call the api and populate the response to the country dropdown', () => {
    cy.intercept({
      method: 'GET',
      url: `${environment.api}/asia`,
    }).as('asiaCountryFetch');
    cy.get('mat-form-field').first().click();
    cy.get('mat-option').first().click();
    cy.wait('@asiaCountryFetch');
    cy.get('mat-form-field').last().click();
    cy.get('mat-option .mat-option-text').first().should('have.text', ' Afghanistan ');
  });

  it('should display selected country when user click it', () => {
    cy.intercept({
      method: 'GET',
      url: `${environment.api}/asia`,
    }).as('asiaCountryFetch');
    cy.get('mat-form-field').first().click();
    cy.get('mat-option').first().click();
    cy.wait('@asiaCountryFetch');
    cy.get('mat-form-field').last().click();
    // Click 4th option, Bahrain
    cy.get('mat-option .mat-option-text').eq(3).click();

    cy.get('mat-card-title').should('have.text', 'Bahrain');
    cy.get('mat-card-content img').should('have.attr', 'src').should('equal', 'https://flagcdn.com/bh.svg');
    cy.get('mat-card-content p').eq(0).should('include.text', 'Bahrain');
    cy.get('mat-card-content p').eq(1).should('include.text', 'Manama');
    cy.get('mat-card-content p').eq(2).should('include.text', 'Bahraini dinar(.د.ب)');
    cy.get('mat-card-content p').eq(3).should('include.text', '1,701,583');
  });
});
