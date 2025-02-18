import { Given, When, Then } from  "@badeball/cypress-cucumber-preprocessor";
import  CheckerInitial5Steps  from "../../support/pages/Five-Moves-Checker/fiveMovesCheckerPO";

const initialGameSteps = new CheckerInitial5Steps();

Given('I visit the CheckerGame page', () => {
    cy.visit("/");
});

When('I play the first 5 steps of the game', () => {
    initialGameSteps.checker5StepsGame();
});

Then('I should see the game ask to next move', () => {
    cy.get('#message').should('contain', 'Make a move.');
});
