@ProgressBarTest
Feature: Test Progress Bar

  @HandlingPopUp
  Scenario Outline: 01 Test First popup of website
    Given I launch selenium easy website
    When I click on "<btn>"
    Then Pop up should disapear
    Examples:
    |btn|
    |No, thanks!|

  @ClickProgressBar
  Scenario Outline: 02 Test three drop-down options after clicking Progress Bar tab
    Given I launch selenium easy website
    When I click on "<btn>"
    And I click on Progress Bar Tab
    Then I verify three drop-down values are getting displayed
    Examples:
    |btn|
    |No, thanks!|

  @JQueryDownloadProgressbars
  Scenario Outline: 03 Test JQuery Download Progress bars button
    Given I launch selenium easy website
    When I click on "<btn>"
    And I click on Progress Bar Tab
    And I click on sub tab JQuery Download Progress bars
    Then I verify text on webpage is "<text>" 
    
    Examples:
    |btn|text|
    |No, thanks!|Selenium Easy - JQuery Download Progress bar demo|
		
		
  @StartDownload
  Scenario Outline: 04 Test Start Download button
    Given I launch selenium easy website
    When I click on "<btn>"
    And I click on Progress Bar Tab
    And I click on sub tab JQuery Download Progress bars
    Then I click on Start Download button
    And I verify download status is complete before clicking close button
    And I click on Close button 
		Examples:
    |btn|
    |No, thanks!|
    
  @BootstrapProgressBar
  Scenario Outline: 05 Test Bootstrap Progress Bar button
    Given I launch selenium easy website
    When I click on "<btn>"
    And I click on Progress Bar Tab
    And I click on sub tab Bootstrap Progress Bar
    Then I verify text on webpage is "<text>" 
    Examples:
    |btn|text|
    |No, thanks!|Selenium Easy - Automate Bootstrap Download Progress Bar|
	
	@StylishProgressBar
	Scenario Outline: 06 Test Bootstrap Progress Bar button
    Given I launch selenium easy website
    When I click on "<btn>"
    And I click on Progress Bar Tab
    And I click on sub tab Bootstrap Progress Bar
    Then I verify initial value of progress bar is "<percent>"
    Examples:
    |btn|percent|
    |No, thanks!|0%|
    
    
	
  @Downloadsize:20480kb
  Scenario Outline: 07 Test
    Given I launch selenium easy website
    When I click on "<btn>"
    And I click on Progress Bar Tab
    And I click on sub tab Bootstrap Progress Bar
    And I click on Downloadsize:20480kb button
    Then I verify the progress bar stops at 100%
    Examples:
    |btn|
    |No, thanks!|

  @DragAndDropSlider
  Scenario Outline: 08 Test Drag and Drop Slider button
    Given I launch selenium easy website
    When I click on "<btn>"
    And I click on Progress Bar Tab
    And I click on sub tab Drag and Drop Slider
    Then I verify text on webpage is "<text>" 
    
    Examples:
    |btn|text|
    |No, thanks!|Selenium Easy - Drag and Drop Range Sliders|
    
    
    
    @DragAndDropSliderDeafaultVal
  Scenario Outline: 09 Test Drag and Drop Slider button
    Given I launch selenium easy website
    When I click on "<btn>"
    And I click on Progress Bar Tab
    And I click on sub tab Drag and Drop Slider
    Then I verify default values of "<count>" is "<defaultval>"
    Examples:
    |btn|count|defaultval|
    |No, thanks!|first|10|
    |No, thanks!|second|50|
    |No, thanks!|third|30|
    |No, thanks!|fourth|50|
    |No, thanks!|fifth|50|
    |No, thanks!|sixth|50|

