export default class negativeCases{
        checkerGamePageVerify(){
            cy.get('.page').should('contain','Checkers')
        };
    
        pieceToMove(position){
            return cy.get(`[name="space${position}"]`)
        };
        positionToMovePiece(position){
            return cy.get(`[name="space${position}"]`)
        };
        //verify Redirect URL is Correct as expected.
        ensureCheckerGameUrl(){
            cy.url().should('eq', 'https://www.gamesforthebrain.com/game/checkers/');
        }
        // Verify the piece moved
        verifyCheckerOnPosition(){
            cy.get('[onclick="didClick(2, 2)"]')
                .should('exist');
        };
    
        // Verify the original position is empty
        verifyCheckerLeftPositionEmpty(){
            cy.get('[onclick="didClick(0, 2)"]')
                .should('have.text', '');
        };
    
        verifyCheckerOnCurrentPosition(){
            cy.get('[onclick="didClick(0, 2)"]') // Selector for the specific onclick attribute
                .should('exist');
        };
    
        // Verify the original position is empty
        verifyCheckerNotAbleToMoveBackward(){
            cy.get('[name="space01"]')
                .should('have.text', '');
        };
    
        verifyCheckerMoveOnDestinationPlace(){
            cy.get('[onclick="didClick(1, 3)"]') // Selector for the specific onclick attribute
                .should('exist');
        };
    
        // Verify the original position is empty
        selectMoveCheckerPiece(){
            return cy.get('[name="space13"]')
        };
    
        moveCheckerPieceToBlueChecker(){
            return cy.get('[name="space24"]')
        };
    
        verifyCheckerStillOnPreviousPosition(){
            return cy.get('[onclick="didClick(1, 3)"]').should("exist")
        }
    
        ensureForwardMoves(){
    
            cy.fixture('moves').then((data) => {
                // Verify the checker game page and restart the game
                this.checkerGamePageVerify();
                // Iterate through the moves and perform the actions
                data.forward_moves.forEach(({ piece, position }) => {
                    this.pieceToMove(piece).click();
                    this.positionToMovePiece(position).click().wait(2000);
                });
    
                this.verifyCheckerOnPosition();
                this.verifyCheckerLeftPositionEmpty();
            })
    
        }
    
        ensureReverseMoves(){
    
            cy.fixture('moves').then((data) => {
                // Verify the checker game page and restart the game
                this.checkerGamePageVerify();
                // Iterate through the moves and perform the actions
                data.reverse_moves.forEach(({ piece, position }) => {
                    this.pieceToMove(piece).click();
                    this.positionToMovePiece(position).click().wait(2000);
                });
    
                this.verifyCheckerOnCurrentPosition();
                this.verifyCheckerNotAbleToMoveBackward();
            })
    
        }
    
        ensureMoveOnOpponentPiece(){
    
            cy.fixture('moves').then((data) => {
                // Verify the checker game page and restart the game
                this.checkerGamePageVerify();
                // Iterate through the moves and perform the actions
                data.move_on_opponent.forEach(({ piece, position }) => {
                    this.pieceToMove(piece).click();
                    this.positionToMovePiece(position).click().wait(2000);
                });
    
                this.verifyCheckerMoveOnDestinationPlace();
                this.selectMoveCheckerPiece().click();
                this.moveCheckerPieceToBlueChecker().click();
                this.verifyCheckerStillOnPreviousPosition();
            })
    
        }
    
};