class NegociacoesView {
<<<<<<< HEAD
    
=======

>>>>>>> 57e0c442961266092ad383f63bc12222c8e59b16
    constructor(elemento) {

        this._elemento = elemento;
    }
<<<<<<< HEAD

    _template(modelo) {

=======
    
    _template(model) {
        
>>>>>>> 57e0c442961266092ad383f63bc12222c8e59b16
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
<<<<<<< HEAD
                        <th>VOLUME</th>
=======
>>>>>>> 57e0c442961266092ad383f63bc12222c8e59b16
                    </tr>
                </thead>
                
                <tbody>
<<<<<<< HEAD
                    ${modelo.negociacoes.map( n => `
                            
                        <tr>
                            <td>${DataHelper.dataParaTexto(n.data)}</td>
                            <td>${n.quantidade}</td>
                            <td>${n.valor}</td>
                            <td>${n.volume}</td>
                        </tr>

                    `).join('')}
                </tbody>
                    <tr>
                        <td colspan="3">Volume Total:</td>
                        <td>      
                            ${modelo.negociacoes.reduce((total, n) => total + n.volume, 0.0)}
                        </td>
                    <tr>
                <tfoot>
                </tfoot>
            </table>
        `;
    }

    update(modelo) {

        this._elemento.innerHTML = this._template(modelo);
    }
}


=======
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
>>>>>>> 57e0c442961266092ad383f63bc12222c8e59b16
