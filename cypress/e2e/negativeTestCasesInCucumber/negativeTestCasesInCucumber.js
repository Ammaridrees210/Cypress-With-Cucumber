import { Given, When, Then } from  "@badeball/cypress-cucumber-preprocessor";

import NegativeCases  from "../../support/pages/checkerGameNeagtiveCases/negativeCasePO";

const checkerCases = new NegativeCases();

// Given('I visit the CheckerGame page2', () => {
//         cy.visit("/");
// });
    
When('I check the URL of the game', () => {
checkerCases.ensureCheckerGameUrl();
});

Then('I should be redirected to the correct URL', () => {
cy.url().should('include', '/checkers/');
});

When('I make a valid forward move', () => {
checkerCases.ensureForwardMoves();
});

Then('the piece should move forward successfully', () => {
cy.get('[name=space13]').should('exist');
});

When('I attempt to move a piece backward', () => {
checkerCases.ensureReverseMoves();
});

Then('the move should be unclicked', () => {
cy.get('[onclick="didClick(0, 2)"]').click();
});

When('I attempt to move a piece onto an opponent\'s piece', () => {
checkerCases.ensureMoveOnOpponentPiece();
});

Then('the move should be display message', () => {
cy.get('p#message').should('contain', 'Click on your orange piece, then click where you want to move it.');
});
    