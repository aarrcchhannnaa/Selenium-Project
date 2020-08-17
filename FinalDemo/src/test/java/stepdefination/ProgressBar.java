package stepdefination;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.BeforeMethod;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import definedriver.drivers;
import junit.framework.Assert;
public class ProgressBar extends drivers{
	
    public WebDriver driver=null;
    WebElement element;
	int count =1;
	/////////////Scenario - 1
	
	@Given("^I launch selenium easy website$")
	public void i_launch_selenium_easy_website() throws Throwable {
		driver=setDriver();
	    System.out.println((count++)+". I launch selenium easy website");
	     
	}
	
	@When("^I click on \"(.*?)\"$")
	public void i_click_on(String arg1) throws Throwable {
		driver.manage().window().maximize();
		
		String buttonVal=driver.findElement(By.xpath("//*[@id=\"at-cv-lightbox-button-holder\"]/a[2]")).getText();		
		if(buttonVal.equals(arg1)) {
			WebDriverWait wait = new WebDriverWait(driver, 20);
	        wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"at-cv-lightbox-button-holder\"]/a[2]"))).click();
	        System.out.println((count++)+". I clicked on No, thanks!");
		}
		else
		{
			System.out.println("Button Not Found");
			throw new Exception();
		}		
	}

	@Then("^Pop up should disapear$")
	public void pop_up_should_disapear() throws Throwable {
		if(driver.getPageSource().contains("No, thanks!"))
		{
			System.out.println((count++)+". Pop up is still on webpage");
			throw new Exception();
		}
		else
		{
			System.out.println((count++)+". Pop up is disapeared from web page");
			
		}
		
		driver.close();
	}
	
	//////////Scenario - 2
	@When("^I click on Progress Bar Tab$")
	public void i_click_on_Progress_Bar_Tab() throws Throwable {
	    driver.findElement(By.xpath("//*[@id=\"navbar-brand-centered\"]/ul[2]/li[1]/a")).click();
	    System.out.println((count++)+". I clicked on Progress Bar Tab");
	}

	@Then("^I verify three drop-down values are getting displayed$")
	public void i_verify_three_drop_down_values_are_getting_displayed() throws Throwable {
		 List<WebElement> listOptionDropdown = driver.findElements(By.xpath("//*[@id=\"navbar-brand-centered\"]/ul[2]/li[2]/ul"));
		 	Thread.sleep(50000);
	        int dropdownCount = listOptionDropdown.size();
	        if(dropdownCount==3) {
	        	System.out.println((count++)+". Three drop-down values are displayed");
	        }
	        else {
	        	System.out.println((count++)+". Three drop-down values are NOT displayed");
	        	throw new Exception();
	        }    
	        driver.close();
	}
	////////Scenario - 3
	@When("^I click on sub tab JQuery Download Progress bars$")
	public void i_click_on_sub_tab_JQuery_Download_Progress_bars() throws Throwable {
	    driver.findElement(By.xpath("//*[@id=\"navbar-brand-centered\"]/ul[2]/li[1]/ul/li[1]/a")).click();
	    System.out.println(count+". I clicked on sub tab JQuery Download Progress bars");
	}
	@Then("^I verify text on webpage is \"(.*?)\"$")
	public void i_verify_text_on_webpage_is(String arg1) throws Throwable {
		String str=driver.getTitle();
		System.out.println(str);
	    if(str.equals(arg1))
	    {
		    System.out.println((count++)+". I verified text on web page is same as expected");
	    }
	    else
	    {
		    System.out.println((count++)+". I verified text on web page is NOT same as expected");
		    throw new Exception();
	    }
	    driver.close();
	}
	////////Scenario - 4
	@When("^I click on Start Download button$")
	public void i_click_on_Start_Download_button() throws Throwable {
	    
	     driver.findElement(By.xpath("//*[@id=\"downloadButton\"]")).click();
	     System.out.println((count++)+". I clicked on Start Download button");
	}
	
	
	@Then("^I verify download status is complete before clicking close button$")
	public void i_verify_download_status_is_complete_before_clicking_close_button() throws Throwable {	
		
		WebDriverWait wait = new WebDriverWait(driver, 20);
        Boolean status=wait.until(new ExpectedCondition<Boolean>() {
        	public Boolean apply(WebDriver webDriver) {
        		return driver.findElement(By.xpath("//*[@id=\"dialog\"]/div[1]")).getText().equals("Complete!");
        	}
        });
        if(status)
        {
        	System.out.println((count++)+". I verified download status is complete before clicking close button");
        }
        else
        {
        	System.out.println((count++)+". I verified download status is NOT complete before clicking close button");
        	throw new Exception();
        }
		
	}

	@Then("^I click on Close button$")
	public void i_click_on_Close_button() throws Throwable {
		WebDriverWait wait = new WebDriverWait(driver, 20);
        wait.until(ExpectedConditions.elementToBeClickable(By.xpath("/html/body/div[3]/div[3]/div/button"))).click();
        System.out.println((count++)+". I clicked on Close button"); 
        driver.close();
	}
	
	
	/////////Scenario - 5
	@When("^I click on sub tab Bootstrap Progress Bar$")
	public void i_click_on_sub_tab_Bootstrap_Progress_Bar() throws Throwable {
	    driver.findElement(By.xpath("//*[@id=\"navbar-brand-centered\"]/ul[2]/li[1]/ul/li[2]/a")).click();
	    System.out.println((count++)+". I clicked on sub tab Bootstrap Progress Bar"); 
	}
	
	////////Scenario - 6
	@Then("^I verify initial value of progress bar is \"(.*?)\"$")
	public void i_verify_initial_value_of_progress_bar_is(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		if((driver.findElement(By.xpath("//*[@id=\"circle\"]/div/div[1]")).getText()).equals(arg1))
		{
			System.out.println((count++)+". I verified initial value of progress bar is 0%"); 
		}
		else
		{
			System.out.println((count++)+". I verify initial value of progress bar is NOT 0%");
			throw new Exception();
		}
		driver.close();
	}
	////////Scenario - 7
	@When("^I click on Downloadsize:(\\d+)kb button$")
	public void i_click_on_Downloadsize_kb_button(int arg1) throws Throwable {
		driver.findElement(By.xpath("//*[@id=\"cricle-btn\"]")).click();
		System.out.println((count++)+". I click on Downloadsize:"+arg1+" kb button"); 
	}
	@Then("^I verify the progress bar stops at (\\d+)%$")
	public void i_verify_the_progress_bar_stops_at(int arg1) throws Throwable {
		 WebDriverWait wait = new WebDriverWait(driver, 20);
	        wait.until(new ExpectedCondition<Boolean>() {
	        	public Boolean apply(WebDriver webDriver) {
	        		return driver.findElement(By.xpath("//*[@id=\"circle\"]/div/div[1]")).getText().equals("100%");
	        	}
	        });
	    if((driver.findElement(By.xpath("//*[@id=\"circle\"]/div/div[1]")).getText()).equals("100%"))
	    {
	    	System.out.println((count++)+". I verified that the progress bar stops at 100%");
	    }
	    else
	    {
	    	System.out.println((count++)+". I verified that the progress bar NOT stops at 100%");
	    }
	    driver.close();
	}
	////////Scenario - 8
	@When("^I click on sub tab Drag and Drop Slider$")
	public void i_click_on_sub_tab_Drag_and_Drop_Slider() throws Exception {
		driver.findElement(By.xpath("//*[@id=\"navbar-brand-centered\"]/ul[2]/li[1]/ul/li[3]/a")).click();
    	System.out.println((count++)+". I clicked on sub tab Drag and Drop Slider"); 	
	}
	
	//////Scenario - 9
	@Then("^I verify default values of \"(.*?)\" is \"(.*?)\"$")
	public void i_verify_default_values_of_is(String bar_count, String defaultval) throws Throwable {
		
		System.out.println(bar_count);
		String str=new String();
		//str=driver.findElement(By.id("range")).getText();
		
		switch(bar_count)
		{
			
			case "first":
				str=driver.findElement(By.id("range")).getText();				
				break;
			case "second":
				str=driver.findElement(By.id("rangePrimary")).getText();
				break;
			case "third":
				str=driver.findElement(By.id("rangeSuccess")).getText();
				break;
			case "fourth":
				str=driver.findElement(By.id("rangeInfo")).getText();
				break;
			case "fifth":
				str=driver.findElement(By.id("rangeWarning")).getText();
				break;
			case "sixth":
				str=driver.findElement(By.id("rangeDanger")).getText();
				break;
		}
		
		
		if(str.equals(defaultval))
		{
			
			System.out.println((count++)+". I verify default values of "+bar_count + "progress bar is "+defaultval);
		}
		else
		{
		
			System.out.println((count++)+". I verify default values of "+bar_count + "progress bar is NOT "+ defaultval);
			throw new Exception();

		}
		
		driver.close();
	}
	///////////////////////////////////////////////////////////////////////////
	///////////////////////////Date Picker////////////////////////////////////
