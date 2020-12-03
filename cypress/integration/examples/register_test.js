const { ExpansionPanelActions } = require("@material-ui/core")
const { cyan } = require("@material-ui/core/colors")
const { IsoTwoTone } = require("@material-ui/icons")

describe('Profile setup', function(){
    it('Visits application profile setup', ()=>{
        cy.visit('http://localhost:3000/profileSetup');
    });

    it('Fills in pcn', ()=>{
        cy.get('#pcn').type('123456').should('have.value', '123456');
    });

    it('Fills in firstname', ()=>{
        cy.get('#firstName').type('Jack').should('have.value', 'Jack');
    });

    it('Fills in prefix', ()=>{
        cy.get('#prefix').type('van').should('have.value', 'van');
    });

    it('Fills in lastname', ()=>{
        cy.get('#lastName').type('Mutsers').should('have.value', 'Mutsers');
    });

    it('Fills in street', ()=>{
        cy.get('#street').type('street').should('have.value', 'street');
    });

    it('Fills in addressnumber', ()=>{
        cy.get('#addressnumber').type('addressnr').should('have.value', 'addressnr');
    });

    it('Fills in addressaddition', ()=>{
        cy.get('#addressaddition').type('addressadd').should('have.value', 'addressadd');
    });

    it('Fills in City', ()=>{
        cy.get('#city').type('city').should('have.value', 'city');
    });
   
    it('Fills in zipcode', ()=>{
        cy.get('#zipCode').type('zipCode').should('have.value', 'zipCode');
    });
    
    it('Fills in emailaddress', ()=>{
        cy.get('#emailAddress').type('email').should('have.value', 'email');
    });

    it('Fills in phonenumber', ()=>{
        cy.get('#phoneNumber').type('061234567').should('have.value', '061234567');
    });
    
    it('Fills in birthday', ()=>{
        cy.get('#birthday').type('1998-12-12').should('have.value', '1998-12-12');
    });
  
    // it('select nationality', ()=>{
    //     cy.get('#nationality').click();
    //     cy.get().should('have.value', 'Netherlands');
    // });
   
    // cy.get('#languages').type('NL').should('have.value', 'NL');
    // cy.get('.PrivateSwitchBase-input-12')
});
