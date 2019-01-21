Feature: User can sign up
  As a User
  In order to register
  I would like to be able to sign up

  Background: 
    Given the following user exists
    | first_name  | last_name | email         | password | password_confirmation |
    | Hanna       | Nyman     | hanna@tuna.se | password | password              |
    And visit Sign up page

  Scenario: When I fill in the sign up form, I can sign up [Happy Path]
    When I fill in 'First name' with 'John'
    And I fill in 'Last name' with 'Doe'
    And I fill in 'Email' with 'johndoe@hotmail.com'
    And I fill in 'Password' with 'password'
    And I fill in 'Password confirmation' with 'password'
    And I click 'Submit'
    Then I should see 'Hello, John!'

  Scenario: When I don't fill in the sign up form I get error messages
    When I click 'Submit'
    Then I should see "Email can't be blank"
    And I should see "Password can't be blank"
    And I should see "First name can't be blank"
    And I should see "Last name can't be blank"

  Scenario: When Password and Password confirmation doesn't match I get error message
    When I fill in 'Password' with 'password'
    And I fill in 'Password confirmation' with 'pasword'
    And I click 'Submit'
    Then I should see "Password confirmation doesn't match Password"

  Scenario: When Email is taken I get error message
    When I fill in 'Email' with 'hanna@tuna.se'
    And I fill in 'First name' with 'John'
    And I fill in 'Last name' with 'Doe'
    And I fill in 'Password' with 'password'
    And I fill in 'Password confirmation' with 'password'
    And I click 'Submit'
    Then I should see "Email has already been taken"