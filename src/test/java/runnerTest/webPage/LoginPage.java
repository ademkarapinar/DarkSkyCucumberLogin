package runnerTest.webPage;

import org.openqa.selenium.By;

public class LoginPage extends ElementUtil{
    private By emailAddress = By.id("email");
    private By pass = By.id("password");
    private By logBtn = By.xpath("//button[text()='Log in']");
    private By errorMessage = By.xpath(" //div[@class='error']");

    public void enterEmail(String email){
        sendValue(emailAddress, email);
    }
    public void enterPassword(String password){
        sendValue(pass, password);
    }
    public void clickOnLogButton(){
        clickOn(logBtn);
    }
    public String getErrorMessage(){
        return getTextFromElement(errorMessage);
    }

}
