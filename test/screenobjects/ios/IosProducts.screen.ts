import "reflect-metadata";
import { injectable } from "inversify";
import { Product } from "../../abstract classes/Product";
import { productSymbol } from "../../../containers/product/product.symbol";

@injectable()
export default class IosProductScreen extends Product {
  //To click on filter option
  get filterMenu() {
    const filters =
      '**/XCUIElementTypeOther[`name == "test-Modal Selector Button"`]/XCUIElementTypeOther/XCUIElementTypeOther';
    return $(`-ios class chain:${filters}`);
  }

  //To select name A to Z sort option
  get nameA2Z() {
    return $(`-ios predicate string:${'label == "Name (A to Z)"'}`);
  }

  //To select name Z to A sort option
  get nameZ2A() {
    return $(`-ios predicate string:${'label == "Name (Z to A)"'}`);
  }

  //To select price Low to High Option
  get priceL2H() {
    return $(`-ios predicate string:${'label == "Price (low to high)"'}`);
  }

  //To select price High to Low option
  get priceH2L() {
    return $(
      `-ios predicate string:${'label == "Horizontal scroll bar, 1 page"'}`
    );
  }

  //To cancel the filer option
  get cancelBTN() {
    return $(
      `-ios class chain:${'**/XCUIElementTypeOther[`label == "Cancel"`][2]'}`
    );
  }

  get productText() {
    const productText = '**/XCUIElementTypeStaticText[`label == "PRODUCTS"`]';
    return $(`-ios class chain:${productText}`);
  }
  //Helper fxn
  //Help done : filters by name from A to Z
  //Arguments : void
  //Return value : void
  async filterByNameA2Z(): Promise<void> {
    await this.filterMenu.click();
    await this.nameA2Z.click();
  }

  //Helper fxn
  //Help done : filters by name from Z to A
  //Arguments : void
  //Return value : void
  async filterByNameZ2A(): Promise<void> {
    await this.filterMenu.click();
    await this.nameZ2A.click();
  }

  //Helper fxn
  //Help done : filters by price from Low to High
  //Arguments : void
  //Return value : void
  async filterByPriceL2H(): Promise<void> {
    await this.filterMenu.click();
    await this.priceL2H.click();
  }

  //Helper fxn
  //Help done : filters by price from High to Low
  //Arguments : void
  //Return value : void
  async filterByPriceH2L(): Promise<void> {
    await this.filterMenu.click();
    await this.priceH2L.click();
  }

  //Helper fxn
  //Help done : cancels the filter option
  //Arguments : void
  //Return value : void
  async filterCancel(): Promise<void> {
    await this.filterMenu.click();
    await this.cancelBTN.click();
  }

  //Helper fxn
  //Help done : goes to cart screen
  //Arguments : void
  //Return value : void
  async go2Cart(): Promise<void> {
    await (
      await $(
        `-ios class chain:${'**/XCUIElementTypeOther[`name == "test-Cart"`]/XCUIElementTypeOther'}`
      )
    ).click();
  }

  //Helper fxn
  //Help done : Changes the view style of products
  //Arguments : void
  //Return value : void
  async changeGridView(): Promise<void> {
    await $(`-ios predicate string:${'name == "test-Toggle"'}`).click();
  }

  async scrollToEnd(): Promise<void> {
    await driver.execute("mobile: scroll", { direction: "down" });
  }
  async scrollToBegin(): Promise<void> {
    await driver.execute("mobile: scroll", { direction: "down" });
  }
  async scrollIntoText(searchElement: string): Promise<void> {
    // const productName = await $(
    //   `-ios predicate string:${`label == "${searchElement}"`}`
    // // );
    // const
    // await driver.execute("mobile: scroll", {
    //   predicateString: `label == "${searchElement}"`,
    // });
  }
  async clickOnProduct(productName: string): Promise<void> {
    await $(`-ios predicate string:${`label == "${productName}"`}`).click();
  }
  async back2Products(): Promise<void> {
    await $(`-ios predicate string:${`label == "BACK TO PRODUCTS" `}`).click();
  }
  async add2Cart(): Promise<void> {
    await $(`-ios predicate string:${`label == "ADD TO CART"`}`).click();
  }
}

// export default new IosProductScreen();
