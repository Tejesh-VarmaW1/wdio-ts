import "reflect-metadata";
import { injectable } from "inversify";
import { loginSymbol } from "../../containers/login/login.symbol";

@injectable()
export abstract class Product {
  abstract filterByNameA2Z(): Promise<void>;
  abstract filterByNameZ2A(): Promise<void>;
  abstract filterByPriceL2H(): Promise<void>;
  abstract filterByPriceH2L(): Promise<void>;
  abstract filterCancel(): Promise<void>;
  abstract scrollToEnd(): Promise<void>;
  abstract scrollToBegin(): Promise<void>;
  abstract scrollIntoText(searchElement: string): Promise<void>;
  abstract clickOnProduct(productName: string): Promise<void>;
  abstract back2Products(): Promise<void>;
  abstract add2Cart(): Promise<void>;
  abstract go2Cart(): Promise<void>;
}
