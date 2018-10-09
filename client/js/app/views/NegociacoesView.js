class NegociacoesView {

    constructor(elemento) {

        this._elemento = elemento;
    }
    
    _template(model) {
        
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                
                <tbody>
                    ${model.negociacoes.map(n => {
                        return `
                            <tr>
                                <td>${DataHelper.dataParaTexto(n.data)}</td>
                                <td>${n.quantidade}</td>
                                <td>${n.valor}</td>
                            </tr>
                        `;
                    })}    
                </tbody>
                
                <tfoot>
                </tfoot>
            </table>
        `;       
    }

    update(model) {

        this._elemento.innerHTML = this._template(model);
    }
}