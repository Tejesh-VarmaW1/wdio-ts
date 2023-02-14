//@ts-ignore
import { config } from "./wdio.conf.ts";
require("dotenv").config();

config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY;
(config.specs = ["C:/Cigna/wdio-ts/test/specs/inversifySpecs/product.spec.ts"]),
  (config.capabilities = [
    {
      platformName: "ios",
      platformVersion: "15.0",
      deviceName: "iPhone 13 Mini",
      automationName: "XCUITest",
      app: "bs://f5eedb5a855870ca02bfa47dd89da9644d7f25e8",
    },
  ]);

exports.config = config;
