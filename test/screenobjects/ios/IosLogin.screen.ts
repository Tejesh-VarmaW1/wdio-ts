//@ts-ignore
import IosProductsScreen from "./IosProducts.screen.ts";

class IosLoginScreen {
  get usernameField() {
    const usernameArea = '**/XCUIElementTypeTextField[`name == "test-Username"`]';
    return $(`-ios class chain:${usernameArea}`);
  }

  get passwordField() {
    const passwordArea = 'name == "test-Password"';
    return $(`-ios predicate string:${passwordArea}`);
  }

  get loginBTN() {
    return $("~test-LOGIN");
  }

  get errorMsg(){
    return $(`-ios class chain:${'**/XCUIElementTypeStaticText[`label == "Username and password do not match any user in this service."`]'}`)
  }
  async performLogin() {
    await this.usernameField.setValue("standard_user");
    await this.passwordField.setValue("secret_sauce");
    await this.loginBTN.click();
  }
  async validateLogin():Promise<void>{
    await IosProductsScreen.productText.isDisplayed()
    console.log("successfully validated")
  }

  async validateInvalidLogin():Promise<void>{
    await (await this.errorMsg).isDisplayed()
    console.log("Login failed") 
  }
}

export default new IosLoginScreen();
