Feature: CheckMate Game

  Scenario: User should complete the game and win
    Given I visit the CheckerGame page
    When I play the complete steps game
    Then should display message of win the game