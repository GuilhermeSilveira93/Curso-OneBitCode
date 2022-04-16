class transportenaveespacial{
  constructor(nome){
    this.name = nome
    this.velocidadeatual = 0
  }

  set velocidade(novavelocidade){
    if(novavelocidade > 120){
      this.velocidadeatual = 120
    }else{
      this.velocidadeatual = novavelocidade
    }
  }
}

let naveespacial = new transportenaveespacial('Transportador')

naveespacial.velocidade = 10 /*NÃO É UM PARAMETRO, POR ISSO TEMOS QUE "RECEBER"(=)
UM VALOR*/

console.log(naveespacial)