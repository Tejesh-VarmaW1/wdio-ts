import "reflect-metadata";
import { Login } from "../../abstract classes/Login";
import { loginSymbol } from "../../../containers/login/login.symbol";
import { loginContainer } from "../../../containers/login/login.inversify.conf";
import { Product } from "../../abstract classes/Product";
import { productSymbol } from "../../../containers/product/product.symbol";
import { productContainer } from "../../../containers/product/product.inversify.conf";
import { Cart } from "../../abstract classes/Cart";
import { cartSymbol } from "../../../containers/cart/cart.symbol";
import { cartContainer } from "../../../containers/cart/cart.inversify";

const login = loginContainer.get<Login>(loginSymbol.Login);
const product = productContainer.get<Product>(productSymbol.Product);
const cart = cartContainer.get<Cart>(cartSymbol.Cart);

describe("Inversify test", async () => {
  before(async () => {
    await login.performLogin("standard_user", "secret_sauce");
  });
  it("Cart", async () => {
    await product.filterByNameA2Z();
    await product.clickOnProduct("Sauce Labs Backpack");
    await product.back2Products();
    await product.clickOnProduct("Sauce Labs Bike Light");
    await product.scrollToEnd();
    await product.add2Cart();
    await product.go2Cart();
    await cart.checkout();
  });
});
