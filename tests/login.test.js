import homePage from "./pages/home.page";
import loginPage from "./pages/login.page";
import DATOS from '../datos/usuarios';

describe('Login', () => {
    DATOS.forEach(({ email, password }) => {
        it('Debería acceder al sitio de login', async () => {
            await homePage.abrir('/');
            await homePage.ingresarAlLogin();
            await expect(await browser.checkElement(await $('#authentication'), 'Login', {}), 'Error: el sitio de login no coincide con el original').equal(0);
        });
    
        it('Debería ingresar los datos e ingresar al sitio', async () => {
            await loginPage.ingresarEmail(`${email}`);
            await loginPage.ingresarPassword(`${password}`);
            await loginPage.clickearElemento(await $('#SubmitLogin'));
            await $('a.account').waitForDisplayed();
            await expect(await $('h1').getText()).to.include.string('MY ACCOUNT','Error: no se mostró el header de la página ACCOUNT');;
        });

        it('Debería cerrar sesión', async () => {
            await loginPage.clickearElemento($('a.logout'));
        });
    });
});