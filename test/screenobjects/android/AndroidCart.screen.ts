import "reflect-metadata";
import { injectable } from "inversify";
import { cartSymbol } from "../../../containers/cart/cart.symbol";
import { Cart } from "../../abstract classes/Cart";
@injectable()
export default class AndroidCartScreen extends Cart {
  async checkout(): Promise<void> {
    await $(
      '//android.view.ViewGroup[@content-desc="test-CHECKOUT"]/android.widget.TextView'
    ).click();
  }
  async continueShopping(): Promise<void> {
    await (
      await $(
        '//android.view.ViewGroup[@content-desc="test-CONTINUE SHOPPING"]/android.widget.TextView'
      )
    ).click();
  }
}
