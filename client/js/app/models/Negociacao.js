class Negociacao {
    //Declaração das propriedades 
    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    
    //Getters das propriedades
    get data() {
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    
    /*** Metodos: ***/

    getVolume() {
        return this._quantidade * this._valor;
    }
}