const { ExpansionPanelActions } = require("@material-ui/core")
const { cyan } = require("@material-ui/core/colors")
const { IsoTwoTone } = require("@material-ui/icons")

describe('Profile setup', function(){
    it('CMakes an assertion', function(){
        cy.visit('http://localhost:3000/profileSetup');

        cy.get('#pcn').type('123456').should('have.value', '123456');
        cy.get('#firstName').type('Jack').should('have.value', 'Jack');
        cy.get('#prefix').type('van').should('have.value', 'van');
        cy.get('#lastName').type('Mutsers').should('have.value', 'Mutsers');
        cy.get('#street').type('street').should('have.value', 'street');
        cy.get('#addressnumber').type('addressnr').should('have.value', 'addressnr');
        cy.get('#addressaddition').type('addressadd').should('have.value', 'addressadd');
        cy.get('#city').type('city').should('have.value', 'city');
        cy.get('#zipCode').type('zipCode').should('have.value', 'zipCode');
        cy.get('#emailAddress').type('email').should('have.value', 'email');
        cy.get('#phoneNumber').type('061234567').should('have.value', '061234567');
        cy.get('#birthday').type('1998-12-12').should('have.value', '1998-12-12');
        // cy.get('#nationality').type('Netherlands').should('have.value', 'Netherlands');
        cy.get('#languages').type('NL').should('have.value', 'NL');
        // cy.get('.PrivateSwitchBase-input-12')
    })
})
