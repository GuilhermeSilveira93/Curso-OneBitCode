let nDobra = 0
let chosenOption = ""

let spaceShip = prompt("Digite o nome da Nave")

chosenOption = prompt("Deseja entrar em dobra espacial ?\n1 - Sim\n2- Não")
while (chosenOption == "1") {
  nDobra += 1
  chosenOption = prompt("Deseja realizar a proxima dobra ?\n1 - Sim\n2- Não")
}
alert("Nave: " + spaceShip + "\n Dobras: " + nDobra)

let quantidade = 0
let escolha = ''
let nome = prompt('Qual a verdura ?')

escolha = prompt("Deseja adicionar 1 unidade ?\n1 - Sim\n2- Não")

while (escolha =="1") {
  quantidade += 1
  escolha = prompt("Deseja adicionar mais uma unidade ? \n1 - Sim\n2- Não")
}
alert("Nome da Verdura : " + nome +"\nQuantidade : " + quantidade )