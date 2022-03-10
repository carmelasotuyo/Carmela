import articuloPage from "./pages/articulo.page";
import busquedaPage from "./pages/busqueda.page";
import homePage from "./pages/home.page";
import checkoutPage from "./pages/checkout.page";
import loginPage from "./pages/login.page";

describe('Agregar al Carrito y Checkout', () => {

    //-------------------------AGREGAR AL CARRITO----------------------------------------------

    it('Debería ingresar a un producto', async () => {
        await homePage.abrir('/');
        await homePage.buscar('Blouse');
        await busquedaPage.ingresarAlResultado();
        await expect(await articuloPage.obtenerNombreArticulo()).to.equal('Blouse');
    });

    it('Debería agregar el producto al carrito', async () =>{
        await articuloPage.agregarAlCarrito();
        await expect(await articuloPage.verificarConfirmacion()).to.equal('Product successfully added to your shopping cart');
        await articuloPage.clickearElemento(await $('span.cross'));
    });

    //-------------------------CHECKOUT TEST----------------------------------------------

    it('Debería acceder al carrito y avanzar al login', async () => {
        await homePage.accederAlCarrito();
        await checkoutPage.verificarHeadingDePaso('SHOPPING-CART SUMMARY');
        let botonContinuar = await $('//div[@id="center_column"]//a[@title="Proceed to checkout"]');
        await checkoutPage.clickearElemento(botonContinuar);
        await checkoutPage.verificarHeadingDePaso('AUTHENTICATION');
    });

    it('Debería loguearse y avanzar a Addresses', async () => {
        await loginPage.ingresarEmail("carmela.sotuyo+1@abstracta.com.uy");
        await loginPage.ingresarPassword("Login_123");
        await loginPage.clickearElemento(await $('#SubmitLogin'));
        await checkoutPage.verificarHeadingDePaso('ADDRESSES');
    });

    it('Debería avanzar a Shipping', async () => {
        await checkoutPage.avanzar();
        await checkoutPage.verificarHeadingDePaso('SHIPPING');
    });

    it('Debería aceptar los términos y avanzar al método de pago', async () => {
        await checkoutPage.aceptarTerms();
        await checkoutPage.avanzar();
        await checkoutPage.verificarHeadingDePaso('PLEASE CHOOSE YOUR PAYMENT METHOD');
    });

    it('Debería elegir el método Bank Wire y  finalizar el checkout', async () => {
        await checkoutPage.elegirMetodoPago('//a[@title="Pay by bank wire"]');
        await checkoutPage.verificarHeadingDePaso('ORDER SUMMARY');
        await checkoutPage.avanzar();
        await expect(await browser.checkElement(await $('.cheque-indent'), 'Order completed', {}), 'Error: la orden no ha sido completada').equal(0);
    });
});