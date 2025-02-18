Feature: CheckMate Game

  Scenario: User should visit the CheckerGame and play 5 moves
   Given I visit the CheckerGame page
   When I play the first 5 steps of the game
   Then I should see the game ask to next move