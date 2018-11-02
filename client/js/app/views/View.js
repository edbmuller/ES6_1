// This class need to be the first scriptView.js imported on html.
class View {

    constructor(elemento) {

        this._elemento = elemento;
    }

    _template() {

        throw new Error('O metodo _template() precisa ser implementado na classe View filha!');
    }

    update(modelo) {
        
        this._elemento.innerHTML = this._template(modelo);
    }
}