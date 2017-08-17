class Recibo {

  constructor(cliente) {
    this.cliente = cliente;
    this.lancamentos = [];
  }

  adicionaLancamento(lancamento) {
    this.lancamentos.push(lancamento);
  }

  imprime() {

	this.lancamentos.forEach(l => {
		console.log(this.cliente + ',' + l.descricao + ',' + l.valor);
	});
  
    //this.lancamentos.forEach(function (lancamento) {
      //console.log(this.cliente + ',' + lancamento.descricao + ',' + lancamento.valor);
    //});
  }
}

class Lancamento {

  constructor(descricao, valor) {
    this.descricao = descricao;
    this.valor = valor;
  }
}
var recibo = new Recibo('Flavio'); // instanciando um Recibo

// adicionando lançamentos no recibo 
recibo.adicionaLancamento(new Lancamento('Lancamento A', 100.12));
recibo.adicionaLancamento(new Lancamento('Lanmcamento B', 200.00));

recibo.imprime();