//@ts-ignore
import IosProductsScreen from "./IosProducts.screen.ts";

class IosLoginScreen {
  get usernameField() {
    const usernameArea =
      '**/XCUIElementTypeTextField[`name == "test-Username"`]';
    return $(`-ios class chain:${usernameArea}`);
  }

  get passwordField() {
    const passwordArea = 'name == "test-Password"';
    return $(`-ios predicate string:${passwordArea}`);
  }

  get loginBTN() {
    return $("~test-LOGIN");
  }

  get errorMsg() {
    const errorText = `label == "Username and password do not match any user in this service."`;
    return $(`-ios predicate string:${errorText}`);
  }
  async performLogin(userName: string, pass: string) {
    await this.usernameField.setValue(`${userName}`);
    await this.passwordField.setValue(`${pass}`);
    await this.loginBTN.click();
  }
  async validateLogin(): Promise<void> {
    await expect(IosProductsScreen.productText).toBeDisplayed();
    console.log("successfully validated");
  }

  async validateInvalidLogin(): Promise<void> {
    await expect(this.errorMsg).toBeDisplayed();
    console.log("Login failed");
  }
}

export default new IosLoginScreen();
