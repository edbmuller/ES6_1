class NegociacaoController {
  
  constructor() {
    
    var $ = document.querySelector.bind(document);
  
    //propriedades de interação
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');    
    this._listaNegociacoes = new ListaNegociacoes();
    this._negociacoesView = new NegociacoesView($('#negociacoesView'));
    this._negociacoesView.update(this._listaNegociacoes);
  }
  
  //adiciona negociação
  adiciona(event) {
    event.preventDefault();
    
    // cria a negociação utilizando o modelo negociacoes
    this._listaNegociacoes.adiciona(this._criaNegociacao());
    // TODO: Criar função para salvar essa lista no index db > TODO: Pensar como vou recuperar essa lista do indexdb
    this._negociacoesView.update(this._listaNegociacoes);
    this._limpaFormulario();  
    // console.log(this._listaNegociacoes.negociacoes);
  } 

  _criaNegociacao() {
    return new Negociacao(
      DataHelper.textoParaData(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value
    );  
  }

  _limpaFormulario() {
    this._inputData.value = "";
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0.0;
    
    this._inputData.focus() ;
  }
}
