package testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		format = {"pretty", "html:target/Destination","json:target/test-report/cucumber.json"},
		features={"src/test/resources/feature"},
		glue= {"stepdefination"}
		)
public class testRunner {
	
}
