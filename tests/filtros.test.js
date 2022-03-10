import categoriaPage from "./pages/categoria.page";
import homePage from "./pages/home.page";
import DATOS from '../datos/filtros';

describe('Filtros', () => {
    it('Debería abrir el sitio e ingresar a la categoría Women', async () => {
        await homePage.abrir('/');
        await homePage.ingresarACategoria('Women');
        await expect(await categoriaPage.obtenerNombreCategoria()).to.equal("Women");
    });

    DATOS.forEach(({ filtro }) => {
        it(`Debería seleccionar ${filtro}`, async () => {
            await categoriaPage.seleccionar(`label[for=${filtro}]`);
            await categoriaPage.verificarAplicacionFiltro(filtro);
        });
    });

    it('Debería verificar el resultado mostrado', async () => {
        await expect(await categoriaPage.obtenerNombreResultado()).to.contain('Printed Summer Dress');
    });
});