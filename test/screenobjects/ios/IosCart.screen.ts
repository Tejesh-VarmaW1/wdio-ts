import "reflect-metadata";
import { injectable } from "inversify";
import { cartSymbol } from "../../../containers/cart/cart.symbol";
import { Cart } from "../../abstract classes/Cart";
@injectable()
export default class IosCartScreen extends Cart {
  async checkout(): Promise<void> {
    await $(`-ios predicate string:${`label == "CHECKOUT"`}`).click();
  }
  async continueShopping(): Promise<void> {
    await $(`-ios predicate string:${`label == "CONTINUE SHOPPING"`}`).click();
  }
}
