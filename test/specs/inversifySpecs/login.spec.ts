import { loginContainer } from "../../../containers/login/login.inversify.conf";
import { loginSymbol } from "../../../containers/login/login.symbol";
import { Login } from "../../abstract classes/Login";
import { productContainer } from "../../../containers/product/product.inversify.conf";
import { productSymbol } from "../../../containers/product/product.symbol";
import { Product } from "../../abstract classes/Product";
import utilities from "../../../utilities.json";

const login = loginContainer.get<Login>(loginSymbol.Login);
const product = productContainer.get<Product>(productSymbol.Product);
describe("Inversify test ", () => {
  it("Sauce demo validate invalid access", async () => {
    await login.performLogin(utilities.username, utilities.password);

    await product.scrollIntoText(utilities.productScroll);
  });
});
