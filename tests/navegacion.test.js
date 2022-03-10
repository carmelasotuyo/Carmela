import homePage from './pages/home.page';

describe('Navegación básica', () => {

    it('Comparar Header de página inicial', async () => {
        await homePage.abrir('/');
        await (await $('#header')).waitForDisplayed();
        expect(await browser.checkElement(await $('#header'), "Banner", {}), "Error: el header del sitio no coincide con el original").equal(0);
    });

    it('Comparar página de categoría Casual Dresses', async () => {
        let dresses = await $("a[title=Women]");
        await dresses.moveTo(1,1);
        await homePage.ingresarACategoria('Casual Dresses');

        //Chequear barra lateral:
        await $("#left_column").waitForDisplayed();
        expect(await browser.checkElement(await $('#left_column'), 'Barra lateral', {}), "Error: la barra lateral no coincide con la original").equal(0);

        //Chequear header de sección y productos:
        await $("#center_column").waitForDisplayed();
        expect(await browser.checkElement(await $('#center_column'), 'Contenido', {}), "Error: el contenido de categoría no coincide con el original").equal(0);
    }); 

    it('Comparar página de producto', async () => {
        await homePage.ingresarAlArticulo('Printed Dress');
        await $("#center_column").waitForDisplayed();
        expect(await browser.checkScreen('paginaProducto', {}), "Error: la página de producto no coincide con la original").equal(0);
    });
});