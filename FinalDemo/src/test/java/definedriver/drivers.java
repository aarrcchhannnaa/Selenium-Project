package definedriver;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class drivers {
	public WebDriver driver=null;	
	public WebDriver setDriver()
	{
		System.setProperty("webdriver.chrome.driver", "../TryCucumber/drivers/chromedriver.exe");
	    driver=new ChromeDriver();
	    driver.get("https://www.seleniumeasy.com/test/basic-first-form-demo.html");
	    return driver;
	}
}
