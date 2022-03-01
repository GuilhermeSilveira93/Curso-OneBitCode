//FORMA INCORRETA
function speedUp(velocity, unit = "km/s", acceleration){
  let newVelocity = velocity + acceleration
  console.log("Nova Velocidade :" + newVelocity + unit)
}
speedUp(50, "mi/s ", 20)
speedUp(50, 20)//50 vai para velocity, 20 vai para unit, aceeleration fica indefinida.
//pois ele não consegue realizar a conta.

//CUIDADO COM A ORDEM !

//FORMA CORRETA:
function speedUp(velocity, acceleration, unit = "km/s"){//TROCAMOS A ORDEM SIMPLESMENTE PELO FATO DE QUE O UNITS JÁ ESTÁ COM VALOR DEFINIDO.*/
  let newVelocity = velocity + acceleration
  console.log("Nova Velocidade :" + newVelocity + unit)
}
speedUp(50, 20) 