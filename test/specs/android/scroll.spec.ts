//@ts-ignore
import AndroidLoginScreen from "../../screenobjects/android/AndroidLogin.screen.ts"
//@ts-ignore
import AndroidProductsScreen from "../../screenobjects/android/AndroidProducts.screen.ts"
describe("TS test",()=>{

    before(async()=>{
        await AndroidLoginScreen.performLogin()
    })

    it("Scroll to end and begin",async()=>{

        await AndroidProductsScreen.scrollToEnd()
        await driver.pause(2000)    

        await AndroidProductsScreen.scrollToBegin()
        await driver.pause(2000)
       
    })

    it("Scroll into text",async()=>{
        await AndroidProductsScreen.scrollIntoText("Sauce Labs Onesie").click()
        await driver.pause(2000)
    })
})