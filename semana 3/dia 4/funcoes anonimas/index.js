//FUNÇÕES ANONIMAS
console.log(speedUp(60, 10))
console.log(doubleSpeed(50))

//NÃO PODE SER ACESSADA, POIS FOI USADO LET, E A CHAMADA VEIO ANTES.
let doubleSpeed = function doubleSpeed(velocity) {
  return velocity * 2
}

//FUNÇÕES TRADICIONAIS, PODEM SER CHAMADAS ANTES MESMO DE TEREM SIDO CRIADAS.
//ELAS PODEM FICAR EMBAIXO DO CÓDIGO.
function speedUp(velocity, acceleration) {
  return velocity + acceleration
}