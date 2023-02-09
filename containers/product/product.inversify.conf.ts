import "reflect-metadata";
import { Container } from "inversify";
import AndroidProductsScreen from "../../test/screenobjects/android/AndroidProducts.screen";
import IosProductsScreen from "../../test/screenobjects/ios/IosProducts.screen";
import { productSymbol } from "./product.symbol";
import { Product } from "../../test/abstract classes/Product";

export const productContainer = new Container();

productContainer.bind<Product>(productSymbol.Product).to(AndroidProductsScreen);
