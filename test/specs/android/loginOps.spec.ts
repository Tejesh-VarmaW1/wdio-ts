import AndroidLoginScreen from "../../screenobjects/android/AndroidLogin.screen";

import AndroidProductsScreen from "../../screenobjects/android/AndroidProducts.screen";


describe("TS test",()=>{
    it("Verifying login operations",async()=>{
        await AndroidLoginScreen.performLogin("standard_user","se")

        await AndroidLoginScreen.validateInvalidLogin()
    })
})