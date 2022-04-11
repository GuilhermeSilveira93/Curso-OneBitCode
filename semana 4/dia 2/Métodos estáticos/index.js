class estacaodeprocessamentorecurso{
  constructor(nome,processamentomensal){
    this.nome = nome
    this.processamentomensal = processamentomensal
  }
  static calculandorpocessoemhoras(processamentomensal,horas){
    return processamentomensal / 720 * horas
  }
}

let processamento = new estacaodeprocessamentorecurso('Gaia',2000)

let totalprocessado = estacaodeprocessamentorecurso.calculandorpocessoemhoras(processamento.processamentomensal,10)

console.log(totalprocessado)