package stepdefination;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import definedriver.drivers;
public class InputForm extends drivers {
	WebDriver driver=null;
	WebElement element;
	int count =1;
	@Given("^I launch selenium website$")
	public void i_launch_selenium_website() throws Throwable {
		driver=setDriver();
		System.out.println((count++)+". I launch selenium easy website");
	}

	@When("^I click on the \"(.*?)\"$")
	public void i_click_on_the(String arg1) throws Throwable {
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

	@And("^I click on Input Forms Tab$")
	
	public void I_click_on_Input_Forms_Tab() throws Throwable{
		driver.findElement(By.xpath("//*['@id=navbar-brand-centere']/ul[1]/li[1]/a")).click();
		System.out.println((count++)+". I click on Input Forms Tab");
	}

	@Then("^I verify seven dropdown values are getting displayed$")
	public void I_verify_seven_dropdown_values_are_getting_displayed() throws Throwable{
		List<WebElement> seven = driver.findElements(By.xpath("//ul[contains(@class, 'dropdown-menu')]"));
		int s = seven.size();	
		if(s==7)
		{
			System.out.println((count++)+". I verify seven dropdown values are getting displayed");
		}
		else
		{
			throw new Exception();
		}
		driver.close();
	}
		
	///////////Scenario - 2
	@And("^I click on sub tab Simple form demo$")

	public void I_click_on_sub_tab_Simple_form_demo() throws Throwable{
		driver.findElement(By.xpath("//*[@id=\"navbar-brand-centered\"]/ul[1]/li[1]/ul/li[1]/a")).click();
		System.out.println((count++)+". I click on sub tab Simple form demo");
	}


	@And("^I enter some message (.*) into enter message textbox$")
	public void I_enter_some_message_message_into_enter_message_textbox(String message) throws Throwable{
		element=new WebDriverWait(driver,20).until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"user-message\"]")));
		element.sendKeys(message);
		System.out.println((count++)+". I enter some message "+message+" into enter message textbox");

	}

	

	@And("^I click on show button$")
	public void I_click_on_show_button() throws Throwable{
		driver.findElement(By.xpath("//*[@id=\"get-input\"]/button")).click();
		System.out.println((count++)+". I click on show button");

	}

	

	@Then("^I verify (.*) is getting displayed correctly$")
	public void I_verify_output_message_is_getting_displayed_as_the_message(String message) {
		element=new WebDriverWait(driver,20).until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"display\"]")));
		WebElement element1= element;
		String val=element1.getAttribute("innerText");
		if(val.equals(message))
			System.out.println((count++)+". I verify "+message+" is getting displayed correctly");
		else
			System.out.println((count++)+". I verify "+message+" is getting NOT displayed correctly");
	
		driver.close();
	}

	/////////Scenario - 3
	
	@And("^I enter some number (\\d+) into the enter a textbox$")
	public void I_enter_some_number_no_into_the_enter_a_textbox(String no1) throws Throwable {
		driver.findElement(By.xpath("//*[@id=\"sum1\"]")).sendKeys(no1);
		System.out.println((count++)+". I enter some number "+no1+" into the enter a textbox");

	}
	
	@And("^I enter some number (\\d+) into the enter b textbox$")
	public void I_enter_some_number_no_into_the_enter_b_textbox(String no2) throws Throwable {
		driver.findElement(By.xpath("//*[@id=\"sum2\"]")).sendKeys(no2);
		System.out.println((count++)+". I enter some number "+no2+" into the enter a textbox");
		
	}
	
	@And("^I click on Sum button$")
	public void I_click_on_Sum_button() throws Throwable {
		driver.findElement(By.xpath("//*[@id=\"gettotal\"]/button")).click();
		System.out.println((count++)+". I click on Sum button");
	}
	
	@Then("^I verify sum of (\\d+) and (\\d+) is the sum being displayed$")
	public void I_verify_output_sum_is_getting_displayed_as_their_sum(int no1, int no2) throws Throwable{
		int ExpectedRes = no1 + no2;
		element=new WebDriverWait(driver,10).until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"displayvalue\"]")));
		WebElement element1= element;
		String val=element1.getAttribute("innerText");
		int check1=Integer.parseInt(val);
		if(ExpectedRes==check1) {
			System.out.println((count++)+". I verify sum of "+no1+" and "+no2+" is the sum being displayed");
		}
		else {
			System.out.println((count++)+". I verify sum of "+no1+" and "+no2+" is the sum being displayed is NOT CORRECT");
			throw new Exception();
		}
		driver.close();
	}	
	////////////Scenario - 4
	@And("^I click on sub tab CheckBox Demo$")
	public void I_click_on_sub_tab_CheckBox_Demo() throws Throwable{
		driver.findElement(By.xpath("//*[@id=\"navbar-brand-centered\"]/ul[1]/li[1]/ul/li[2]/a")).click();
		System.out.println((count++)+". I click on sub tab CheckBox Demo");
	}

	@And("^I check the given CheckBox$")
	public void I_check_the_given_CheckBox() throws Throwable{
		driver.findElement(By.xpath("//*[@id=\"easycont\"]/div/div[2]/div[1]/div[2]/div[1]/label")).click();
		System.out.println((count++)+". I check the given CheckBox");

	}
	
	@Then("^I verify output message is getting displayed as checked$")
	public void i_verify_output_message_is_getting_displayed_as_checked() throws Throwable {
		//System.out.println(driver.findElement(By.id("txtAge")).getText());
		WebDriverWait wait = new WebDriverWait(driver, 15);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("txtAge")));
		if( driver.findElement(By.id("txtAge")).isDisplayed()){

			System.out.println((count++)+". I verify output message is getting displayed as checked");
		}
		else {
			System.out.println((count++)+". I verify output message is NOT getting displayed as checked");
			throw new Exception();
		}
		driver.close();
	}
	
	////////////////Scenario - 5
	@And("^I click on Check All button$")
	public void I_click_on_Check_All_button() throws Throwable{
		driver.findElement(By.xpath("//*[@id=\"check1\"]")).click();
	}
	@Then("^I verify the button is check all$")
	public void I_verify_the_button_is_check_all() throws Throwable{

		String ExpectedRes = "Uncheck All";
		String Actual = driver.findElement(By.xpath("//*[@id=\"check1\"]")).getAttribute("value");
		if(ExpectedRes.equals(Actual))
			System.out.println((count++)+". I verify the button is check all");
		else
			System.out.println((count++)+". I verify the button is NOT check all");
	}
	
	@And("^I click the Uncheck All button$")
	public void I_click_the_Uncheck_All_button() throws Throwable{
		driver.findElement(By.xpath("//*[@id=\"check1\"]")).click();
		System.out.println((count++)+". I click the Uncheck All button");
	}

	@And("^I verify the button is Uncheck all$")
	public void I_verify_the_button_is_Uncheck_all() throws Throwable{
		String ExpectedRes = "Check All";
		String Actual = driver.findElement(By.xpath("//*[@id=\"check1\"]")).getAttribute("value");
		if(ExpectedRes.equals(Actual))
			System.out.println((count++)+". I verify the button is Uncheck all");
		else
			System.out.println((count++)+". I verify the button is NOT Uncheck all");
		driver.close();
	}
   
	//////Scenario -7 
	@And("^I click on sub tab RadioButton Demo$")
	public void I_click_on_sub_tab_RadioButton_Demo() throws Throwable{
		driver.findElement(By.xpath("//*[@id=\"navbar-brand-centered\"]/ul[1]/li[1]/ul/li[3]/a")).click();
		System.out.println((count++)+". I click on sub tab RadioButton Demo");

	}
	@Then("^I check one of the mradiobuttons and verify$")
	public void I_check_one_of_the_mradiobuttons_and_verify() throws Throwable{
		List<WebElement> a = driver.findElements(By.xpath("//input[contains(@name,'gender')]"));
		int x=a.size();
		List<WebElement> b = driver.findElements(By.xpath("//input[contains(@name,'ageGroup')]"));
		int y=b.size();
		for(int i=0; i<x;i++) {

			WebElement gender= driver.findElements(By.xpath("//input[contains(@name,'optradio')]")).get(i);
        	String ExpectedG = gender.getText();
			driver.findElements(By.xpath("//input[contains(@name,'gender')]")).get(i).click();
			for(int j=0;j<y;j++) {
				WebElement age = driver.findElements(By.xpath("//input[contains(@name,'optradio')]")).get(i);
	        	String ExpectedA = age.getText();
				driver.findElements(By.xpath("//input[contains(@name,'ageGroup')]")).get(j).click();
				driver.findElement(By.xpath("//*[@id=\"easycont\"]/div/div[2]/div[2]/div[2]/button")).click();
	            WebElement element= driver.findElement(By.xpath("//*[@id=\"easycont\"]/div/div[2]/div[2]/div[2]/p[2]"));  
	    		String val=element.getAttribute("innerText");
	    		Boolean bol1=val.contains(ExpectedG);
	    		Boolean tr=true;
	    		Assert.assertEquals(bol1, tr); 
	    		Boolean bol2=val.contains(ExpectedA);
	    		Assert.assertEquals(bol2, tr); 

			}

		}
		driver.close();

	}
	////////////Scenario - 8
	@And("^I click on Select Dropdown list$")
	public void I_click_on_Select_Dropdown_list() throws Throwable{
		driver.findElement(By.xpath("//*[@id=\"navbar-brand-centered\"]/ul[1]/li[1]/ul/li[4]/a")).click();
	}

	

	@Then("^I click on options of dropdown and verify$")
	public void I_click_on_options_of_dropdown_and_verify() throws Throwable{
		Select days = new Select(driver.findElement(By.id("select-demo")));
		List<WebElement> listOptionDropdown = days.getOptions();
		int dt = listOptionDropdown.size();
		for(int i = 0; i<dt ;i++) 
		{
			Select day = new Select(driver.findElement(By.id("select-demo")));
			day.selectByIndex(i);
			String s = day.getFirstSelectedOption().getText();
	        WebElement element1= driver.findElement(By.xpath("//*[@id=\"easycont\"]/div/div[2]/div[1]/div[2]/p[2]"));  
			String val1= element1.getAttribute("innerText"); 
			if(val1.contains(s) && s!="Please select")
			{
				System.out.println("matched");
	
			}

		}
		driver.close();
	}
	


}
