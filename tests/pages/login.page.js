import BasePage from './base.page';

class LoginPage extends BasePage {

    //WebElements
    get campoEmail() { return $('#email') }
    get campoPass() { return $('#passwd') }

    //-------------------------------------------------------------------------------------------------------//

    /**
     * Completa el campo Email
     * @param {String} email del usuario
     */
    async ingresarEmail(email) {
        addStep(`Completar el campo Email`);
        await super.vaciarCampoYEnviarTexto(this.campoEmail, email);
    }

    /**
     * Completa el campo Contraseña
     * @param {String} pass del usuario
     */
     async ingresarPassword(pass) {
        addStep(`Completar el campo Contraseña`);
        await super.vaciarCampoYEnviarTexto(this.campoPass, pass);
    }

}
export default new LoginPage();