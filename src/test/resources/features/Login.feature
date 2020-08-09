@web

  Feature: DarkSky Register Page Feature

    Background:
      Given I am on the darksky Register page

      @loginPage
      Scenario: Verify invalid login for user

      When I enter abc@gmail.com into username text fields on login page
      And I enter password1 into password text fields on login page
      And I click on login button
      Then I verify error message “password and username does not match”












