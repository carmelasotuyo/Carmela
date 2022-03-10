import BasePage from './base.page';

class BusquedaPage extends BasePage {

   //Elementos Web
   get resultado(){ return $('#center_column h5 a') }

   //-------------------------------------------------------------------------------------------------------//
 
   /**
    * Click en el resultado de la búsqueda
    */
   async ingresarAlResultado() {
        addStep(`Ingresar al resultado de búsqueda`);
        await super.clickearElemento(this.resultado);
   }

   /**
    * Obtener texto del resultado de la búsqueda
    */
   async obtenerNombreResultado() {
        addStep(`Obtener nombre del resultado de búsqueda`);
        return await this.resultado.getText();
   }

}

export default new BusquedaPage();