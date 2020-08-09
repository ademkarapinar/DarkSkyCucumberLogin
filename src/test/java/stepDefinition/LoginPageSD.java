package stepDefinition;

import Utils.BasePage;
import cucumber.api.java.cs.A;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;
import runnerTest.webPage.LoginPage;

public class LoginPageSD {
    private LoginPage loginPage = new LoginPage();

    @Given("^I am on the darksky Register page$")
    public void IamLoginPage(){
        Assert.assertEquals(BasePage.get().getCurrentUrl(), "https://darksky.net/dev/login");
    }
    @When("^I enter (.+) into (username|password) text fields on login page$")
    public void enterUsernameAndPassword(String value, String textField){
        switch (textField){
            case "username":
                loginPage.enterEmail(value);
                break;
            case "password":
                loginPage.enterPassword(value);
        }
    }
    @And("^I click on login button$")
    public void clickOnLoginButton(){
        loginPage.clickOnLogButton();
    }
    @Then("^I verify error message “password and username does not match”$")
    public void verifyErrorMessage(){
        Assert.assertEquals(loginPage.getErrorMessage(), "Username and password do not match");
    }
}
