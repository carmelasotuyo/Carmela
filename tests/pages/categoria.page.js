import BasePage from './base.page';
class CategoriaPage extends BasePage {

    //Elementos Web
    get resultado() { return $('.product_list.grid.row h5') }
    get nombreCategoria() { return $('span.category-name') }
    get menuFiltrosAplicados() { return $('#enabled_filters') }
    checkbox(id) { return $(`${id}`) }
    filtroARevisar(filtro) { return $(`#enabled_filters a[rel=${filtro}]`) }

    //-------------------------------------------------------------------------------------------------------//

    /**
      * Devuelve el nombre de la categoria 
      */
    async obtenerNombreCategoria() {
        addStep(`Obtener nombre de la categoría`);
        return await this.nombreCategoria.getText();
    }
    /**
      * Hace click en el checkbox indicado
      * @param {String} checkbox que se seleccionará
      */
    async seleccionar(checkboxId) {
        addStep(`Seleccionar checkbox: ${checkboxId}`);
        await super.clickearElemento(await this.checkbox(checkboxId));
    }

    /**
      * Confirma que un filtro fue aplicado
      * @param {String} filtro que se seleccionó
      */
    async verificarAplicacionFiltro(filtro) {
        addStep(`Verificar que el filtro: ${filtro} fue aplicado`);
        await (await this.menuFiltrosAplicados).waitForDisplayed();
        await this.filtroARevisar(filtro).waitForExist();
    }

    /**
      * Devuelve el nombre del producto resultado luego de aplicar filtros 
      */
    async obtenerNombreResultado() {
        addStep(`Obtener nombre del producto resultado`);
        return await this.resultado.getText();
    }

}

export default new CategoriaPage();