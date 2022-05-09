class barco{
  static get desaceleracao(){ /*--------------VARIAVEL ESTATICA----------------- testamos o const com o luccão, não rodou*/
    return 0.15
  }
  constructor(name){
      this.nome = name
      this.velocidadeatual = 0
  }
  speedUp(aceleration){
    this.velocidadeatual += (aceleration * (1 - barco.desaceleracao))
  }
}

let nave = new barco('Apolo')
nave.speedUp(100)
console.log(barco.desaceleracao)
console.log(nave)