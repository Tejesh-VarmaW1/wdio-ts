//@ts-ignore
import IosLoginScreen from "../../screenobjects/ios/IosLogin.screen.ts";
//@ts-ignore
import IosProductScreen from "../../screenobjects/ios/IosProducts.screen.ts";
describe("TS test", () => {
  it("IOS Login test", async () => {
    await IosLoginScreen.performLogin()
    await IosLoginScreen.validateLogin()
  });
});
