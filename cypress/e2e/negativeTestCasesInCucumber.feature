Feature: CheckMate Game
  
  Scenario: User should be redirected to the correct Checkers game URL
    Given I visit the CheckerGame page
    When I check the URL of the game
    Then I should be redirected to the correct URL

  Scenario: User should be able to move a piece forward
    Given I visit the CheckerGame page
    When I make a valid forward move
    Then the piece should move forward successfully

  Scenario: User should not be able to move a piece backward
    Given I visit the CheckerGame page
    When I attempt to move a piece backward
    Then the move should be unclicked

  Scenario: User should not be able to move onto an opponent's piece
    Given I visit the CheckerGame page
    When I attempt to move a piece onto an opponent's piece
    Then the move should be display message
