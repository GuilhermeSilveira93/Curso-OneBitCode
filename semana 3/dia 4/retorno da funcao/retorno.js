function speedUp(velocity, acceleration) {
  let newVelocity = velocity + acceleration
  console.log("nova velocidade: " + newVelocity)
  return newVelocity
}
let velocity = 80
let acceleration = 5

console.log(velocity)

velocity = speedUp(velocity, acceleration)// ela irá armazenar o retorno dessa função.
//Não precisamos armazenar a função em uma variavel.

//podemos exibi-la assim :
console.log(speedUp(80,20))