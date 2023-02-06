class ProductScreen {

    //To click on filter option
    get filterMenu() {
      return $(
        '//android.view.ViewGroup[@content-desc="test-Modal Selector Button"]/android.view.ViewGroup/android.view.ViewGroup/android.widget.ImageView'
      );
    }
  
    //To select name A to Z sort option
    get nameA2Z() {
      return $(
        '//android.widget.ScrollView[@content-desc="Selector container"]/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView'
      );
    }
  
    //To select name Z to A sort option
    get nameZ2A() {
      return $(
        '//android.widget.ScrollView[@content-desc="Selector container"]/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.widget.TextView'
      );
    }
  
    //To select price High to Low option
    get priceH2L() {
      return $(
        '//android.widget.ScrollView[@content-desc="Selector container"]/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup/android.widget.TextView'
      );
    }
  
    //To select price Low to High Option
    get priceL2H() {
      return $(
        '//android.widget.ScrollView[@content-desc="Selector container"]/android.view.ViewGroup/android.view.ViewGroup[5]/android.view.ViewGroup/android.widget.TextView'
      );
    }
  
    //To cancel the filer option
    get cancelBTN(){
      return $('//*[@text="Cancel"]')
    }
  
    //To get PRODUCTS title. Used to verify whether products page is loaded or not
    get productsText(){
      return $('//*[@text=""PRODUCTS]')
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
      await this.priceH2L.click();
    }
  
    //Helper fxn 
    //Help done : filters by price from High to Low
    //Arguments : void
    //Return value : void 
    async filterByPriceH2L(): Promise<void> {
      await this.filterMenu.click();
      await this.priceL2H.click();
    }
    
    //Helper fxn 
    //Help done : cancels the filter option
    //Arguments : void
    //Return value : void
    async filterCancel():Promise<void> {
      await this.filterMenu.click()
      await this.cancelBTN.click()
    }
  
    //Helper fxn 
    //Help done : scrolls to end of screen
    //Arguments : void
    //Return value : void
   async scrollToEnd():Promise<void>{
      await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')
    }
  
    //Helper fxn 
    //Help done : scrolls to begin of screen
    //Arguments : void
    //Return value : void
    async scrollToBegin():Promise<void>{
      await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToBeginning(1,5)')
    }
  
    //Helper fxn 
    //Help done : scrolls to certain element. Mention the exact text. Partial text not allowed
    //Arguments : string
    //Return value : void
    async scrollIntoText(searchElement:string):Promise<void>{
      await $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("${searchElement}")`)
    }
  
    //Helper fxn 
    //Help done : clicks on product. Product name should be exact. Partial txt not allowed
    //Arguments : void
    //Return value : void
    async clickOnProduct(productName:string):Promise<void>{
      await $(`//*[@text="${productName}"]`).click()
    }
  }
  
  export default new ProductScreen();
  