import { Container } from "inversify";
import { TYPES } from "./types";
import { loginPage } from "./interfaces";
import AndroidLoginScreen from "./test/screenobjects/android/AndroidLogin.screen";

const myContainer = new Container();
myContainer.bind<loginPage>(TYPES.loginPage).to(AndroidLoginScreen);

export { myContainer };
