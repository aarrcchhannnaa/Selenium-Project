@InputForm
Feature: Test Input Forms tab

  Scenario Outline: 01 Test seven drop-down options after clicking input forms tab
    Given I launch selenium website
    When I click on the "<btn>"
    And I click on Input Forms Tab
    Then I verify seven dropdown values are getting displayed

    Examples: 
      | btn         |
      | No, thanks! |

  Scenario Outline: 02 Test Show Message Button
    Given I launch selenium website
    When I click on the "<btn>"
    And I click on Input Forms Tab
    And I click on sub tab Simple form demo
    And I enter some message "<message>" into enter message textbox
    And I click on show button
    Then I verify "<message>" is getting displayed correctly

    Examples: 
      | btn         | message |
      | No, thanks! | hello   |
      | No, thanks! | abc  |

  Scenario Outline: 03 Test the Get Total Button
    Given I launch selenium website
    When I click on the "<btn>"
    And I click on Input Forms Tab
    And I click on sub tab Simple form demo
    And I enter some number <no1> into the enter a textbox
    And I enter some number <no2> into the enter b textbox
    And I click on Sum button
    Then I verify sum of <no1> and <no2> is the sum being displayed

    Examples: 
      | btn         | no1 | no2 |
      | No, thanks! |   2 |   9 |
      | No, thanks! |  71 |  99 |
      | No, thanks! | 262 | 101 |

  Scenario Outline: 04 Test the Single CheckBox
    Given I launch selenium website
    When I click on the "<btn>"
    And I click on Input Forms Tab
    And I click on sub tab CheckBox Demo
    And I check the given CheckBox
    Then I verify output message is getting displayed as checked

    Examples: 
      | btn         |
      | No, thanks! |

  Scenario Outline: 05 Test the Multiple CheckBox
    Given I launch selenium website
    When I click on the "<btn>"
    And I click on Input Forms Tab
    And I click on sub tab CheckBox Demo
    And I click on Check All button
    And I verify the button is check all
    And I click the Uncheck All button
    Then I verify the button is Uncheck all

    Examples: 
      | btn         |
      | No, thanks! |

  Scenario Outline: 07 Test the multiple RadioButton
    Given I launch selenium website
    When I click on the "<btn>"
    And I click on Input Forms Tab
    And I click on sub tab RadioButton Demo
    Then I check one of the mradiobuttons and verify

    Examples: 
      | btn         |
      | No, thanks! |

  Scenario Outline: 08 Test the Seletct list
    Given I launch selenium website
    When I click on the "<btn>"
    And I click on Input Forms Tab
    And I click on Select Dropdown list
    Then I click on options of dropdown and verify

    Examples: 
      | btn         |
      | No, thanks! |
