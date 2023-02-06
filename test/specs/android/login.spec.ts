//@ts-ignore
import AndroidLoginScreen from "../../screenobjects/android/AndroidLogin.screen.ts";
describe("TS test", () => {
  it("Sauce demo login", async () => {
    await AndroidLoginScreen.performLogin()
    await AndroidLoginScreen.validateLogin()
  });
});
