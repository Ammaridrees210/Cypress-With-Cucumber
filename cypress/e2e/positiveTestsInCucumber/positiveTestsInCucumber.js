import { Given, When, Then } from  "@badeball/cypress-cucumber-preprocessor";
import  CheckerGamePlay from "../../support/pages/CompleteCheckerGame/checkerGamePO";

const checkerGame = new CheckerGamePlay();

// Given('I visit the CheckerGame page3', () => {
//         cy.visit("/");
//     });

When('I play the complete steps game', () => {
    checkerGame.checkGamePlayMoves();
});

Then('should display message of win the game', () => {
    checkerGame.verifyWinningMessage();
});