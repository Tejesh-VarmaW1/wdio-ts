import "reflect-metadata";
import { Cart } from "../../abstract classes/Cart";
import { cartContainer } from "../../../containers/cart/cart.inversify";
import AndroidCartScreen from "../../screenobjects/android/AndroidCart.screen";
import { cartSymbol } from "../../../containers/cart/cart.symbol";

const cart = cartContainer.get<Cart>(cartSymbol.Cart);

describe("Inversify test"),
  () => {
    it("");
  };
