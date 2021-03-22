Feature: Check home page submenus
  Background:
    Given I login my profile with correct "davit.kartashyan" & "GpH^nf9s5L&m"

  Scenario: Check submenus
    Given I check is the menu selection visible
    Then I check is the submenus elements visible


  Scenario: Verify hamburger button functionality
    Given I click hamburger menu button
    Then I check is the submenus elements invisible