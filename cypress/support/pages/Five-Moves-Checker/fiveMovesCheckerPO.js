export default class checkerInitial5Steps{
        checkerGamePageVerify(){
                cy.get('.page').should('contain','Checkers')
        };

        clickOnRestartButton(){
                return cy.get('a').contains('Restart...')
        };

        pieceToMove(position){
                return cy.get(`[name="space${position}"]`)
        };

        positionWherePieceMove(position){
                return cy.get(`[name="space${position}"]`)
        };

        checker5StepsGame() {
                cy.fixture('moves').then((data) => {
                // Verify the checker game page and restart the game
                this.checkerGamePageVerify();
                this.clickOnRestartButton().click();
                // Iterate through the moves and perform the actions
                        data.five_moves.forEach(({ piece, position }) => {
                                this.pieceToMove(piece).click();
                                this.positionWherePieceMove(position).click().wait(2000);
                        });
                });
        };
};