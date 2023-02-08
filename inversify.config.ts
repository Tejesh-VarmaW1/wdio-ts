import { Container } from "inversify";
import { TYPES } from "./types";
import AndroidLoginScreen from "./test/screenobjects/android/AndroidLogin.screen";
import { Login } from "./test/abstract classes/Login";

const myContainer = new Container();
myContainer.bind<Login>(TYPES.loginPage).to(AndroidLoginScreen);

export { myContainer };
