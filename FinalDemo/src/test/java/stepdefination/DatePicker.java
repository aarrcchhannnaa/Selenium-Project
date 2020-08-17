package stepdefination;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.BeforeMethod;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import definedriver.drivers;
import junit.framework.Assert;
public class DatePicker extends drivers{
	////////Scenario - 1
	int count =1;
	WebDriver driver=null;
	///////////Scenario - 1
	@Given("^I open selenium easy website$")
	public void i_open_selenium_easy_website() throws Throwable {
		driver=setDriver();
	    System.out.println((count++)+". I launch selenium easy website");
	}	
	@When("^I click on a \"(.*?)\"$")
	public void i_click_on_a(String arg1) throws Throwable {
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


	@And("^I click on Date pickers Tab$")
	public void i_click_on_date_pickers_tab() {
		
		driver.findElement(By.xpath("//*[@id=\"navbar-brand-centered\"]/ul[1]/li[2]/a")).click();

	}

	@Then("^I verify two drop-down values are getting displayed$")
	public void i_verify_two_drop_down_values_are_getting_displayed() {

		//Select selectDropdown = new Select(driver.findElement(By.className("dropdown-toggle")));

		List<WebElement> listOptionDropdown = driver.findElements(By.xpath("//*[@id=\"navbar-brand-centered\"]/ul[1]/li[2]/ul/li"));

		int dropdownCount = listOptionDropdown.size();
		System.out.println(dropdownCount);
		if(dropdownCount==2) {
			System.out.println("========test scenario passed");
		}
		else {
			System.out.println("test scenario failed");
		}
		driver.close();
	}
	///////Scenario - 2
	@And("^I click on Bootstrap Date Picker tab$")
	public void i_click_on_bootstrap_date_picker_tab() {
		driver.findElement(By.xpath("//*[@id=\"navbar-brand-centered\"]/ul[1]/li[2]/ul/li[1]/a")).click();
	}

	@Then("^I verify if the bootstrap Date Picker Tab page is displayed$")
	public void i_verify_if_the_bootstrap_date_picker_tab_page_is_displayed() {
		System.out.println(driver.getTitle());
		String title=driver.getTitle();
		String actual="Selenium Easy - Best Demo website for Bootstrap Date picker";
		Assert.assertEquals(title, actual);
		System.out.println("passed");
		driver.close();
	}
	/////////Scenario -3
	@When("^I click on JQuery Date Picker tab$")
	public void i_click_on_j_query_date_picker_tab() throws InterruptedException {
		Thread.sleep(5000);
		driver.findElement(By.xpath("//*[@id=\"navbar-brand-centered\"]/ul[1]/li[2]/ul/li[2]/a")).click();
	}

	@Then("^I verify if the  JQuery Date Picker page is displayed$")
	public void i_verify_if_the_j_query_date_picker_page_is_displayed() throws InterruptedException {
		Thread.sleep(5000);
		System.out.println(driver.getTitle());
		String title1=driver.getTitle();
		String actual1="Selenium Easy - JQuery Date picker demo";

		org.junit.Assert.assertEquals(title1, actual1);
		System.out.println("passed");
		driver.close();
	}
	/////////Scenario -4
	@When("^I click on Calendar button$")
	public void i_click_on_calendar_button() throws InterruptedException {
		Thread.sleep(10000);
		driver.findElement(By.xpath("//*[@id=\"sandbox-container1\"]/div/span/i")).click();
	}

	@Then("^I verify if calendar is displayed$")
	public void i_verify_if_calendar_is_displayed() {
		if(driver.findElement(By.xpath("/html/body/div[3]/div[1]/table"))!=null) {
			System.out.println("test case passed");
		}
		else {
			System.out.println("test case failed");
		}
		driver.close();

	}
	//////////Scenario - 5
	@When("^I select some date from the list$")
	public void i_select_some_date_from_the_list() {
		driver.findElement(By.xpath("/html/body/div[3]/div[1]/table/tbody/tr[3]/td[3]")).click();
	}

	@Then("^I verify if date is displayed in the text box$")
	public void i_verify_if_date_is_displayed_in_the_text_box() throws InterruptedException {
		Thread.sleep(10000);
		WebElement w2=driver.findElement(By.xpath("//*[@id=\"sandbox-container1\"]/div/input"));
		System.out.println(w2.getAttribute("value"));
		driver.close(); 
	}
	//////////Scenario - 6
	@When("^I select clear tab$")
	public void i_select_clear_tab() {
		driver.findElement(By.xpath("/html/body/div[3]/div[1]/table/tfoot/tr[2]/th")).click();
	}

	@Then("^I verify if date textbox is empty$")
	public void i_verify_if_date_textbox_is_empty() throws Exception {
		Thread.sleep(5000);
		WebElement w1=driver.findElement(By.xpath("//*[@id=\"sandbox-container1\"]/div/input"));
		if (w1.getAttribute("value").isEmpty()) {
			System.out.println((count++)+"I verify if date textbox is empty");
		}
		else {
			System.out.println((count++)+"I verify if date textbox is empty");
			throw new Exception();
		}
		driver.close();
	}
	
	
	//////////Scenario - 7

	@When("^I click on From text field$")
	public void i_click_on_from_text_field() {

		driver.findElement(By.xpath("//*[@id=\"from\"]")).click();
	}

	@Then("^I verify that the calendar is displayed$")
	public void i_verify_that_the_calendar_is_displayed() {
		if(driver.findElement(By.xpath("//*[@id=\"ui-datepicker-div\"]/table"))!=null) {
			System.out.println((count++)+"I verify that the calendar is displayed");
		}
		else {
			System.out.println((count++)+"I verify that the calendar is NOT displayed");
		}
		driver.close();
	}
}
