//@ts-ignore
import { config } from "./wdio.conf.ts";

config.user= "rudrarajutejeshv_K3c1Y4",
config.key= "Z3JcVKaxzsiKwzRUKJMK",

config.specs =  [
    'C:/Cigna/wdio-ts/test/specs/android/loginOps.spec.ts'
],

config.capabilites = [
    {
        "platformName": "Android",
        "appium:platformVersion": "12.0",
        "appium:deviceName": "Samsung Galaxy S22 Ultra",
        "appium:automationName": "UIAutomator2",
        "appium:app": "bs://9d285332cc5538647db53773150699d5b2f1a47b"
}]

exports.config=config