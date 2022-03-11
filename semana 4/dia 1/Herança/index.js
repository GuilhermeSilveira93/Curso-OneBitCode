/*
      **É UM RECURSO DE PARADIGMA ORIENTADO A OBJETOS

      **PERMITE QUE CLASSES HERDEM CARACTERISTICAS DE OUTRAS CLASSES
        *ou seja, declaramos uma classe que vai herdar métodos e atributos de outra classe

      **É UMA TECNICA DE REUSO DE CÓDIGO

      **AS DUAS CLASSES DEVEM TER UMA RELACAO DE "É UM"
        *Por exemplo: Todo capitão É UMA pessoa
          poderia ter uma classe Captain herdando de Person
*/

class spaceship{
  constructor(name, maxCrew,maxRecommendedVelocity){
  this.name = name
  this.crew = maxCrew
  this.maxVelocity = maxRecommendedVelocity
  this.currentspeed = 0
  }
  speedUp(acceleration){
    this.currentspeed += acceleration
    if (this.currentspeed > this.maxVelocity) {
      alert("Atenção ! Você atingiu " + this.currentspeed + '\nEssa é a velocidade máxima permida: ' + this.maxVelocity)
    }
  }
}

class battlespaceship extends spaceship { /*Extends vai "herdar"*/
  stop(){
    this.currentspeed = 0
    alert('Recolhendo armas e preparando nave de batalha')
  }
}

class DiscoverySpaceship extends spaceship { /*Extends vai "herdar"*/
  stop(){
    this.currentspeed = 0
    alert('Recolhendo equipamento de amostras e parando nave de descoberta')
  }
}
let darwin = new DiscoverySpaceship('Busão Darwin', 40, 100)
let fenix = new battlespaceship('Fenix', 8, 548)

darwin.speedUp(110)
console.log(fenix)
console.log(darwin)