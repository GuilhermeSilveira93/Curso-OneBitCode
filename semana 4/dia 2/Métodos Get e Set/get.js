class estacaodeprocessamento {
  constructor(nome,capacidademensal){
  this.nome = nome
  this.capacidademensal = capacidademensal
}
get capacidadesemanal(){
  return this.capacidademensal / 4
}
}

let totalcapacidade = new estacaodeprocessamento('Gaia', 500)

console.log(totalcapacidade.capacidadesemanal)