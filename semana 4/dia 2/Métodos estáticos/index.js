class estacaodeprocessamentorecurso{
  constructor(nome,processamentomensal){
    this.nome = nome
    this.processamentomensal = processamentomensal
  }
  static calculandoprocessoemhoras(processamentomensal,horas){
    return processamentomensal / 720 * horas
  }
}

let processamento = new estacaodeprocessamentorecurso('Gaia',2000)

let totalprocessado = estacaodeprocessamentorecurso.calculandoprocessoemhoras(processamento.processamentomensal,10)

console.log(totalprocessado)

/*====================================================================*/
class Quadrado extends Poligono {
  constructor(comprimento) {
    // super(SUPERIOR) chama o construtor da classe pai que vai atribuir comprimento para
    // os atributos comprimento e altura herdados pela nossa classe filha Quadrado
    super(comprimento, comprimento);
    // Nas classes filhas, super() deve ser chamado antes de usar o this. Sem ele
    // vai ocorrer um erro de referência. O this agora se refere a classe filha Quadrado
    this.nome = 'Quadrado';
  }

  // os atributos a seguir são herdados da classe pai Poligono: altura, comprimento e area.

  get area() {
    return this.altura * this.comprimento;
  }

  set area(valor) {
    this.area = valor;
  }
}