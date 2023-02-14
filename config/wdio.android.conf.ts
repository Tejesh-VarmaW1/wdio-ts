//@ts-ignore
import { config } from "./wdio.conf.ts";
require("dotenv").config();

config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY;

(config.specs = ["C:/Cigna/wdio-ts/test/specs/inversifySpecs/product.spec.ts"]),
  (config.capabilities = [
    {
      platformName: "Android",
      "appium:platformVersion": "12.0",
      "appium:deviceName": "Samsung Galaxy S22 Ultra",
      "appium:automationName": "UIAutomator2",
      "appium:app": "bs://9d285332cc5538647db53773150699d5b2f1a47b",
    },
  ]);

exports.config = config;
