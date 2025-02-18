import { When, Then } from  "@badeball/cypress-cucumber-preprocessor";

import NegativeCases  from "../../support/pages/boundaryTestAnalysis/boundaryTestsCasePO";

const checkerCases = new NegativeCases();
    
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

Then('the opponent\'s move attempt should be display message for next move', () => {
cy.get('p#message').should('contain', 'Click on your orange piece, then click where you want to move it.');
});
    