let spaceship =[ 'Colossus',
                          'Artemis',
                          'Fenix'
]

console.log(...spaceship)
console.log(spaceship)


function equipe(message, names) {
  names.forEach(name => console.log(`${message}${name}`))
}
equipe("Seja Bem-vindo", [" Arthur"," Jake"," Melissa"])

function equipe2(message, ...names) {
  names.forEach(name => console.log(`${message}${name}`))
}
equipe2("Adeus, ", " Pedro"," Beatriz"," Layane")

class nave {
  constructor(nome){
    this.nome = nome
    this.velocidade = 0
  }
  speedUp(aceleracao){
    this.velocidade += aceleracao
  }
}

let navinha = new nave('Guilherme')
navinha.speedUp(10)
console.log(navinha)

/*associando classes*/
class capitao{
  constructor(nome,idade,horasVoo){
    this.nome = nome
    this.idade = idade
    this.horasVoo = horasVoo
  }
}
class nave2{
  constructor(nomeNave,tripulantes,nome,idade,horasVoo){
    this.nomeNave = nomeNave
    this.tripulantes = tripulantes
    this.Capitao = new capitao(nome,idade,horasVoo)
  }
}
let comandante = new nave2('Arthemis',12,'Guilherme',27,5000 + ' Horas de Voo')
console.log(comandante)