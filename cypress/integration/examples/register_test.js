const { ExpansionPanelActions } = require("@material-ui/core")
const { cyan } = require("@material-ui/core/colors")
const { IsoTwoTone } = require("@material-ui/icons")

describe('Profile setup', function(){
    it('Visits application profile setup', ()=>{
        cy.visit('http://localhost:3000/profileSetup');
    });

    it('Fills in pcn', ()=>{
        cy.get('#pcn').type('410078').should('have.value', '410078');
    });

    it('Fills in firstname', ()=>{
        cy.get('#firstName').type('Nynke').should('have.value', 'Nynke');
    });

    it('Fills in prefix', ()=>{
        cy.get('#prefix').type('van').should('have.value', 'van');
    });

    it('Fills in lastname', ()=>{
        cy.get('#lastName').type('Schuppen').should('have.value', 'Schuppen');
    });

    it('Fills in street', ()=>{
        cy.get('#street').type('Kuilenhurk').should('have.value', 'Kuilenhurk');
    });

    it('Fills in addressnumber', ()=>{
        cy.get('#addressnumber').type('6').should('have.value', '6');
    });

    it('Fills in addressaddition', ()=>{
        cy.get('#addressaddition').type('b').should('have.value', 'b');
    });

    it('Fills in City', ()=>{
        cy.get('#city').type('Vessem').should('have.value', 'Vessem');
    });
   
    it('Fills in zipcode', ()=>{
        cy.get('#zipCode').type('5512CB').should('have.value', '5512CB');
    });
    
    it('Fills in emailaddress', ()=>{
        cy.get('#emailAddress').type('410078@student.fontys.nl').should('have.value', '410078@student.fontys.nl');
    });

    it('Fills in phonenumber', ()=>{
        cy.get('#phoneNumber').type('061234567').should('have.value', '061234567');
    });
    
    it('Fills in birthday', ()=>{
        cy.get('#birthday').type('1998-12-12').should('have.value', '1998-12-12');
    });
    
    it('select nationality', ()=>{
        cy.get('#nationality').click();
        cy.get('#menu-nationality').click().get('li').contains('Netherlands').click();
    });

    it('select nationality', ()=>{
        cy.get('#languages').click();
        cy.get('#menu-languages').click().get('li').contains('Dutch').click();
        cy.get('#languages').click();
        cy.get('#menu-languages').click().get('li').contains('English').click();
    });

});