//	@And("^I click on Date pickers Tab$")
//	public void i_click_on_date_pickers_tab() {
//		
//		driver.findElement(By.xpath("//*[@id=\"navbar-brand-centered\"]/ul[1]/li[2]/a")).click();
//
//	}
//
//	@Then("^I verify two drop-down values are getting displayed$")
//	public void i_verify_two_drop_down_values_are_getting_displayed() {
//
//		//Select selectDropdown = new Select(driver.findElement(By.className("dropdown-toggle")));
//
//		List<WebElement> listOptionDropdown = driver.findElements(By.xpath("//*[@id=\"navbar-brand-centered\"]/ul[1]/li[2]/ul/li"));
//
//		int dropdownCount = listOptionDropdown.size();
//		System.out.println(dropdownCount);
//		if(dropdownCount==2) {
//			System.out.println("========test scenario passed");
//		}
//		else {
//			System.out.println("test scenario failed");
//		}
//		driver.close();
//	}
//	///////Scenario - 2
//	@And("^I click on Bootstrap Date Picker tab$")
//	public void i_click_on_bootstrap_date_picker_tab() {
//		driver.findElement(By.xpath("//*[@id=\"navbar-brand-centered\"]/ul[1]/li[2]/ul/li[1]/a")).click();
//	}
//
//	@Then("^I verify if the bootstrap Date Picker Tab page is displayed$")
//	public void i_verify_if_the_bootstrap_date_picker_tab_page_is_displayed() {
//		System.out.println(driver.getTitle());
//		String title=driver.getTitle();
//		String actual="Selenium Easy - Best Demo website for Bootstrap Date picker";
//
//		org.junit.Assert.assertEquals(title, actual);
//		System.out.println("passed");
//		driver.close();
//	}
//	/////////Scenario -3
//	@When("^I click on JQuery Date Picker tab$")
//	public void i_click_on_j_query_date_picker_tab() throws InterruptedException {
//		Thread.sleep(5000);
//		driver.findElement(By.xpath("//*[@id=\"navbar-brand-centered\"]/ul[1]/li[2]/ul/li[2]/a")).click();
//	}
//
//	@Then("^I verify if the  JQuery Date Picker page is displayed$")
//	public void i_verify_if_the_j_query_date_picker_page_is_displayed() throws InterruptedException {
//		Thread.sleep(5000);
//		System.out.println(driver.getTitle());
//		String title1=driver.getTitle();
//		String actual1="Selenium Easy - JQuery Date picker demo";
//
//		org.junit.Assert.assertEquals(title1, actual1);
//		System.out.println("passed");
//		driver.close();
//	}
//	/////////Scenario -4
//	@When("^I click on Calendar button$")
//	public void i_click_on_calendar_button() throws InterruptedException {
//		Thread.sleep(10000);
//		driver.findElement(By.xpath("//*[@id=\"sandbox-container1\"]/div/span/i")).click();
//	}
//
//	@Then("^I verify if calendar is displayed$")
//	public void i_verify_if_calendar_is_displayed() {
//		if(driver.findElement(By.xpath("/html/body/div[3]/div[1]/table"))!=null) {
//			System.out.println("test case passed");
//		}
//		else {
//			System.out.println("test case failed");
//		}
//		driver.close();
//
//	}
//	//////////Scenario - 5
//	@When("^I select some date from the list$")
//	public void i_select_some_date_from_the_list() {
//		driver.findElement(By.xpath("/html/body/div[3]/div[1]/table/tbody/tr[3]/td[3]")).click();
//	}
//
//	@Then("^I verify if date is displayed in the text box$")
//	public void i_verify_if_date_is_displayed_in_the_text_box() throws InterruptedException {
//		Thread.sleep(10000);
//		WebElement w2=driver.findElement(By.xpath("//*[@id=\"sandbox-container1\"]/div/input"));
//		System.out.println(w2.getAttribute("value"));
//		driver.close();
//	}
//	//////////Scenario - 6
//	@When("^I select clear tab$")
//	public void i_select_clear_tab() {
//		driver.findElement(By.xpath("/html/body/div[3]/div[1]/table/tfoot/tr[2]/th")).click();
//	}
//
//	@Then("^I verify if date textbox is empty$")
//	public void i_verify_if_date_textbox_is_empty() throws InterruptedException {
//		Thread.sleep(5000);
//		WebElement w1=driver.findElement(By.xpath("//*[@id=\"sandbox-container1\"]/div/input"));
//		if (w1.getAttribute("value").isEmpty()) {
//			System.out.println("test case passed");
//		}
//		else {
//			System.out.println("failed");
//		}
//		driver.close();
//	}
//	
//	
//	//////////Scenario - 7
//
//	@When("^I click on From text field$")
//	public void i_click_on_from_text_field() {
//
//		driver.findElement(By.xpath("//*[@id=\"from\"]")).click();
//	}
//
//	@Then("^I verify that the calendar is displayed$")
//	public void i_verify_that_the_calendar_is_displayed() {
//		if(driver.findElement(By.xpath("//*[@id=\"ui-datepicker-div\"]/table"))!=null) {
//			System.out.println("test case passed");
//		}
//		else {
//			System.out.println("test case failed");
//		}
//		driver.close();
//	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////Input Form
//	@And("^I click on Input Forms Tab$")
//	
//	public void I_click_on_Input_Forms_Tab() throws Throwable{
//
//		driver.findElement(By.xpath("//*['@id=navbar-brand-centere']/ul[1]/li[1]/a")).click();
//
//	}
//
//	@Then("^I verify seven dropdown values are getting displayed$")
//
//	public void I_verify_seven_dropdown_values_are_getting_displayed() throws Throwable{
//
//		List<WebElement> seven = driver.findElements(By.xpath("//ul[contains(@class, 'dropdown-menu')]"));
//
//		int s = seven.size();	
//
//		int e = 7;
//
//		Assert.assertEquals(e, s);
//		driver.close();
//		
//	}
//		
//	///////////Scenario - 2
//	@And("^I click on sub tab Simple form demo$")
//
//	public void I_click_on_sub_tab_Simple_form_demo() throws Throwable{
//
//		driver.findElement(By.xpath("//*[@id=\"navbar-brand-centered\"]/ul[1]/li[1]/ul/li[1]/a")).click();
//
//	}
//
//
//	@And("^I enter some message (.*) into enter message textbox$")
//
//	public void I_enter_some_message_message_into_enter_message_textbox(String message) throws Throwable{
//
//		element=new WebDriverWait(driver,20).until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"user-message\"]")));
//
//		element.sendKeys(message);
//
//		//driver.findElement(By.xpath("//*[@id=\"user-message\"]")).sendKeys(message);
//
//	}
//
//	
//
//	@And("^I click on show button$")
//
//	public void I_click_on_show_button() throws Throwable{
//
//		driver.findElement(By.xpath("//*[@id=\"get-input\"]/button")).click();
//
//	}
//
//	
//
//	@Then("^I verify (.*) is getting displayed correctly$")
//
//	public void I_verify_output_message_is_getting_displayed_as_the_message(String message) {
//
//		element=new WebDriverWait(driver,20).until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"display\"]")));
//
//		WebElement element1= element;
//
//		String val=element1.getAttribute("innerText");
//
//		Assert.assertEquals(message, val); 
//		driver.close();
//
//	}
//
//	/////////Scenario - 3
//	
//	@And("^I enter some number (\\d+) into the enter a textbox$")
//
//	public void I_enter_some_number_no_into_the_enter_a_textbox(String no1) throws Throwable {
//
//		driver.findElement(By.xpath("//*[@id=\"sum1\"]")).sendKeys(no1);
//
//	}
//
//	@And("^I enter some number (\\d+) into the enter b textbox$")
//
//	public void I_enter_some_number_no_into_the_enter_b_textbox(String no2) throws Throwable {
//
//		driver.findElement(By.xpath("//*[@id=\"sum2\"]")).sendKeys(no2);
//
//	}
//
//	
//
//	@And("^I click on Sum button$")
//
//	public void I_click_on_Sum_button() throws Throwable {
//
//		driver.findElement(By.xpath("//*[@id=\"gettotal\"]/button")).click();
//
//	}
//	
//	@Then("^I verify sum of (\\d+) and (\\d+) is the sum being displayed$")
//
//	public void I_verify_output_sum_is_getting_displayed_as_their_sum(int no1, int no2) throws Throwable{
//
//		int ExpectedRes = no1 + no2;
//
//		element=new WebDriverWait(driver,10).until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"displayvalue\"]")));
//
//		WebElement element1= element;
//
//		String val=element1.getAttribute("innerText");
//
//		int check1=Integer.parseInt(val);
//
//		if(ExpectedRes==check1) {
//
//			System.out.println("pass");
//		}
//		else {
//			System.out.println("Fail");
//			throw new Exception();
//		}
//		driver.close();
//	}	
//	////////////Scenario - 4
//	@And("^I click on sub tab CheckBox Demo$")
//	public void I_click_on_sub_tab_CheckBox_Demo() throws Throwable{
//
//		driver.findElement(By.xpath("//*[@id=\"navbar-brand-centered\"]/ul[1]/li[1]/ul/li[2]/a")).click();
//
//	}
//
//	@And("^I check the given CheckBox$")
//
//	public void I_check_the_given_CheckBox() throws Throwable{
//
//		driver.findElement(By.xpath("//*[@id=\"easycont\"]/div/div[2]/div[1]/div[2]/div[1]/label")).click();
//
//	}
//
//	
//	@Then("^I verify output message is getting displayed as checked$")
//	public void i_verify_output_message_is_getting_displayed_as_checked() throws Throwable {
//		//System.out.println(driver.findElement(By.id("txtAge")).getText());
//		WebDriverWait wait = new WebDriverWait(driver, 15);
//		wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("txtAge")));
//		if( driver.findElement(By.id("txtAge")).isDisplayed()){
//
//			System.out.println("Element is Visible");
//		}
//		else {
//			throw new Exception();
//		}
//		driver.close();
//	}
//	
//	////////////////Scenario - 5
//	@And("^I click on Check All button$")
//
//	public void I_click_on_Check_All_button() throws Throwable{
//
//		driver.findElement(By.xpath("//*[@id=\"check1\"]")).click();
//
//	}
//	@Then("^I verify the button is check all$")
//
//	public void I_verify_the_button_is_check_all() throws Throwable{
//
//		String ExpectedRes = "Uncheck All";
//
//		String Actual = driver.findElement(By.xpath("//*[@id=\"check1\"]")).getAttribute("value");
//
//		Assert.assertEquals(ExpectedRes, Actual); 
//
//		
//
//	}
//	
//
//
//	@And("^I click the Uncheck All button$")
//
//	public void I_click_the_Uncheck_All_button() throws Throwable{
//
//		driver.findElement(By.xpath("//*[@id=\"check1\"]")).click();
//
//	}
//
//	@And("^I verify the button is Uncheck all$")
//
//	public void I_verify_the_button_is_Uncheck_all() throws Throwable{
//
//		String ExpectedRes = "Check All";
//
//		String Actual = driver.findElement(By.xpath("//*[@id=\"check1\"]")).getAttribute("value");
//
//		Assert.assertEquals(ExpectedRes, Actual); 
//		driver.close();
//	}
//   
//	//////Scenario -7 
//	@Then("^I check one of the mradiobuttons and verify$")
//
//	public void I_check_one_of_the_mradiobuttons_and_verify() throws Throwable{
//
//		List<WebElement> a = driver.findElements(By.xpath("//input[contains(@name,'gender')]"));
//
//		int x=a.size();
//
//		List<WebElement> b = driver.findElements(By.xpath("//input[contains(@name,'ageGroup')]"));
//
//		int y=b.size();
//
//		for(int i=0; i<x;i++) {
//
//			WebElement gender= driver.findElements(By.xpath("//input[contains(@name,'optradio')]")).get(i);
//
//        	String ExpectedG = gender.getText();
//
//			driver.findElements(By.xpath("//input[contains(@name,'gender')]")).get(i).click();
//
//			for(int j=0;j<y;j++) {
//
//				WebElement age = driver.findElements(By.xpath("//input[contains(@name,'optradio')]")).get(i);
//
//	        	String ExpectedA = age.getText();
//
//				driver.findElements(By.xpath("//input[contains(@name,'ageGroup')]")).get(j).click();
//
//				driver.findElement(By.xpath("//*[@id=\"easycont\"]/div/div[2]/div[2]/div[2]/button")).click();
//
//	            WebElement element= driver.findElement(By.xpath("//*[@id=\"easycont\"]/div/div[2]/div[2]/div[2]/p[2]"));  
//
//	    		String val=element.getAttribute("innerText");
//
//	    		Boolean bol1=val.contains(ExpectedG);
//	    		Boolean tr=true;
//	    		Assert.assertEquals(bol1, tr); 
//
//	    		Boolean bol2=val.contains(ExpectedA);
//
//	    		Assert.assertEquals(bol2, tr); 
//
//			}
//
//		}
//		driver.close();
//
//	}
//	////////////Scenario - 8
//	@And("^I click on Select Dropdown list$")
//
//	public void I_click_on_Select_Dropdown_list() throws Throwable{
//
//		driver.findElement(By.xpath("//*[@id=\"navbar-brand-centered\"]/ul[1]/li[1]/ul/li[4]/a")).click();
//
//	}
//
//	
//
//	@Then("^I click on options of dropdown and verify$")
//
//	public void I_click_on_options_of_dropdown_and_verify() throws Throwable{
//
//		Select days = new Select(driver.findElement(By.id("select-demo")));
//
//		List<WebElement> listOptionDropdown = days.getOptions();
//
//		int dt = listOptionDropdown.size();
//
//		for(int i = 0; i<dt ;i++) {
//
//			Select day = new Select(driver.findElement(By.id("select-demo")));
//	
//			day.selectByIndex(i);
//	
//			String s = day.getFirstSelectedOption().getText();
//	
//	        WebElement element1= driver.findElement(By.xpath("//*[@id=\"easycont\"]/div/div[2]/div[1]/div[2]/p[2]"));  
//	
//			String val1= element1.getAttribute("innerText"); 
//	
//			if(val1.contains(s) && s!="Please select")
//	
//			{
//	
//				System.out.println("matched");
//	
//			}
//
//		}
//		driver.close();
//	}
//	
//


}
