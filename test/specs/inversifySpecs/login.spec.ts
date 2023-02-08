import { loginContainer } from "../../../containers/login/login.inversify.conf";
import { loginSymbol } from "../../../containers/login/login.symbol";
import { Login } from "../../abstract classes/Login";

const login = loginContainer.get<Login>(loginSymbol.Login);

describe("Inversify test ", () => {
  it("Sauce demo validate invalid access", async () => {
    await login.performLogin("standard", "secret_sauce");

    await login.validateLogin();
  });
});
