import { Given, When, Then } from  "@badeball/cypress-cucumber-preprocessor";
import  CheckerGamePlay from "../../support/pages/Complete-Checker-GameSteps/happyPathScenarioPO";

const checkerGame = new CheckerGamePlay();

When('I play the complete steps game', () => {
    checkerGame.checkGamePlayMoves();
});

Then('should display message of win the game', () => {
    checkerGame.verifyWinningMessage();
});