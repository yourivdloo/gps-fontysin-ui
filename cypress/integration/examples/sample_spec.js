const { ExpansionPanelActions } = require("@material-ui/core")
const { cyan } = require("@material-ui/core/colors")
const { IsoTwoTone } = require("@material-ui/icons")

describe('Chatpage', function(){
    it('Clicks hello button, navigates to homepage', function(){
        cy.visit('http://localhost:3000/chat');

        cy.get(':nth-child(2) > .MuiButtonBase-root').click();

        cy.url().should('include', '/')
    })
})
