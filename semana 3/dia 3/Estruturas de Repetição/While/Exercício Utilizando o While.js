let nDobra = 0
let chosenOption = ""

let spaceShip = prompt("Digite o nome da Nave")

chosenOption = prompt("Deseja entrar em dobra espacial ?\n1 - Sim\n2- Não")
while (chosenOption == "1") {
  nDobra += 1
  chosenOption = prompt("Deseja realizar a proxima dobra ?\n1 - Sim\n2- Não")
}
alert("Nave: " + spaceShip + "\n Dobras: " + nDobra)