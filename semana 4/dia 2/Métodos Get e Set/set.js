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

naveespacial.velocidade = 130

console.log(naveespacial)