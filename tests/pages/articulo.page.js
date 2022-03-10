import BasePage from './base.page';

class ArticuloPage extends BasePage {
    //Elementos Web
    get nombreArticulo() { return $('h1') }
    get botonAgregar() { return $('#add_to_cart button') }
    get mensajeConfirmacion() { return $('#layer_cart div.clearfix h2') }

    //-------------------------------------------------------------------------------------------------------//

    /**
     * Obtener nombre del artículo
     */
     async obtenerNombreArticulo(){
        addStep(`Obtener nombre del artículo`);
        return await this.nombreArticulo.getText();
    }

    /**
     * Agregar artículo al carrito
     */
     async agregarAlCarrito(){
        addStep(`Agregar artículo al carrito`);
        await super.clickearElemento(this.botonAgregar);
    }

    /**
     * Verificar que el mensaje de confirmación es visible
     */
     async verificarConfirmacion(){
        addStep(`Verificar mensaje de confirmacion`);
        await (await this.mensajeConfirmacion).waitForDisplayed();
        return await (await this.mensajeConfirmacion).getText();
    }
}
export default new ArticuloPage();