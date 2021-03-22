Feature: Log in ARDEO page

  Scenario: Login
    Given I go to login page
    And I fill "davit.kartashyan" in username field
    And I fill "GpH^nf9s5L&m" in password field
    When I click login button
    Then Check am I logged in

  Scenario: Verify log out functionality
    Given I login my profile with correct "davit.kartashyan" & "GpH^nf9s5L&m"
    And I click on username from header
    When I click 'Log out' button
    Then Check am I logged out
