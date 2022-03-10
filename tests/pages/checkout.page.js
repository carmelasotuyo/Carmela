import BasePage from './base.page';

class CheckoutPage extends BasePage {

     //WebElements
     get heading() { return $('h1') }
     get botonContinuar() { return $('//div[@id="center_column"]//button[@type="submit"]') }
     get labelTerms() { return $('//label[@for="cgv"]') }
     get checkedTerms() { return $('.checked #cgv') }
     metodoPago(selector) { return $(`${selector}`) }

     //-------------------------------------------------------------------------------------------------------//

     /**
      * Verificar el heading del paso actual en que se encuentra del checkout
      * @param {String} headingEsperado 
      */
     async verificarHeadingDePaso(headingEsperado) {
          addStep(`Verificar que el heading del paso coincida con el esperado`);
          await this.heading.waitForDisplayed();
          await expect(await this.heading.getText()).to.include.string(headingEsperado);
     }

     /**
      * Avanzar al siguiente paso del checkout
      */
     async avanzar() {
          addStep(`Avanzar al siguiente paso del checkout`);
          await super.clickearElemento(this.botonContinuar);
     }

     /**
      * Aceptar los términos y condiciones de compra
      */
     async aceptarTerms() {
          addStep(`Aceptar los términos y condiciones`);
          await super.clickearElemento(this.labelTerms);
          await (await this.checkedTerms).waitForExist();
     }

     /**
      * Elegir método de pago
      * @param {String} metodo 
      */
      async elegirMetodoPago(metodo) {
          addStep(`Elegir método de pago`);
          await super.clickearElemento(this.metodoPago(metodo));
     }
}
export default new CheckoutPage();