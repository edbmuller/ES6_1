class NegociacaoController {
    
    constructor() {
        
        let $ = document.querySelector.bind(document);

        this._inputData         = $('#data');
        this._inputQuantidade   = $('#quantidade');
        this._inputValor        = $('#valor');

        this._listaNegociacoes  = new ListaNegociacoes( modelo => 
            this._negociacoesView.update(modelo));
        
        this._negociacoesView   = new NegociacoesView($('#negociacoesView'));

        this._mensagem          = new Mensagem();
        this._mensagemView      = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);
    }

    
    //      Methods
    // ==================
    
    adiciona(event) {
        event.preventDefault();

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        
        this._mensagem.texto = 'Negociação Adicionada com sucesso!';
        this._mensagemView.update(this._mensagem);

        this._limpaFormulario();   
    }
    
    _criaNegociacao() {
        
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);    
    }
    
    apaga() {

        this._listaNegociacoes.esvazia();

        this._mensagem.texto = "Negociações apagadas com sucesso!" ;
    }

    _limpaFormulario() {
     
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();   
    }
}