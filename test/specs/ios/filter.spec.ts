//@ts-ignore
import IosLoginScreen from "../../screenobjects/ios/IosLogin.screen.ts";
//@ts-ignore
import IosProductsScreen from "../../screenobjects/ios/IosProducts.screen.ts";

describe("TS test", () => {
  before(async () => {
    await IosLoginScreen.performLogin();
  });
  it("Filter by : ", async () => {
    await IosProductsScreen.filterByNameAtoZ();
    await driver.pause(2000);

    await IosProductsScreen.filterByNameZtoA();
    await driver.pause(2000);

    await IosProductsScreen.filterByPriceHightoLow();
    await driver.pause(2000);

    await IosProductsScreen.filterByPriceLowtoHigh();
    await driver.pause(2000);

    await IosProductsScreen.filterCancel();
    await driver.pause(2000);

    await IosProductsScreen.changeGridView();
    await driver.pause(2000);


    await IosProductsScreen.goToCart();
    await driver.pause(2000);
  });
});
