import { Given, When, Then } from  "@badeball/cypress-cucumber-preprocessor";
import  CheckerInitial5Steps  from "../../support/pages/checkerGame5Moves/checkerGame5PO";

const initialGameSteps = new CheckerInitial5Steps();

Given('I visit the CheckerGame page', () => {
    cy.visit("/");
});

When('I play the first 5 steps of the game', () => {
    initialGameSteps.checker5StepsGame();
});

Then('I should see the game progress ask to move', () => {
    cy.get('#message').should('contain', 'Make a move.');
});
