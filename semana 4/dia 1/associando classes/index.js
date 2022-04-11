class captain {
  constructor (name,age,flighthours){
    this.name = name
    this.age = age
    this.flighthours = flighthours
  }
}

class spaceship{
  constructor(nome,equipe,nomecap,idadecap,horasdevoo){
    this.nome = nome
    this.equipe = equipe
    this.captain = new captain(nomecap,idadecap,horasdevoo)/*ASSOCIANDO AQUI*/
  }
}

let navinha = new spaceship('LightYear','Buzz','Guilherme',28,1500)

console.log(navinha)