export default class checkerGamePlay {
    checkerGamePageVerify() {
        cy.get('.page').should('contain', 'Checkers');
    };

    clickOnRestartButton() {
        return cy.get('a').contains('Restart...');
    };

    pieceToMove(position) {
        return cy.get(`[name="space${position}"]`);
    };

    positionToMovePiece(position) {
        return cy.get(`[name="space${position}"]`);
    };

    verifyWinningMessage() {
        cy.get('#message').should('contain', 'You have won!');
    };

    checkGamePlayMoves() {
        cy.fixture('moves').then((data) => {
            this.checkerGamePageVerify();
            this.clickOnRestartButton().click();
            data.moves.forEach(({ piece, position }) => {
                this.pieceToMove(piece).click();
                this.positionToMovePiece(position).click().wait(2000);
            });
        });
    };
};