$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("datepicker.feature");
formatter.feature({
  "line": 2,
  "name": "Test Date pickers tab",
  "description": "",
  "id": "test-date-pickers-tab",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@DatePickersTab"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "01 Test two drop-down options after clicking Date pickers tab",
  "description": "",
  "id": "test-date-pickers-tab;01-test-two-drop-down-options-after-clicking-date-pickers-tab",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I open selenium easy website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on a \"\u003cbtn\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on Date pickers Tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I verify two drop-down values are getting displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "test-date-pickers-tab;01-test-two-drop-down-options-after-clicking-date-pickers-tab;",
  "rows": [
    {
      "cells": [
        "btn"
      ],
      "line": 10,
      "id": "test-date-pickers-tab;01-test-two-drop-down-options-after-clicking-date-pickers-tab;;1"
    },
    {
      "cells": [
        "No, thanks!"
      ],
      "line": 11,
      "id": "test-date-pickers-tab;01-test-two-drop-down-options-after-clicking-date-pickers-tab;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "01 Test two drop-down options after clicking Date pickers tab",
  "description": "",
  "id": "test-date-pickers-tab;01-test-two-drop-down-options-after-clicking-date-pickers-tab;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@DatePickersTab"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I open selenium easy website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on a \"No, thanks!\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on Date pickers Tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I verify two drop-down values are getting displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "DatePicker.i_open_selenium_easy_website()"
});
formatter.result({
  "duration": 5952844800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No, thanks!",
      "offset": 14
    }
  ],
  "location": "DatePicker.i_click_on_a(String)"
});
formatter.result({
  "duration": 2258049299,
  "status": "passed"
});
formatter.match({
  "location": "DatePicker.i_click_on_date_pickers_tab()"
});
formatter.result({
  "duration": 47590300,
  "status": "passed"
});
formatter.match({
  "location": "DatePicker.i_verify_two_drop_down_values_are_getting_displayed()"
});
formatter.result({
  "duration": 4244686101,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "02 Test the Bootstrap Date Picker tab",
  "description": "",
  "id": "test-date-pickers-tab;02-test-the-bootstrap-date-picker-tab",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "I open selenium easy website",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I click on a \"\u003cbtn\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click on Date pickers Tab",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on Bootstrap Date Picker tab",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify if the bootstrap Date Picker Tab page is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "test-date-pickers-tab;02-test-the-bootstrap-date-picker-tab;",
  "rows": [
    {
      "cells": [
        "btn"
      ],
      "line": 20,
      "id": "test-date-pickers-tab;02-test-the-bootstrap-date-picker-tab;;1"
    },
    {
      "cells": [
        "No, thanks!"
      ],
      "line": 21,
      "id": "test-date-pickers-tab;02-test-the-bootstrap-date-picker-tab;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "02 Test the Bootstrap Date Picker tab",
  "description": "",
  "id": "test-date-pickers-tab;02-test-the-bootstrap-date-picker-tab;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@DatePickersTab"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I open selenium easy website",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I click on a \"No, thanks!\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click on Date pickers Tab",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on Bootstrap Date Picker tab",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify if the bootstrap Date Picker Tab page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "DatePicker.i_open_selenium_easy_website()"
});
formatter.result({
  "duration": 5483570900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No, thanks!",
      "offset": 14
    }
  ],
  "location": "DatePicker.i_click_on_a(String)"
});
formatter.result({
  "duration": 2233017801,
  "status": "passed"
});
formatter.match({
  "location": "DatePicker.i_click_on_date_pickers_tab()"
});
formatter.result({
  "duration": 44358800,
  "status": "passed"
});
formatter.match({
  "location": "DatePicker.i_click_on_bootstrap_date_picker_tab()"
});
formatter.result({
  "duration": 488351400,
  "status": "passed"
});
formatter.match({
  "location": "DatePicker.i_verify_if_the_bootstrap_date_picker_tab_page_is_displayed()"
});
formatter.result({
  "duration": 122806100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 23,
  "name": "03 Test the JQuery Date Picker tab",
  "description": "",
  "id": "test-date-pickers-tab;03-test-the-jquery-date-picker-tab",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "I open selenium easy website",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I click on a \"\u003cbtn\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I click on Date pickers Tab",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on JQuery Date Picker tab",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I verify if the  JQuery Date Picker page is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "test-date-pickers-tab;03-test-the-jquery-date-picker-tab;",
  "rows": [
    {
      "cells": [
        "btn"
      ],
      "line": 30,
      "id": "test-date-pickers-tab;03-test-the-jquery-date-picker-tab;;1"
    },
    {
      "cells": [
        "No, thanks!"
      ],
      "line": 31,
      "id": "test-date-pickers-tab;03-test-the-jquery-date-picker-tab;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 31,
  "name": "03 Test the JQuery Date Picker tab",
  "description": "",
  "id": "test-date-pickers-tab;03-test-the-jquery-date-picker-tab;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@DatePickersTab"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I open selenium easy website",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I click on a \"No, thanks!\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I click on Date pickers Tab",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on JQuery Date Picker tab",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I verify if the  JQuery Date Picker page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "DatePicker.i_open_selenium_easy_website()"
});
formatter.result({
  "duration": 5764072300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No, thanks!",
      "offset": 14
    }
  ],
  "location": "DatePicker.i_click_on_a(String)"
});
formatter.result({
  "duration": 2227330200,
  "status": "passed"
});
formatter.match({
  "location": "DatePicker.i_click_on_date_pickers_tab()"
});
formatter.result({
  "duration": 53104999,
  "status": "passed"
});
formatter.match({
  "location": "DatePicker.i_click_on_j_query_date_picker_tab()"
});
formatter.result({
  "duration": 6567156500,
  "status": "passed"
});
formatter.match({
  "location": "DatePicker.i_verify_if_the_j_query_date_picker_page_is_displayed()"
});
formatter.result({
  "duration": 5096054500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 33,
  "name": "04 Test if calendar is displayed",
  "description": "",
  "id": "test-date-pickers-tab;04-test-if-calendar-is-displayed",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "I open selenium easy website",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "I click on a \"\u003cbtn\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I click on Date pickers Tab",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on Bootstrap Date Picker tab",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I click on Calendar button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I verify if calendar is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 40,
  "name": "",
  "description": "",
  "id": "test-date-pickers-tab;04-test-if-calendar-is-displayed;",
  "rows": [
    {
      "cells": [
        "btn"
      ],
      "line": 41,
      "id": "test-date-pickers-tab;04-test-if-calendar-is-displayed;;1"
    },
    {
      "cells": [
        "No, thanks!"
      ],
      "line": 42,
      "id": "test-date-pickers-tab;04-test-if-calendar-is-displayed;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 42,
  "name": "04 Test if calendar is displayed",
  "description": "",
  "id": "test-date-pickers-tab;04-test-if-calendar-is-displayed;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@DatePickersTab"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "I open selenium easy website",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "I click on a \"No, thanks!\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I click on Date pickers Tab",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on Bootstrap Date Picker tab",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I click on Calendar button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I verify if calendar is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "DatePicker.i_open_selenium_easy_website()"
});
formatter.result({
  "duration": 5040019701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No, thanks!",
      "offset": 14
    }
  ],
  "location": "DatePicker.i_click_on_a(String)"
});
formatter.result({
  "duration": 2229099901,
  "status": "passed"
});
formatter.match({
  "location": "DatePicker.i_click_on_date_pickers_tab()"
});
formatter.result({
  "duration": 46078400,
  "status": "passed"
});
formatter.match({
  "location": "DatePicker.i_click_on_bootstrap_date_picker_tab()"
});
formatter.result({
  "duration": 541852800,
  "status": "passed"
});
formatter.match({
  "location": "DatePicker.i_click_on_calendar_button()"
});
formatter.result({
  "duration": 10056693400,
  "status": "passed"
});
formatter.match({
  "location": "DatePicker.i_verify_if_calendar_is_displayed()"
});
formatter.result({
  "duration": 157339799,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 44,
  "name": "05 Test if date selected is displayed",
  "description": "",
  "id": "test-date-pickers-tab;05-test-if-date-selected-is-displayed",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 45,
  "name": "I open selenium easy website",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "I click on a \"\u003cbtn\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "I click on Date pickers Tab",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I click on Bootstrap Date Picker tab",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I click on Calendar button",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I select some date from the list",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I verify if date is displayed in the text box",
  "keyword": "Then "
});
formatter.examples({
  "line": 52,
  "name": "",
  "description": "",
  "id": "test-date-pickers-tab;05-test-if-date-selected-is-displayed;",
  "rows": [
    {
      "cells": [
        "btn"
      ],
      "line": 53,
      "id": "test-date-pickers-tab;05-test-if-date-selected-is-displayed;;1"
    },
    {
      "cells": [
        "No, thanks!"
      ],
      "line": 54,
      "id": "test-date-pickers-tab;05-test-if-date-selected-is-displayed;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 54,
  "name": "05 Test if date selected is displayed",
  "description": "",
  "id": "test-date-pickers-tab;05-test-if-date-selected-is-displayed;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@DatePickersTab"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "I open selenium easy website",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "I click on a \"No, thanks!\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "I click on Date pickers Tab",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I click on Bootstrap Date Picker tab",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I click on Calendar button",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I select some date from the list",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I verify if date is displayed in the text box",
  "keyword": "Then "
});
formatter.match({
  "location": "DatePicker.i_open_selenium_easy_website()"
});
formatter.result({
  "duration": 5365324301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No, thanks!",
      "offset": 14
    }
  ],
  "location": "DatePicker.i_click_on_a(String)"
});
formatter.result({
  "duration": 2252495400,
  "status": "passed"
});
formatter.match({
  "location": "DatePicker.i_click_on_date_pickers_tab()"
});
formatter.result({
  "duration": 60244599,
  "status": "passed"
});
formatter.match({
  "location": "DatePicker.i_click_on_bootstrap_date_picker_tab()"
});
formatter.result({
  "duration": 535256600,
  "status": "passed"
});
formatter.match({
  "location": "DatePicker.i_click_on_calendar_button()"
});
formatter.result({
  "duration": 10063669101,
  "status": "passed"
});
formatter.match({
  "location": "DatePicker.i_select_some_date_from_the_list()"
});
formatter.result({
  "duration": 64749200,
  "status": "passed"
});
formatter.match({
  "location": "DatePicker.i_verify_if_date_is_displayed_in_the_text_box()"
});
formatter.result({
  "duration": 10118027099,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 56,
  "name": "06 Test clear button",
  "description": "",
  "id": "test-date-pickers-tab;06-test-clear-button",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 57,
  "name": "I open selenium easy website",
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "I click on a \"\u003cbtn\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "I click on Date pickers Tab",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I click on Bootstrap Date Picker tab",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I click on Calendar button",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I select some date from the list",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I click on Calendar button",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I select clear tab",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "I verify if date textbox is empty",
  "keyword": "Then "
});
formatter.examples({
  "line": 66,
  "name": "",
  "description": "",
  "id": "test-date-pickers-tab;06-test-clear-button;",
  "rows": [
    {
      "cells": [
        "btn"
      ],
      "line": 67,
      "id": "test-date-pickers-tab;06-test-clear-button;;1"
    },
    {
      "cells": [
        "No, thanks!"
      ],
      "line": 68,
      "id": "test-date-pickers-tab;06-test-clear-button;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 68,
  "name": "06 Test clear button",
  "description": "",
  "id": "test-date-pickers-tab;06-test-clear-button;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@DatePickersTab"
    }
  ]
});
formatter.step({
  "line": 57,
  "name": "I open selenium easy website",
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "I click on a \"No, thanks!\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "I click on Date pickers Tab",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I click on Bootstrap Date Picker tab",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I click on Calendar button",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I select some date from the list",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I click on Calendar button",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I select clear tab",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "I verify if date textbox is empty",
  "keyword": "Then "
});
formatter.match({
  "location": "DatePicker.i_open_selenium_easy_website()"
});
formatter.result({
  "duration": 5056890300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No, thanks!",
      "offset": 14
    }
  ],
  "location": "DatePicker.i_click_on_a(String)"
});
formatter.result({
  "duration": 2268339001,
  "status": "passed"
});
formatter.match({
  "location": "DatePicker.i_click_on_date_pickers_tab()"
});
formatter.result({
  "duration": 64964600,
  "status": "passed"
});
formatter.match({
  "location": "DatePicker.i_click_on_bootstrap_date_picker_tab()"
});
formatter.result({
  "duration": 509473399,
  "status": "passed"
});
formatter.match({
  "location": "DatePicker.i_click_on_calendar_button()"
});
formatter.result({
  "duration": 10056426999,
  "status": "passed"
});
formatter.match({
  "location": "DatePicker.i_select_some_date_from_the_list()"
});
formatter.result({
  "duration": 56202800,
  "status": "passed"
});
formatter.match({
  "location": "DatePicker.i_click_on_calendar_button()"
});
formatter.result({
  "duration": 10042226399,
  "status": "passed"
});
formatter.match({
  "location": "DatePicker.i_select_clear_tab()"
});
formatter.result({
  "duration": 52957600,
  "status": "passed"
});
formatter.match({
  "location": "DatePicker.i_verify_if_date_textbox_is_empty()"
});
formatter.result({
  "duration": 5104273300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 70,
  "name": "07 Test calendar is visible for from option",
  "description": "",
  "id": "test-date-pickers-tab;07-test-calendar-is-visible-for-from-option",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 71,
  "name": "I open selenium easy website",
  "keyword": "Given "
});
formatter.step({
  "line": 72,
  "name": "I click on a \"\u003cbtn\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 73,
  "name": "I click on Date pickers Tab",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "I click on JQuery Date Picker tab",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "I click on From text field",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "I verify that the calendar is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 77,
  "name": "",
  "description": "",
  "id": "test-date-pickers-tab;07-test-calendar-is-visible-for-from-option;",
  "rows": [
    {
      "cells": [
        "btn"
      ],
      "line": 78,
      "id": "test-date-pickers-tab;07-test-calendar-is-visible-for-from-option;;1"
    },
    {
      "cells": [
        "No, thanks!"
      ],
      "line": 79,
      "id": "test-date-pickers-tab;07-test-calendar-is-visible-for-from-option;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 79,
  "name": "07 Test calendar is visible for from option",
  "description": "",
  "id": "test-date-pickers-tab;07-test-calendar-is-visible-for-from-option;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@DatePickersTab"
    }
  ]
});
formatter.step({
  "line": 71,
  "name": "I open selenium easy website",
  "keyword": "Given "
});
formatter.step({
  "line": 72,
  "name": "I click on a \"No, thanks!\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 73,
  "name": "I click on Date pickers Tab",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "I click on JQuery Date Picker tab",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "I click on From text field",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "I verify that the calendar is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "DatePicker.i_open_selenium_easy_website()"
});
formatter.result({
  "duration": 5400166501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No, thanks!",
      "offset": 14
    }
  ],
  "location": "DatePicker.i_click_on_a(String)"
});
formatter.result({
  "duration": 2233065100,
  "status": "passed"
});
formatter.match({
  "location": "DatePicker.i_click_on_date_pickers_tab()"
});
formatter.result({
  "duration": 58915800,
  "status": "passed"
});
formatter.match({
  "location": "DatePicker.i_click_on_j_query_date_picker_tab()"
});
formatter.result({
  "duration": 6763749500,
  "status": "passed"
});
formatter.match({
  "location": "DatePicker.i_click_on_from_text_field()"
});
formatter.result({
  "duration": 137593899,
  "status": "passed"
});
formatter.match({
  "location": "DatePicker.i_verify_that_the_calendar_is_displayed()"
});
formatter.result({
  "duration": 125376899,
  "status": "passed"
});
formatter.uri("inputform.feature");
formatter.feature({
  "line": 2,
  "name": "Test Input Forms tab",
  "description": "",
  "id": "test-input-forms-tab",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@InputForm"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "01 Test seven drop-down options after clicking input forms tab",
  "description": "",
  "id": "test-input-forms-tab;01-test-seven-drop-down-options-after-clicking-input-forms-tab",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I launch selenium website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on the \"\u003cbtn\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on Input Forms Tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I verify seven dropdown values are getting displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "test-input-forms-tab;01-test-seven-drop-down-options-after-clicking-input-forms-tab;",
  "rows": [
    {
      "cells": [
        "btn"
      ],
      "line": 11,
      "id": "test-input-forms-tab;01-test-seven-drop-down-options-after-clicking-input-forms-tab;;1"
    },
    {
      "cells": [
        "No, thanks!"
      ],
      "line": 12,
      "id": "test-input-forms-tab;01-test-seven-drop-down-options-after-clicking-input-forms-tab;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "01 Test seven drop-down options after clicking input forms tab",
  "description": "",
  "id": "test-input-forms-tab;01-test-seven-drop-down-options-after-clicking-input-forms-tab;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@InputForm"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I launch selenium website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on the \"No, thanks!\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on Input Forms Tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I verify seven dropdown values are getting displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "InputForm.i_launch_selenium_website()"
});
formatter.result({
  "duration": 5765326699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No, thanks!",
      "offset": 16
    }
  ],
  "location": "InputForm.i_click_on_the(String)"
});
formatter.result({
  "duration": 2261154301,
  "status": "passed"
});
formatter.match({
  "location": "InputForm.I_click_on_Input_Forms_Tab()"
});
formatter.result({
  "duration": 48959401,
  "status": "passed"
});
formatter.match({
  "location": "InputForm.I_verify_seven_dropdown_values_are_getting_displayed()"
});
formatter.result({
  "duration": 4199600899,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "02 Test Show Message Button",
  "description": "",
  "id": "test-input-forms-tab;02-test-show-message-button",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I launch selenium website",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I click on the \"\u003cbtn\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I click on Input Forms Tab",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on sub tab Simple form demo",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter some message \"\u003cmessage\u003e\" into enter message textbox",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on show button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I verify \"\u003cmessage\u003e\" is getting displayed correctly",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "test-input-forms-tab;02-test-show-message-button;",
  "rows": [
    {
      "cells": [
        "btn",
        "message"
      ],
      "line": 24,
      "id": "test-input-forms-tab;02-test-show-message-button;;1"
    },
    {
      "cells": [
        "No, thanks!",
        "hello"
      ],
      "line": 25,
      "id": "test-input-forms-tab;02-test-show-message-button;;2"
    },
    {
      "cells": [
        "No, thanks!",
        "abc"
      ],
      "line": 26,
      "id": "test-input-forms-tab;02-test-show-message-button;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "02 Test Show Message Button",
  "description": "",
  "id": "test-input-forms-tab;02-test-show-message-button;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@InputForm"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I launch selenium website",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I click on the \"No, thanks!\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I click on Input Forms Tab",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on sub tab Simple form demo",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter some message \"hello\" into enter message textbox",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on show button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I verify \"hello\" is getting displayed correctly",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "InputForm.i_launch_selenium_website()"
});
formatter.result({
  "duration": 5897654700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No, thanks!",
      "offset": 16
    }
  ],
  "location": "InputForm.i_click_on_the(String)"
});
formatter.result({
  "duration": 2243416799,
  "status": "passed"
});
formatter.match({
  "location": "InputForm.I_click_on_Input_Forms_Tab()"
});
formatter.result({
  "duration": 53619901,
  "status": "passed"
});
formatter.match({
  "location": "InputForm.I_click_on_sub_tab_Simple_form_demo()"
});
formatter.result({
  "duration": 503554401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\"hello\"",
      "offset": 21
    }
  ],
  "location": "InputForm.I_enter_some_message_message_into_enter_message_textbox(String)"
});
formatter.result({
  "duration": 130952000,
  "status": "passed"
});
formatter.match({
  "location": "InputForm.I_click_on_show_button()"
});
formatter.result({
  "duration": 63737399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\"hello\"",
      "offset": 9
    }
  ],
  "location": "InputForm.I_verify_output_message_is_getting_displayed_as_the_message(String)"
});
formatter.result({
  "duration": 4128306199,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "02 Test Show Message Button",
  "description": "",
  "id": "test-input-forms-tab;02-test-show-message-button;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@InputForm"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I launch selenium website",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I click on the \"No, thanks!\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I click on Input Forms Tab",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on sub tab Simple form demo",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter some message \"abc\" into enter message textbox",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on show button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I verify \"abc\" is getting displayed correctly",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "InputForm.i_launch_selenium_website()"
});
formatter.result({
  "duration": 5904810900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No, thanks!",
      "offset": 16
    }
  ],
  "location": "InputForm.i_click_on_the(String)"
});
formatter.result({
  "duration": 2242718500,
  "status": "passed"
});
formatter.match({
  "location": "InputForm.I_click_on_Input_Forms_Tab()"
});
formatter.result({
  "duration": 68183700,
  "status": "passed"
});
formatter.match({
  "location": "InputForm.I_click_on_sub_tab_Simple_form_demo()"
});
formatter.result({
  "duration": 714091499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\"abc\"",
      "offset": 21
    }
  ],
  "location": "InputForm.I_enter_some_message_message_into_enter_message_textbox(String)"
});
formatter.result({
  "duration": 124907700,
  "status": "passed"
});
formatter.match({
  "location": "InputForm.I_click_on_show_button()"
});
formatter.result({
  "duration": 62922600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\"abc\"",
      "offset": 9
    }
  ],
  "location": "InputForm.I_verify_output_message_is_getting_displayed_as_the_message(String)"
});
formatter.result({
  "duration": 4165879299,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 28,
  "name": "03 Test the Get Total Button",
  "description": "",
  "id": "test-input-forms-tab;03-test-the-get-total-button",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "I launch selenium website",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I click on the \"\u003cbtn\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I click on Input Forms Tab",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on sub tab Simple form demo",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter some number \u003cno1\u003e into the enter a textbox",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter some number \u003cno2\u003e into the enter b textbox",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on Sum button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I verify sum of \u003cno1\u003e and \u003cno2\u003e is the sum being displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 38,
  "name": "",
  "description": "",
  "id": "test-input-forms-tab;03-test-the-get-total-button;",
  "rows": [
    {
      "cells": [
        "btn",
        "no1",
        "no2"
      ],
      "line": 39,
      "id": "test-input-forms-tab;03-test-the-get-total-button;;1"
    },
    {
      "cells": [
        "No, thanks!",
        "2",
        "9"
      ],
      "line": 40,
      "id": "test-input-forms-tab;03-test-the-get-total-button;;2"
    },
    {
      "cells": [
        "No, thanks!",
        "71",
        "99"
      ],
      "line": 41,
      "id": "test-input-forms-tab;03-test-the-get-total-button;;3"
    },
    {
      "cells": [
        "No, thanks!",
        "262",
        "101"
      ],
      "line": 42,
      "id": "test-input-forms-tab;03-test-the-get-total-button;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 40,
  "name": "03 Test the Get Total Button",
  "description": "",
  "id": "test-input-forms-tab;03-test-the-get-total-button;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@InputForm"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "I launch selenium website",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I click on the \"No, thanks!\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I click on Input Forms Tab",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on sub tab Simple form demo",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter some number 2 into the enter a textbox",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter some number 9 into the enter b textbox",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on Sum button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I verify sum of 2 and 9 is the sum being displayed",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "InputForm.i_launch_selenium_website()"
});
formatter.result({
  "duration": 5720630600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No, thanks!",
      "offset": 16
    }
  ],
  "location": "InputForm.i_click_on_the(String)"
});
formatter.result({
  "duration": 2256015300,
  "status": "passed"
});
formatter.match({
  "location": "InputForm.I_click_on_Input_Forms_Tab()"
});
formatter.result({
  "duration": 51654700,
  "status": "passed"
});
formatter.match({
  "location": "InputForm.I_click_on_sub_tab_Simple_form_demo()"
});
formatter.result({
  "duration": 521616700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 20
    }
  ],
  "location": "InputForm.I_enter_some_number_no_into_the_enter_a_textbox(String)"
});
formatter.result({
  "duration": 96436001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 20
    }
  ],
  "location": "InputForm.I_enter_some_number_no_into_the_enter_b_textbox(String)"
});
formatter.result({
  "duration": 91475100,
  "status": "passed"
});
formatter.match({
  "location": "InputForm.I_click_on_Sum_button()"
});
formatter.result({
  "duration": 72727600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    },
    {
      "val": "9",
      "offset": 22
    }
  ],
  "location": "InputForm.I_verify_output_sum_is_getting_displayed_as_their_sum(int,int)"
});
formatter.result({
  "duration": 4210654300,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "03 Test the Get Total Button",
  "description": "",
  "id": "test-input-forms-tab;03-test-the-get-total-button;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@InputForm"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "I launch selenium website",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I click on the \"No, thanks!\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I click on Input Forms Tab",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on sub tab Simple form demo",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter some number 71 into the enter a textbox",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter some number 99 into the enter b textbox",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on Sum button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I verify sum of 71 and 99 is the sum being displayed",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "InputForm.i_launch_selenium_website()"
});
formatter.result({
  "duration": 6265511899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No, thanks!",
      "offset": 16
    }
  ],
  "location": "InputForm.i_click_on_the(String)"
});
formatter.result({
  "duration": 2225945400,
  "status": "passed"
});
formatter.match({
  "location": "InputForm.I_click_on_Input_Forms_Tab()"
});
formatter.result({
  "duration": 53389300,
  "status": "passed"
});
formatter.match({
  "location": "InputForm.I_click_on_sub_tab_Simple_form_demo()"
});
formatter.result({
  "duration": 531954001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "71",
      "offset": 20
    }
  ],
  "location": "InputForm.I_enter_some_number_no_into_the_enter_a_textbox(String)"
});
formatter.result({
  "duration": 124877099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "99",
      "offset": 20
    }
  ],
  "location": "InputForm.I_enter_some_number_no_into_the_enter_b_textbox(String)"
});
formatter.result({
  "duration": 106814499,
  "status": "passed"
});
formatter.match({
  "location": "InputForm.I_click_on_Sum_button()"
});
formatter.result({
  "duration": 74074400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "71",
      "offset": 16
    },
    {
      "val": "99",
      "offset": 23
    }
  ],
  "location": "InputForm.I_verify_output_sum_is_getting_displayed_as_their_sum(int,int)"
});
formatter.result({
  "duration": 4366054000,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "03 Test the Get Total Button",
  "description": "",
  "id": "test-input-forms-tab;03-test-the-get-total-button;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@InputForm"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "I launch selenium website",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I click on the \"No, thanks!\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I click on Input Forms Tab",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on sub tab Simple form demo",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter some number 262 into the enter a textbox",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter some number 101 into the enter b textbox",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on Sum button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I verify sum of 262 and 101 is the sum being displayed",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "InputForm.i_launch_selenium_website()"
});
formatter.result({
  "duration": 5737322301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No, thanks!",
      "offset": 16
    }
  ],
  "location": "InputForm.i_click_on_the(String)"
});
formatter.result({
  "duration": 2240789500,
  "status": "passed"
});
formatter.match({
  "location": "InputForm.I_click_on_Input_Forms_Tab()"
});
formatter.result({
  "duration": 58437300,
  "status": "passed"
});
formatter.match({
  "location": "InputForm.I_click_on_sub_tab_Simple_form_demo()"
});
formatter.result({
  "duration": 614181900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "262",
      "offset": 20
    }
  ],
  "location": "InputForm.I_enter_some_number_no_into_the_enter_a_textbox(String)"
});
formatter.result({
  "duration": 104070001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101",
      "offset": 20
    }
  ],
  "location": "InputForm.I_enter_some_number_no_into_the_enter_b_textbox(String)"
});
formatter.result({
  "duration": 90158600,
  "status": "passed"
});
formatter.match({
  "location": "InputForm.I_click_on_Sum_button()"
});
formatter.result({
  "duration": 75078201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "262",
      "offset": 16
    },
    {
      "val": "101",
      "offset": 24
    }
  ],
  "location": "InputForm.I_verify_output_sum_is_getting_displayed_as_their_sum(int,int)"
});
formatter.result({
  "duration": 4175635101,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 44,
  "name": "04 Test the Single CheckBox",
  "description": "",
  "id": "test-input-forms-tab;04-test-the-single-checkbox",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 45,
  "name": "I launch selenium website",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "I click on the \"\u003cbtn\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "I click on Input Forms Tab",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I click on sub tab CheckBox Demo",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I check the given CheckBox",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I verify output message is getting displayed as checked",
  "keyword": "Then "
});
formatter.examples({
  "line": 52,
  "name": "",
  "description": "",
  "id": "test-input-forms-tab;04-test-the-single-checkbox;",
  "rows": [
    {
      "cells": [
        "btn"
      ],
      "line": 53,
      "id": "test-input-forms-tab;04-test-the-single-checkbox;;1"
    },
    {
      "cells": [
        "No, thanks!"
      ],
      "line": 54,
      "id": "test-input-forms-tab;04-test-the-single-checkbox;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 54,
  "name": "04 Test the Single CheckBox",
  "description": "",
  "id": "test-input-forms-tab;04-test-the-single-checkbox;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@InputForm"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "I launch selenium website",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "I click on the \"No, thanks!\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "I click on Input Forms Tab",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I click on sub tab CheckBox Demo",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I check the given CheckBox",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I verify output message is getting displayed as checked",
  "keyword": "Then "
});
formatter.match({
  "location": "InputForm.i_launch_selenium_website()"
});
formatter.result({
  "duration": 5840042100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No, thanks!",
      "offset": 16
    }
  ],
  "location": "InputForm.i_click_on_the(String)"
});
formatter.result({
  "duration": 2250261800,
  "status": "passed"
});
formatter.match({
  "location": "InputForm.I_click_on_Input_Forms_Tab()"
});
formatter.result({
  "duration": 57153601,
  "status": "passed"
});
formatter.match({
  "location": "InputForm.I_click_on_sub_tab_CheckBox_Demo()"
});
formatter.result({
  "duration": 420881900,
  "status": "passed"
});
formatter.match({
  "location": "InputForm.I_check_the_given_CheckBox()"
});
formatter.result({
  "duration": 59355300,
  "status": "passed"
});
formatter.match({
  "location": "InputForm.i_verify_output_message_is_getting_displayed_as_checked()"
});
formatter.result({
  "duration": 148932900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 56,
  "name": "05 Test the Multiple CheckBox",
  "description": "",
  "id": "test-input-forms-tab;05-test-the-multiple-checkbox",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 57,
  "name": "I launch selenium website",
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "I click on the \"\u003cbtn\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "I click on Input Forms Tab",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I click on sub tab CheckBox Demo",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I click on Check All button",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I verify the button is check all",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I click the Uncheck All button",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I verify the button is Uncheck all",
  "keyword": "Then "
});
formatter.examples({
  "line": 66,
  "name": "",
  "description": "",
  "id": "test-input-forms-tab;05-test-the-multiple-checkbox;",
  "rows": [
    {
      "cells": [
        "btn"
      ],
      "line": 67,
      "id": "test-input-forms-tab;05-test-the-multiple-checkbox;;1"
    },
    {
      "cells": [
        "No, thanks!"
      ],
      "line": 68,
      "id": "test-input-forms-tab;05-test-the-multiple-checkbox;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 68,
  "name": "05 Test the Multiple CheckBox",
  "description": "",
  "id": "test-input-forms-tab;05-test-the-multiple-checkbox;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@InputForm"
    }
  ]
});
formatter.step({
  "line": 57,
  "name": "I launch selenium website",
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "I click on the \"No, thanks!\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "I click on Input Forms Tab",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I click on sub tab CheckBox Demo",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I click on Check All button",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I verify the button is check all",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I click the Uncheck All button",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I verify the button is Uncheck all",
  "keyword": "Then "
});
formatter.match({
  "location": "InputForm.i_launch_selenium_website()"
});
formatter.result({
  "duration": 5532051700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No, thanks!",
      "offset": 16
    }
  ],
  "location": "InputForm.i_click_on_the(String)"
});
formatter.result({
  "duration": 2244144600,
  "status": "passed"
});
formatter.match({
  "location": "InputForm.I_click_on_Input_Forms_Tab()"
});
formatter.result({
  "duration": 55644599,
  "status": "passed"
});
formatter.match({
  "location": "InputForm.I_click_on_sub_tab_CheckBox_Demo()"
});
formatter.result({
  "duration": 383128700,
  "status": "passed"
});
formatter.match({
  "location": "InputForm.I_click_on_Check_All_button()"
});
formatter.result({
  "duration": 64810600,
  "status": "passed"
});
formatter.match({
  "location": "InputForm.I_verify_the_button_is_check_all()"
});
formatter.result({
  "duration": 22038700,
  "status": "passed"
});
formatter.match({
  "location": "InputForm.I_click_the_Uncheck_All_button()"
});
formatter.result({
  "duration": 45063399,
  "status": "passed"
});
formatter.match({
  "location": "InputForm.I_verify_the_button_is_Uncheck_all()"
});
formatter.result({
  "duration": 126102599,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 70,
  "name": "07 Test the multiple RadioButton",
  "description": "",
  "id": "test-input-forms-tab;07-test-the-multiple-radiobutton",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 71,
  "name": "I launch selenium website",
  "keyword": "Given "
});
formatter.step({
  "line": 72,
  "name": "I click on the \"\u003cbtn\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 73,
  "name": "I click on Input Forms Tab",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "I click on sub tab RadioButton Demo",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "I check one of the mradiobuttons and verify",
  "keyword": "Then "
});
formatter.examples({
  "line": 77,
  "name": "",
  "description": "",
  "id": "test-input-forms-tab;07-test-the-multiple-radiobutton;",
  "rows": [
    {
      "cells": [
        "btn"
      ],
      "line": 78,
      "id": "test-input-forms-tab;07-test-the-multiple-radiobutton;;1"
    },
    {
      "cells": [
        "No, thanks!"
      ],
      "line": 79,
      "id": "test-input-forms-tab;07-test-the-multiple-radiobutton;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 79,
  "name": "07 Test the multiple RadioButton",
  "description": "",
  "id": "test-input-forms-tab;07-test-the-multiple-radiobutton;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@InputForm"
    }
  ]
});
formatter.step({
  "line": 71,
  "name": "I launch selenium website",
  "keyword": "Given "
});
formatter.step({
  "line": 72,
  "name": "I click on the \"No, thanks!\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 73,
  "name": "I click on Input Forms Tab",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "I click on sub tab RadioButton Demo",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "I check one of the mradiobuttons and verify",
  "keyword": "Then "
});
formatter.match({
  "location": "InputForm.i_launch_selenium_website()"
});
formatter.result({
  "duration": 5485472500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No, thanks!",
      "offset": 16
    }
  ],
  "location": "InputForm.i_click_on_the(String)"
});
formatter.result({
  "duration": 2246048300,
  "status": "passed"
});
formatter.match({
  "location": "InputForm.I_click_on_Input_Forms_Tab()"
});
formatter.result({
  "duration": 53942400,
  "status": "passed"
});
formatter.match({
  "location": "InputForm.I_click_on_sub_tab_RadioButton_Demo()"
});
formatter.result({
  "duration": 361323500,
  "status": "passed"
});
formatter.match({
  "location": "InputForm.I_check_one_of_the_mradiobuttons_and_verify()"
});
formatter.result({
  "duration": 1264561000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 81,
  "name": "08 Test the Seletct list",
  "description": "",
  "id": "test-input-forms-tab;08-test-the-seletct-list",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 82,
  "name": "I launch selenium website",
  "keyword": "Given "
});
formatter.step({
  "line": 83,
  "name": "I click on the \"\u003cbtn\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 84,
  "name": "I click on Input Forms Tab",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "I click on Select Dropdown list",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "I click on options of dropdown and verify",
  "keyword": "Then "
});
formatter.examples({
  "line": 88,
  "name": "",
  "description": "",
  "id": "test-input-forms-tab;08-test-the-seletct-list;",
  "rows": [
    {
      "cells": [
        "btn"
      ],
      "line": 89,
      "id": "test-input-forms-tab;08-test-the-seletct-list;;1"
    },
    {
      "cells": [
        "No, thanks!"
      ],
      "line": 90,
      "id": "test-input-forms-tab;08-test-the-seletct-list;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 90,
  "name": "08 Test the Seletct list",
  "description": "",
  "id": "test-input-forms-tab;08-test-the-seletct-list;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@InputForm"
    }
  ]
});
formatter.step({
  "line": 82,
  "name": "I launch selenium website",
  "keyword": "Given "
});
formatter.step({
  "line": 83,
  "name": "I click on the \"No, thanks!\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 84,
  "name": "I click on Input Forms Tab",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "I click on Select Dropdown list",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "I click on options of dropdown and verify",
  "keyword": "Then "
});
formatter.match({
  "location": "InputForm.i_launch_selenium_website()"
});
formatter.result({
  "duration": 5696225101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No, thanks!",
      "offset": 16
    }
  ],
  "location": "InputForm.i_click_on_the(String)"
});
formatter.result({
  "duration": 2224415600,
  "status": "passed"
});
formatter.match({
  "location": "InputForm.I_click_on_Input_Forms_Tab()"
});
formatter.result({
  "duration": 58979899,
  "status": "passed"
});
formatter.match({
  "location": "InputForm.I_click_on_Select_Dropdown_list()"
});
formatter.result({
  "duration": 416501200,
  "status": "passed"
});
formatter.match({
  "location": "InputForm.I_click_on_options_of_dropdown_and_verify()"
});
formatter.result({
  "duration": 1402901999,
  "status": "passed"
});
formatter.uri("progressbar.feature");
formatter.feature({
  "line": 2,
  "name": "Test Progress Bar",
  "description": "",
  "id": "test-progress-bar",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ProgressBarTest"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "01 Test First popup of website",
  "description": "",
  "id": "test-progress-bar;01-test-first-popup-of-website",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@HandlingPopUp"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I launch selenium easy website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on \"\u003cbtn\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Pop up should disapear",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "test-progress-bar;01-test-first-popup-of-website;",
  "rows": [
    {
      "cells": [
        "btn"
      ],
      "line": 10,
      "id": "test-progress-bar;01-test-first-popup-of-website;;1"
    },
    {
      "cells": [
        "No, thanks!"
      ],
      "line": 11,
      "id": "test-progress-bar;01-test-first-popup-of-website;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "01 Test First popup of website",
  "description": "",
  "id": "test-progress-bar;01-test-first-popup-of-website;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@HandlingPopUp"
    },
    {
      "line": 1,
      "name": "@ProgressBarTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I launch selenium easy website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on \"No, thanks!\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Pop up should disapear",
  "keyword": "Then "
});
formatter.match({
  "location": "ProgressBar.i_launch_selenium_easy_website()"
});
formatter.result({
  "duration": 5340502999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No, thanks!",
      "offset": 12
    }
  ],
  "location": "ProgressBar.i_click_on(String)"
});
formatter.result({
  "duration": 2221645600,
  "status": "passed"
});
formatter.match({
  "location": "ProgressBar.pop_up_should_disapear()"
});
formatter.result({
  "duration": 4362062200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "02 Test three drop-down options after clicking Progress Bar tab",
  "description": "",
  "id": "test-progress-bar;02-test-three-drop-down-options-after-clicking-progress-bar-tab",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@ClickProgressBar"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I launch selenium easy website",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I click on \"\u003cbtn\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I click on Progress Bar Tab",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify three drop-down values are getting displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "test-progress-bar;02-test-three-drop-down-options-after-clicking-progress-bar-tab;",
  "rows": [
    {
      "cells": [
        "btn"
      ],
      "line": 20,
      "id": "test-progress-bar;02-test-three-drop-down-options-after-clicking-progress-bar-tab;;1"
    },
    {
      "cells": [
        "No, thanks!"
      ],
      "line": 21,
      "id": "test-progress-bar;02-test-three-drop-down-options-after-clicking-progress-bar-tab;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "02 Test three drop-down options after clicking Progress Bar tab",
  "description": "",
  "id": "test-progress-bar;02-test-three-drop-down-options-after-clicking-progress-bar-tab;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@ProgressBarTest"
    },
    {
      "line": 13,
      "name": "@ClickProgressBar"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I launch selenium easy website",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I click on \"No, thanks!\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I click on Progress Bar Tab",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify three drop-down values are getting displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "ProgressBar.i_launch_selenium_easy_website()"
});
formatter.result({
  "duration": 5056719600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No, thanks!",
      "offset": 12
    }
  ],
  "location": "ProgressBar.i_click_on(String)"
});
formatter.result({
  "duration": 2255559999,
  "status": "passed"
});
formatter.match({
  "location": "ProgressBar.i_click_on_Progress_Bar_Tab()"
});
formatter.result({
  "duration": 55634601,
  "status": "passed"
});
formatter.match({
  "location": "ProgressBar.i_verify_three_drop_down_values_are_getting_displayed()"
});
formatter.result({
  "duration": 50016193000,
  "error_message": "java.lang.Exception\r\n\tat stepdefination.ProgressBar.i_verify_three_drop_down_values_are_getting_displayed(ProgressBar.java:85)\r\n\tat ✽.Then I verify three drop-down values are getting displayed(progressbar.feature:18)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 24,
  "name": "03 Test JQuery Download Progress bars button",
  "description": "",
  "id": "test-progress-bar;03-test-jquery-download-progress-bars-button",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@JQueryDownloadProgressbars"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I launch selenium easy website",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I click on \"\u003cbtn\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I click on Progress Bar Tab",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on sub tab JQuery Download Progress bars",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I verify text on webpage is \"\u003ctext\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "test-progress-bar;03-test-jquery-download-progress-bars-button;",
  "rows": [
    {
      "cells": [
        "btn",
        "text"
      ],
      "line": 32,
      "id": "test-progress-bar;03-test-jquery-download-progress-bars-button;;1"
    },
    {
      "cells": [
        "No, thanks!",
        "Selenium Easy - JQuery Download Progress bar demo"
      ],
      "line": 33,
      "id": "test-progress-bar;03-test-jquery-download-progress-bars-button;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 33,
  "name": "03 Test JQuery Download Progress bars button",
  "description": "",
  "id": "test-progress-bar;03-test-jquery-download-progress-bars-button;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@ProgressBarTest"
    },
    {
      "line": 23,
      "name": "@JQueryDownloadProgressbars"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I launch selenium easy website",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I click on \"No, thanks!\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I click on Progress Bar Tab",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on sub tab JQuery Download Progress bars",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I verify text on webpage is \"Selenium Easy - JQuery Download Progress bar demo\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ProgressBar.i_launch_selenium_easy_website()"
});
formatter.result({
  "duration": 5235832300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No, thanks!",
      "offset": 12
    }
  ],
  "location": "ProgressBar.i_click_on(String)"
});
formatter.result({
  "duration": 2222308601,
  "status": "passed"
});
formatter.match({
  "location": "ProgressBar.i_click_on_Progress_Bar_Tab()"
});
formatter.result({
  "duration": 51505300,
  "status": "passed"
});
formatter.match({
  "location": "ProgressBar.i_click_on_sub_tab_JQuery_Download_Progress_bars()"
});
formatter.result({
  "duration": 1665637300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Selenium Easy - JQuery Download Progress bar demo",
      "offset": 29
    }
  ],
  "location": "ProgressBar.i_verify_text_on_webpage_is(String)"
});
formatter.result({
  "duration": 96082200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 37,
  "name": "04 Test Start Download button",
  "description": "",
  "id": "test-progress-bar;04-test-start-download-button",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@StartDownload"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "I launch selenium easy website",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I click on \"\u003cbtn\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I click on Progress Bar Tab",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click on sub tab JQuery Download Progress bars",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I click on Start Download button",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "I verify download status is complete before clicking close button",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I click on Close button",
  "keyword": "And "
});
formatter.examples({
  "line": 45,
  "name": "",
  "description": "",
  "id": "test-progress-bar;04-test-start-download-button;",
  "rows": [
    {
      "cells": [
        "btn"
      ],
      "line": 46,
      "id": "test-progress-bar;04-test-start-download-button;;1"
    },
    {
      "cells": [
        "No, thanks!"
      ],
      "line": 47,
      "id": "test-progress-bar;04-test-start-download-button;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 47,
  "name": "04 Test Start Download button",
  "description": "",
  "id": "test-progress-bar;04-test-start-download-button;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@ProgressBarTest"
    },
    {
      "line": 36,
      "name": "@StartDownload"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "I launch selenium easy website",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I click on \"No, thanks!\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I click on Progress Bar Tab",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click on sub tab JQuery Download Progress bars",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I click on Start Download button",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "I verify download status is complete before clicking close button",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I click on Close button",
  "keyword": "And "
});
formatter.match({
  "location": "ProgressBar.i_launch_selenium_easy_website()"
});
formatter.result({
  "duration": 5254889700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No, thanks!",
      "offset": 12
    }
  ],
  "location": "ProgressBar.i_click_on(String)"
});
formatter.result({
  "duration": 2274973601,
  "status": "passed"
});
formatter.match({
  "location": "ProgressBar.i_click_on_Progress_Bar_Tab()"
});
formatter.result({
  "duration": 54833000,
  "status": "passed"
});
formatter.match({
  "location": "ProgressBar.i_click_on_sub_tab_JQuery_Download_Progress_bars()"
});
formatter.result({
  "duration": 3925184401,
  "status": "passed"
});
formatter.match({
  "location": "ProgressBar.i_click_on_Start_Download_button()"
});
formatter.result({
  "duration": 69041200,
  "status": "passed"
});
formatter.match({
  "location": "ProgressBar.i_verify_download_status_is_complete_before_clicking_close_button()"
});
formatter.result({
  "duration": 6783822000,
  "status": "passed"
});
formatter.match({
  "location": "ProgressBar.i_click_on_Close_button()"
});
formatter.result({
  "duration": 167292099,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 50,
  "name": "05 Test Bootstrap Progress Bar button",
  "description": "",
  "id": "test-progress-bar;05-test-bootstrap-progress-bar-button",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 49,
      "name": "@BootstrapProgressBar"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "I launch selenium easy website",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "I click on \"\u003cbtn\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "I click on Progress Bar Tab",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I click on sub tab Bootstrap Progress Bar",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I verify text on webpage is \"\u003ctext\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 56,
  "name": "",
  "description": "",
  "id": "test-progress-bar;05-test-bootstrap-progress-bar-button;",
  "rows": [
    {
      "cells": [
        "btn",
        "text"
      ],
      "line": 57,
      "id": "test-progress-bar;05-test-bootstrap-progress-bar-button;;1"
    },
    {
      "cells": [
        "No, thanks!",
        "Selenium Easy - Automate Bootstrap Download Progress Bar"
      ],
      "line": 58,
      "id": "test-progress-bar;05-test-bootstrap-progress-bar-button;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 58,
  "name": "05 Test Bootstrap Progress Bar button",
  "description": "",
  "id": "test-progress-bar;05-test-bootstrap-progress-bar-button;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@ProgressBarTest"
    },
    {
      "line": 49,
      "name": "@BootstrapProgressBar"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "I launch selenium easy website",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "I click on \"No, thanks!\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "I click on Progress Bar Tab",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I click on sub tab Bootstrap Progress Bar",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I verify text on webpage is \"Selenium Easy - Automate Bootstrap Download Progress Bar\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ProgressBar.i_launch_selenium_easy_website()"
});
formatter.result({
  "duration": 5554377700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No, thanks!",
      "offset": 12
    }
  ],
  "location": "ProgressBar.i_click_on(String)"
});
formatter.result({
  "duration": 2250990300,
  "status": "passed"
});
formatter.match({
  "location": "ProgressBar.i_click_on_Progress_Bar_Tab()"
});
formatter.result({
  "duration": 59819800,
  "status": "passed"
});
formatter.match({
  "location": "ProgressBar.i_click_on_sub_tab_Bootstrap_Progress_Bar()"
});
formatter.result({
  "duration": 1172988900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Selenium Easy - Automate Bootstrap Download Progress Bar",
      "offset": 29
    }
  ],
  "location": "ProgressBar.i_verify_text_on_webpage_is(String)"
});
formatter.result({
  "duration": 127306000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 61,
  "name": "06 Test Bootstrap Progress Bar button",
  "description": "",
  "id": "test-progress-bar;06-test-bootstrap-progress-bar-button",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 60,
      "name": "@StylishProgressBar"
    }
  ]
});
formatter.step({
  "line": 62,
  "name": "I launch selenium easy website",
  "keyword": "Given "
});
formatter.step({
  "line": 63,
  "name": "I click on \"\u003cbtn\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "I click on Progress Bar Tab",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "I click on sub tab Bootstrap Progress Bar",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I verify initial value of progress bar is \"\u003cpercent\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 67,
  "name": "",
  "description": "",
  "id": "test-progress-bar;06-test-bootstrap-progress-bar-button;",
  "rows": [
    {
      "cells": [
        "btn",
        "percent"
      ],
      "line": 68,
      "id": "test-progress-bar;06-test-bootstrap-progress-bar-button;;1"
    },
    {
      "cells": [
        "No, thanks!",
        "0%"
      ],
      "line": 69,
      "id": "test-progress-bar;06-test-bootstrap-progress-bar-button;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 69,
  "name": "06 Test Bootstrap Progress Bar button",
  "description": "",
  "id": "test-progress-bar;06-test-bootstrap-progress-bar-button;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@ProgressBarTest"
    },
    {
      "line": 60,
      "name": "@StylishProgressBar"
    }
  ]
});
formatter.step({
  "line": 62,
  "name": "I launch selenium easy website",
  "keyword": "Given "
});
formatter.step({
  "line": 63,
  "name": "I click on \"No, thanks!\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "I click on Progress Bar Tab",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "I click on sub tab Bootstrap Progress Bar",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I verify initial value of progress bar is \"0%\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ProgressBar.i_launch_selenium_easy_website()"
});
formatter.result({
  "duration": 6091797000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No, thanks!",
      "offset": 12
    }
  ],
  "location": "ProgressBar.i_click_on(String)"
});
formatter.result({
  "duration": 2233511100,
  "status": "passed"
});
formatter.match({
  "location": "ProgressBar.i_click_on_Progress_Bar_Tab()"
});
formatter.result({
  "duration": 62350999,
  "status": "passed"
});
formatter.match({
  "location": "ProgressBar.i_click_on_sub_tab_Bootstrap_Progress_Bar()"
});
formatter.result({
  "duration": 1128516500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0%",
      "offset": 43
    }
  ],
  "location": "ProgressBar.i_verify_initial_value_of_progress_bar_is(String)"
});
formatter.result({
  "duration": 120777400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 74,
  "name": "07 Test",
  "description": "",
  "id": "test-progress-bar;07-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 73,
      "name": "@Downloadsize:20480kb"
    }
  ]
});
formatter.step({
  "line": 75,
  "name": "I launch selenium easy website",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "I click on \"\u003cbtn\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "I click on Progress Bar Tab",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "I click on sub tab Bootstrap Progress Bar",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "I click on Downloadsize:20480kb button",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "I verify the progress bar stops at 100%",
  "keyword": "Then "
});
formatter.examples({
  "line": 81,
  "name": "",
  "description": "",
  "id": "test-progress-bar;07-test;",
  "rows": [
    {
      "cells": [
        "btn"
      ],
      "line": 82,
      "id": "test-progress-bar;07-test;;1"
    },
    {
      "cells": [
        "No, thanks!"
      ],
      "line": 83,
      "id": "test-progress-bar;07-test;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 83,
  "name": "07 Test",
  "description": "",
  "id": "test-progress-bar;07-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@ProgressBarTest"
    },
    {
      "line": 73,
      "name": "@Downloadsize:20480kb"
    }
  ]
});
formatter.step({
  "line": 75,
  "name": "I launch selenium easy website",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "I click on \"No, thanks!\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "I click on Progress Bar Tab",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "I click on sub tab Bootstrap Progress Bar",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "I click on Downloadsize:20480kb button",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "I verify the progress bar stops at 100%",
  "keyword": "Then "
});
formatter.match({
  "location": "ProgressBar.i_launch_selenium_easy_website()"
});
formatter.result({
  "duration": 5341844300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No, thanks!",
      "offset": 12
    }
  ],
  "location": "ProgressBar.i_click_on(String)"
});
formatter.result({
  "duration": 2257367800,
  "status": "passed"
});
formatter.match({
  "location": "ProgressBar.i_click_on_Progress_Bar_Tab()"
});
formatter.result({
  "duration": 60555900,
  "status": "passed"
});
formatter.match({
  "location": "ProgressBar.i_click_on_sub_tab_Bootstrap_Progress_Bar()"
});
formatter.result({
  "duration": 1100088600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20480",
      "offset": 24
    }
  ],
  "location": "ProgressBar.i_click_on_Downloadsize_kb_button(int)"
});
formatter.result({
  "duration": 76669799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 35
    }
  ],
  "location": "ProgressBar.i_verify_the_progress_bar_stops_at(int)"
});
formatter.result({
  "duration": 20473035300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 86,
  "name": "08 Test Drag and Drop Slider button",
  "description": "",
  "id": "test-progress-bar;08-test-drag-and-drop-slider-button",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 85,
      "name": "@DragAndDropSlider"
    }
  ]
});
formatter.step({
  "line": 87,
  "name": "I launch selenium easy website",
  "keyword": "Given "
});
formatter.step({
  "line": 88,
  "name": "I click on \"\u003cbtn\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 89,
  "name": "I click on Progress Bar Tab",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "I click on sub tab Drag and Drop Slider",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "I verify text on webpage is \"\u003ctext\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 93,
  "name": "",
  "description": "",
  "id": "test-progress-bar;08-test-drag-and-drop-slider-button;",
  "rows": [
    {
      "cells": [
        "btn",
        "text"
      ],
      "line": 94,
      "id": "test-progress-bar;08-test-drag-and-drop-slider-button;;1"
    },
    {
      "cells": [
        "No, thanks!",
        "Selenium Easy - Drag and Drop Range Sliders"
      ],
      "line": 95,
      "id": "test-progress-bar;08-test-drag-and-drop-slider-button;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 95,
  "name": "08 Test Drag and Drop Slider button",
  "description": "",
  "id": "test-progress-bar;08-test-drag-and-drop-slider-button;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@ProgressBarTest"
    },
    {
      "line": 85,
      "name": "@DragAndDropSlider"
    }
  ]
});
formatter.step({
  "line": 87,
  "name": "I launch selenium easy website",
  "keyword": "Given "
});
formatter.step({
  "line": 88,
  "name": "I click on \"No, thanks!\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 89,
  "name": "I click on Progress Bar Tab",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "I click on sub tab Drag and Drop Slider",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "I verify text on webpage is \"Selenium Easy - Drag and Drop Range Sliders\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ProgressBar.i_launch_selenium_easy_website()"
});
formatter.result({
  "duration": 5050511300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No, thanks!",
      "offset": 12
    }
  ],
  "location": "ProgressBar.i_click_on(String)"
});
formatter.result({
  "duration": 2220913100,
  "status": "passed"
});
formatter.match({
  "location": "ProgressBar.i_click_on_Progress_Bar_Tab()"
});
formatter.result({
  "duration": 47023399,
  "status": "passed"
});
formatter.match({
  "location": "ProgressBar.i_click_on_sub_tab_Drag_and_Drop_Slider()"
});
formatter.result({
  "duration": 401547200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Selenium Easy - Drag and Drop Range Sliders",
      "offset": 29
    }
  ],
  "location": "ProgressBar.i_verify_text_on_webpage_is(String)"
});
formatter.result({
  "duration": 95310100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 100,
  "name": "09 Test Drag and Drop Slider button",
  "description": "",
  "id": "test-progress-bar;09-test-drag-and-drop-slider-button",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 99,
      "name": "@DragAndDropSliderDeafaultVal"
    }
  ]
});
formatter.step({
  "line": 101,
  "name": "I launch selenium easy website",
  "keyword": "Given "
});
formatter.step({
  "line": 102,
  "name": "I click on \"\u003cbtn\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 103,
  "name": "I click on Progress Bar Tab",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "I click on sub tab Drag and Drop Slider",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "I verify default values of \"\u003ccount\u003e\" is \"\u003cdefaultval\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 106,
  "name": "",
  "description": "",
  "id": "test-progress-bar;09-test-drag-and-drop-slider-button;",
  "rows": [
    {
      "cells": [
        "btn",
        "count",
        "defaultval"
      ],
      "line": 107,
      "id": "test-progress-bar;09-test-drag-and-drop-slider-button;;1"
    },
    {
      "cells": [
        "No, thanks!",
        "first",
        "10"
      ],
      "line": 108,
      "id": "test-progress-bar;09-test-drag-and-drop-slider-button;;2"
    },
    {
      "cells": [
        "No, thanks!",
        "second",
        "50"
      ],
      "line": 109,
      "id": "test-progress-bar;09-test-drag-and-drop-slider-button;;3"
    },
    {
      "cells": [
        "No, thanks!",
        "third",
        "30"
      ],
      "line": 110,
      "id": "test-progress-bar;09-test-drag-and-drop-slider-button;;4"
    },
    {
      "cells": [
        "No, thanks!",
        "fourth",
        "50"
      ],
      "line": 111,
      "id": "test-progress-bar;09-test-drag-and-drop-slider-button;;5"
    },
    {
      "cells": [
        "No, thanks!",
        "fifth",
        "50"
      ],
      "line": 112,
      "id": "test-progress-bar;09-test-drag-and-drop-slider-button;;6"
    },
    {
      "cells": [
        "No, thanks!",
        "sixth",
        "50"
      ],
      "line": 113,
      "id": "test-progress-bar;09-test-drag-and-drop-slider-button;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 108,
  "name": "09 Test Drag and Drop Slider button",
  "description": "",
  "id": "test-progress-bar;09-test-drag-and-drop-slider-button;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 99,
      "name": "@DragAndDropSliderDeafaultVal"
    },
    {
      "line": 1,
      "name": "@ProgressBarTest"
    }
  ]
});
formatter.step({
  "line": 101,
  "name": "I launch selenium easy website",
  "keyword": "Given "
});
formatter.step({
  "line": 102,
  "name": "I click on \"No, thanks!\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 103,
  "name": "I click on Progress Bar Tab",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "I click on sub tab Drag and Drop Slider",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "I verify default values of \"first\" is \"10\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ProgressBar.i_launch_selenium_easy_website()"
});
formatter.result({
  "duration": 6444068200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No, thanks!",
      "offset": 12
    }
  ],
  "location": "ProgressBar.i_click_on(String)"
});
formatter.result({
  "duration": 2232326699,
  "status": "passed"
});
formatter.match({
  "location": "ProgressBar.i_click_on_Progress_Bar_Tab()"
});
formatter.result({
  "duration": 54650300,
  "status": "passed"
});
formatter.match({
  "location": "ProgressBar.i_click_on_sub_tab_Drag_and_Drop_Slider()"
});
formatter.result({
  "duration": 486134800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "first",
      "offset": 28
    },
    {
      "val": "10",
      "offset": 39
    }
  ],
  "location": "ProgressBar.i_verify_default_values_of_is(String,String)"
});
formatter.result({
  "duration": 134604600,
  "status": "passed"
});
formatter.scenario({
  "line": 109,
  "name": "09 Test Drag and Drop Slider button",
  "description": "",
  "id": "test-progress-bar;09-test-drag-and-drop-slider-button;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 99,
      "name": "@DragAndDropSliderDeafaultVal"
    },
    {
      "line": 1,
      "name": "@ProgressBarTest"
    }
  ]
});
formatter.step({
  "line": 101,
  "name": "I launch selenium easy website",
  "keyword": "Given "
});
formatter.step({
  "line": 102,
  "name": "I click on \"No, thanks!\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 103,
  "name": "I click on Progress Bar Tab",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "I click on sub tab Drag and Drop Slider",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "I verify default values of \"second\" is \"50\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ProgressBar.i_launch_selenium_easy_website()"
});
formatter.result({
  "duration": 5475733299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No, thanks!",
      "offset": 12
    }
  ],
  "location": "ProgressBar.i_click_on(String)"
});
formatter.result({
  "duration": 2247569900,
  "status": "passed"
});
formatter.match({
  "location": "ProgressBar.i_click_on_Progress_Bar_Tab()"
});
formatter.result({
  "duration": 50693200,
  "status": "passed"
});
formatter.match({
  "location": "ProgressBar.i_click_on_sub_tab_Drag_and_Drop_Slider()"
});
formatter.result({
  "duration": 428013601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "second",
      "offset": 28
    },
    {
      "val": "50",
      "offset": 40
    }
  ],
  "location": "ProgressBar.i_verify_default_values_of_is(String,String)"
});
formatter.result({
  "duration": 114727700,
  "status": "passed"
});
formatter.scenario({
  "line": 110,
  "name": "09 Test Drag and Drop Slider button",
  "description": "",
  "id": "test-progress-bar;09-test-drag-and-drop-slider-button;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 99,
      "name": "@DragAndDropSliderDeafaultVal"
    },
    {
      "line": 1,
      "name": "@ProgressBarTest"
    }
  ]
});
formatter.step({
  "line": 101,
  "name": "I launch selenium easy website",
  "keyword": "Given "
});
formatter.step({
  "line": 102,
  "name": "I click on \"No, thanks!\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 103,
  "name": "I click on Progress Bar Tab",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "I click on sub tab Drag and Drop Slider",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "I verify default values of \"third\" is \"30\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ProgressBar.i_launch_selenium_easy_website()"
});
formatter.result({
  "duration": 5857424900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No, thanks!",
      "offset": 12
    }
  ],
  "location": "ProgressBar.i_click_on(String)"
});
formatter.result({
  "duration": 2259757400,
  "status": "passed"
});
formatter.match({
  "location": "ProgressBar.i_click_on_Progress_Bar_Tab()"
});
formatter.result({
  "duration": 66145701,
  "status": "passed"
});
formatter.match({
  "location": "ProgressBar.i_click_on_sub_tab_Drag_and_Drop_Slider()"
});
formatter.result({
  "duration": 458480000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "third",
      "offset": 28
    },
    {
      "val": "30",
      "offset": 39
    }
  ],
  "location": "ProgressBar.i_verify_default_values_of_is(String,String)"
});
formatter.result({
  "duration": 135081500,
  "status": "passed"
});
formatter.scenario({
  "line": 111,
  "name": "09 Test Drag and Drop Slider button",
  "description": "",
  "id": "test-progress-bar;09-test-drag-and-drop-slider-button;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 99,
      "name": "@DragAndDropSliderDeafaultVal"
    },
    {
      "line": 1,
      "name": "@ProgressBarTest"
    }
  ]
});
formatter.step({
  "line": 101,
  "name": "I launch selenium easy website",
  "keyword": "Given "
});
formatter.step({
  "line": 102,
  "name": "I click on \"No, thanks!\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 103,
  "name": "I click on Progress Bar Tab",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "I click on sub tab Drag and Drop Slider",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "I verify default values of \"fourth\" is \"50\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ProgressBar.i_launch_selenium_easy_website()"
});
formatter.result({
  "duration": 6099431500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No, thanks!",
      "offset": 12
    }
  ],
  "location": "ProgressBar.i_click_on(String)"
});
formatter.result({
  "duration": 2247811700,
  "status": "passed"
});
formatter.match({
  "location": "ProgressBar.i_click_on_Progress_Bar_Tab()"
});
formatter.result({
  "duration": 55653999,
  "status": "passed"
});
formatter.match({
  "location": "ProgressBar.i_click_on_sub_tab_Drag_and_Drop_Slider()"
});
formatter.result({
  "duration": 494267800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fourth",
      "offset": 28
    },
    {
      "val": "50",
      "offset": 40
    }
  ],
  "location": "ProgressBar.i_verify_default_values_of_is(String,String)"
});
formatter.result({
  "duration": 116368600,
  "status": "passed"
});
formatter.scenario({
  "line": 112,
  "name": "09 Test Drag and Drop Slider button",
  "description": "",
  "id": "test-progress-bar;09-test-drag-and-drop-slider-button;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 99,
      "name": "@DragAndDropSliderDeafaultVal"
    },
    {
      "line": 1,
      "name": "@ProgressBarTest"
    }
  ]
});
formatter.step({
  "line": 101,
  "name": "I launch selenium easy website",
  "keyword": "Given "
});
formatter.step({
  "line": 102,
  "name": "I click on \"No, thanks!\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 103,
  "name": "I click on Progress Bar Tab",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "I click on sub tab Drag and Drop Slider",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "I verify default values of \"fifth\" is \"50\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ProgressBar.i_launch_selenium_easy_website()"
});
formatter.result({
  "duration": 6580793600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No, thanks!",
      "offset": 12
    }
  ],
  "location": "ProgressBar.i_click_on(String)"
});
formatter.result({
  "duration": 2265156300,
  "status": "passed"
});
formatter.match({
  "location": "ProgressBar.i_click_on_Progress_Bar_Tab()"
});
formatter.result({
  "duration": 60410100,
  "status": "passed"
});
formatter.match({
  "location": "ProgressBar.i_click_on_sub_tab_Drag_and_Drop_Slider()"
});
formatter.result({
  "duration": 490583700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fifth",
      "offset": 28
    },
    {
      "val": "50",
      "offset": 39
    }
  ],
  "location": "ProgressBar.i_verify_default_values_of_is(String,String)"
});
formatter.result({
  "duration": 135648999,
  "status": "passed"
});
formatter.scenario({
  "line": 113,
  "name": "09 Test Drag and Drop Slider button",
  "description": "",
  "id": "test-progress-bar;09-test-drag-and-drop-slider-button;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 99,
      "name": "@DragAndDropSliderDeafaultVal"
    },
    {
      "line": 1,
      "name": "@ProgressBarTest"
    }
  ]
});
formatter.step({
  "line": 101,
  "name": "I launch selenium easy website",
  "keyword": "Given "
});
formatter.step({
  "line": 102,
  "name": "I click on \"No, thanks!\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 103,
  "name": "I click on Progress Bar Tab",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "I click on sub tab Drag and Drop Slider",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "I verify default values of \"sixth\" is \"50\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ProgressBar.i_launch_selenium_easy_website()"
});
formatter.result({
  "duration": 5182330300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No, thanks!",
      "offset": 12
    }
  ],
  "location": "ProgressBar.i_click_on(String)"
});
formatter.result({
  "duration": 2222117100,
  "status": "passed"
});
formatter.match({
  "location": "ProgressBar.i_click_on_Progress_Bar_Tab()"
});
formatter.result({
  "duration": 49558899,
  "status": "passed"
});
formatter.match({
  "location": "ProgressBar.i_click_on_sub_tab_Drag_and_Drop_Slider()"
});
formatter.result({
  "duration": 404843600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sixth",
      "offset": 28
    },
    {
      "val": "50",
      "offset": 39
    }
  ],
  "location": "ProgressBar.i_verify_default_values_of_is(String,String)"
});
formatter.result({
  "duration": 99281300,
  "status": "passed"
});
});