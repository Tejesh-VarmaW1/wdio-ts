//@ts-ignore
import AndroidLoginScreen from "../../screenobjects/android/AndroidLogin.screen.ts";

import { myContainer } from "../../../inversify.config";

import { TYPES } from "../../../types";

import loginPage from "../../pageobjects/login.page";
// import { loginPage } from "../../../interfaces.js";

describe("TS test", () => {
  const test = myContainer.get<loginPage>(TYPES.loginPage)
  
  it("Sauce demo login", async () => {
    
    await 
    // await AndroidLoginScreen.validateLogin()
  });
});
