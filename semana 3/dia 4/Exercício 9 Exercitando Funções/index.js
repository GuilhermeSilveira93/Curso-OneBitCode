let name = prompt("Qual o nome da nave ?")
let velocity = 0
let choise 

function showMenu() {
  let option
  while (option != "1" && option != "2" && option != "3" && option != "4") {
    option = prompt("O que deseja fazer ?\n" + "1- Acelerar a nave em 5km/s\n2- Desacelerar a nave em 5km/s\n3- imprimir dados de bordo\n4- Sair do programa")
  }
  return option
}
function speedUp(velocity){
  let newVelocity = velocity + 5
  return newVelocity
}
function speedDown(velocity){
  let newVelocity = velocity - 5
  if (newVelocity < 0) {
    newVelocity = 0
  }
  return newVelocity
}
function print(name, newVelocity){
  alert("Nome da Nave: " + name + "\nVelocidade: " + newVelocity)
}

do {
  choise = showMenu()
  switch (choise) {
    case "1":
      spaceshipVelocity = speedUp(spaceshipVelocity)
      break;
    case "2":
      spaceshipVelocity = speedDown(spaceshipVelocity)
      break
    case "3":
      print(name,spaceshipVelocity)
      break
    default:
      alert("Encerrando programa de bordo")
      break;
  }
} while (choise != 4);