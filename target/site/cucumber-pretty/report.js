$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 3,
  "name": "DarkSky Register Page Feature",
  "description": "",
  "id": "darksky-register-page-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.before({
  "duration": 3263013444,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on the darksky Register page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSD.IamLoginPage()"
});
formatter.result({
  "duration": 186105758,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Verify invalid login for user",
  "description": "",
  "id": "darksky-register-page-feature;verify-invalid-login-for-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@loginPage"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I enter abc@gmail.com into username text fields on login page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter password1 into password text fields on login page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify error message “password and username does not match”",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "abc@gmail.com",
      "offset": 8
    },
    {
      "val": "username",
      "offset": 27
    }
  ],
  "location": "LoginPageSD.enterUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 122750491,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password1",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 23
    }
  ],
  "location": "LoginPageSD.enterUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 61781672,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSD.clickOnLoginButton()"
});
formatter.result({
  "duration": 201322853,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSD.verifyErrorMessage()"
});
formatter.result({
  "duration": 37926500,
  "status": "passed"
});
formatter.after({
  "duration": 878642,
  "status": "passed"
});
});