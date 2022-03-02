/*function speedDown(velocity, printer) {
  let deceleration = 20
  while (velocity > 0) {
    printer(velocity)
    velocity -= deceleration
  }
  alert("Nave Parada. Comportas abertas")
}

let velocidadedanave =150

speedDown(velocidadedanave, function (velocidade) {
  console.log("Velocidade atual: " + velocidade +"km/h")
})
*/
function abaixandovelocidade(velocidade, imprimir) {
  let desaceleracao = 20
  while (velocidade > 0) {
    imprimir(velocidade)
    velocidade -= desaceleracao
  }
  alert('NAVE PARADA')
}
let velocidadedanave = 150

abaixandovelocidade(velocidadedanave, function (velocidade) {
  console.log("Velocidade Atualizada: " + velocidade)
})