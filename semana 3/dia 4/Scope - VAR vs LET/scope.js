//ESSA É UMA VARIAVEL COM ESCOPO GLOBAL
let spaceshipName = "Super Nova"

function changeSpaceShipName(){
  spaceshipName = "Elemental"
}
console.log(spaceshipName)

//SÓ VAI ALTERAR DEPOIS QUE CHAMAR.
changeSpaceShipName()

console.log(spaceshipName)

function starSpaceshipVelocity(){
  //POSSUI UM ESCOPO LOCAL
  let spaceshipVelocity = 0
  //SÓ PODE SER ACESSADA NO LOCAL
}
/*
starSpaceshipVelocity()
console.log(spaceshipVelocity)
*/
function setSpaceShipDetails(){
  let velocity = 50
  if (velocity == 50) {
    velocity = 60
    //VAR TEM UMA PRIORIDADE MAIOR NO SCOPO
    var spaceshipName = "Elemental"
    //LET TEM A PRIORIDADE ONDE ELE VAI MESMO FICAR.
    let spaceshipType = "Discovery"
  }
  console.log(velocity)
  console.log(spaceshipName)
  console.log(setSpaceShipDetails)
}
setSpaceShipDetails()

// LET VS VAR
function setSpaceShipDetails(){
  console.log(spaceshipName)
  console.log(setSpaceShipType)
  var spaceshipName = "Elemental" //VAR VAI SEMPRE PARA O TOPO DA FUNÇÃO.
  let setSpaceShipType = "Discovery"
  console.log(spaceshipName)
  console.log(setSpaceShipType)
}
setSpaceShipDetails()