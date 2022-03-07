let nave = {
  nome: "Deméter",
  tipo:"extracao",
  tripulacaomaxima:200,
  turnOn: function () {/*chamada de método*/
    console.log("Preparando Lançamento")
    console.log("Ligando computador de bordo")
  }
}


nave.turnOn()
nave.velocidade = 0
nave.speedup = function(acceleration) {
  this/*faz referencia ao proprio objeto*/.velocidade += acceleration
}
console.log(nave)
nave.speedup(10)

console.log(nave)

/*---------------------------------------*/