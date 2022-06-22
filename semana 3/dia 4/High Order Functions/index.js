function doubevelocity(velocity, printer) {
  //CALLBACK (altaclasse)
  console.log("Entrei em DoubleVelocity")
  let newvelocity = velocity * 2
  printer(newvelocity)
  return newvelocity
}
//FUNÇÃO ANONIMA QUE VAI IMPRIMIR
let printVelocity = velocity => {
  console.log("Nova Velocidade: " + velocity + "km/s")
}
var newvelocity = doubevelocity(60, printVelocity)
console.log(newvelocity)

let aquiUmaFuncao = parametro => { console.log('Parametro: ' + parametro)}
var novafunc = aquiUmaFuncao('10')
console.log(novafunc)