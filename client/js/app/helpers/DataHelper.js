class DataHelper {
    
    constructor() {
        throw new Error('DateHelper não pode ser instânciada!');
    }

    static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getYear()}`;
    }

    static textoParaData(texto) {
        
        if (!/\d{4}-\d{2}-\d{2}/.test(texto)) throw new Error('O formato da data deve ser \'aaaa-mm-dd\'');
        
        return new Date(...texto.split('-').map( (item, indice) => item - indice % 2));
    }
}