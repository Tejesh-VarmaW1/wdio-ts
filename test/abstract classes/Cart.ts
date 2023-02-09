import "reflect-metadata";
import { injectable } from "inversify";
import { cartSymbol } from "../../containers/cart/cart.symbol";

@injectable()
export abstract class Cart {
  abstract checkout(): Promise<void>;
  abstract continueShopping(): Promise<void>;
}
