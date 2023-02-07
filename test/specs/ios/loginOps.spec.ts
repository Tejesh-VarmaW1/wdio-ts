import IosLoginScreen from "../../screenobjects/ios/IosLogin.screen";

import IosProductsScreen from "../../screenobjects/ios/IosProducts.screen";

describe("TS test", () => {
  it("Verifying login operations", async () => {
    await IosLoginScreen.performLogin("sandard_user", "secret_sauce");

    //await IosLoginScreen.validateInvalidLogin();

    await IosLoginScreen.validateLogin();
  });
});
