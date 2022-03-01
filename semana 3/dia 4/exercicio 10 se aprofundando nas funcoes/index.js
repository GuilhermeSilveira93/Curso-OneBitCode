function speedDown(velocity, print) {
  let deceleration = prompt('Qual a velociade de Desaceleração ?')
  while (velocity > 0) {
    print(velocity)
    velocity -= deceleration
  }
  alert("Nave Parada. Comportas abertas")
}

let velocidadedanave = prompt('Qual a velocidade atual ?')

speedDown(velocidadedanave, function (velocity) {
  console.log("Velocidade atual: " + velocity)
})