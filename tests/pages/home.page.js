import BasePage from './base.page';

class HomePage extends BasePage {

     //WebElements
     get barraDeBusqueda() { return $('[id="search_query_top"]') }
     get login() { return $('a.login') }
     get carrito() { return $('//a[@title="View my shopping cart"]') }
     articulo(nombre) { return $(`=${nombre}`) }
     categoria(nombre) { return $(`=${nombre}`) }


     //-------------------------------------------------------------------------------------------------------//

     /**
      * Escribe el artículo en el campo de búsqueda y presiona Enter
      * @param {String} articulo que se buscará
      */
     async buscar(articulo) {
          addStep(`Buscar artículo: ${articulo}`);
          await super.vaciarCampoYEnviarTexto(await this.barraDeBusqueda, articulo);
          await this.barraDeBusqueda.keys('Enter');
     }

     /**
      * Obtener texto de la barra de búsqueda
      */
     async obtenerTextoBusqueda() {
          addStep('Obtener texto de la barra de búsqueda');
          return await this.barraDeBusqueda.getValue();
     }

     /**
     * Hace click en el artículo
     * @param {String} nombreArticulo nombre del artículo al cual ingresar
     */
     async ingresarAlArticulo(nombreArticulo) {
          addStep(`Ingresar al artículo ${nombreArticulo}`);
          await super.clickearElemento(await this.articulo(nombreArticulo));
     }

     /**
      * Hace click en la categoría
      * @param {String} nombreCategoria nombre dela categoria a la cual ingresar
      */
     async ingresarACategoria(nombreCategoria) {
          addStep(`Ingresar a la categoría ${nombreCategoria}`);
          await super.clickearElemento(await this.categoria(nombreCategoria));
     }

     /**
      * Hace click en el boton Sign in
      */
     async ingresarAlLogin() {
          addStep(`Ingresar al Login`);
          await super.clickearElemento(await this.login);
     }

     /**
      * Acceder al carrito
      */
     async accederAlCarrito() {
          addStep(`Acceder al carrito`);
          await super.clickearElemento(await this.carrito);
     }

}
export default new HomePage();