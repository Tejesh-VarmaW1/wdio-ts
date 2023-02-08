import "reflect-metadata";
import { Container } from "inversify";
import AndroidLoginScreen from "../../test/screenobjects/android/AndroidLogin.screen";
import IosLoginScreen from "../../test/screenobjects/ios/IosLogin.screen";
import { Login } from "../../test/abstract classes/Login";
import { loginSymbol } from "./login.symbol";

export const loginContainer = new Container();

loginContainer.bind<Login>(loginSymbol.Login).to(AndroidLoginScreen);
