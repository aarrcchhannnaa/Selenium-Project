@DatePickersTab
Feature: Test Date pickers tab

  Scenario Outline: 01 Test two drop-down options after clicking Date pickers tab
  Given I open selenium easy website
  When I click on a "<btn>"
  And I click on Date pickers Tab
  Then I verify two drop-down values are getting displayed
  Examples:
  |btn|
  |No, thanks!|
  
  Scenario Outline: 02 Test the Bootstrap Date Picker tab
  Given I open selenium easy website
  When I click on a "<btn>"
  And I click on Date pickers Tab
  And I click on Bootstrap Date Picker tab
  Then I verify if the bootstrap Date Picker Tab page is displayed
  Examples:
  |btn|
  |No, thanks!|
  
  Scenario Outline: 03 Test the JQuery Date Picker tab
  Given I open selenium easy website
  When I click on a "<btn>"
  And I click on Date pickers Tab
  When I click on JQuery Date Picker tab
  Then I verify if the  JQuery Date Picker page is displayed
  Examples:
  |btn|
  |No, thanks!|
  
  Scenario Outline: 04 Test if calendar is displayed
  Given I open selenium easy website
  When I click on a "<btn>"
  And I click on Date pickers Tab
  And I click on Bootstrap Date Picker tab
  And I click on Calendar button
  Then I verify if calendar is displayed
  Examples:
  |btn|
  |No, thanks!|
  
  Scenario Outline: 05 Test if date selected is displayed
  Given I open selenium easy website
  When I click on a "<btn>"
  And I click on Date pickers Tab
  And I click on Bootstrap Date Picker tab
  And I click on Calendar button
  And I select some date from the list
  Then I verify if date is displayed in the text box
  Examples:
  |btn|
  |No, thanks!|

  Scenario Outline: 06 Test clear button
 Given I open selenium easy website
  When I click on a "<btn>"
  And I click on Date pickers Tab
  And I click on Bootstrap Date Picker tab
  And I click on Calendar button
  And I select some date from the list
  And I click on Calendar button
  And I select clear tab
  Then I verify if date textbox is empty
  Examples:
  |btn|
  |No, thanks!|
  
  Scenario Outline: 07 Test calendar is visible for from option
  Given I open selenium easy website
  When I click on a "<btn>"
  And I click on Date pickers Tab
  And I click on JQuery Date Picker tab
  And I click on From text field
  Then I verify that the calendar is displayed
  Examples:
  |btn|
  |No, thanks!|
