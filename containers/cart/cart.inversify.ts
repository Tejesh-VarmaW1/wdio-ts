import "reflect-metadata";
import { Container } from "inversify";
import AndroidCartScreen from "../../test/screenobjects/android/AndroidCart.screen";
import { cartSymbol } from "./cart.symbol";
import { Cart } from "../../test/abstract classes/Cart";
import IosCartScreen from "../../test/screenobjects/ios/IosCart.screen";

export const cartContainer = new Container();

cartContainer
  .bind<Cart>(cartSymbol.Cart)
  .to(driver.isAndroid ? AndroidCartScreen : IosCartScreen);
