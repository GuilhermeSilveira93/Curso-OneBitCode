/*let spaceShip = prompt("Qual o nome da sua nave ?")
let caracter = prompt("Qual caractere do nome deseja substituir ?")
let subcaracter = prompt("Por qual ?")
let newSpaceShip = ""

for (let i = 0; i < spaceShip.length; i++) {
  if (spaceShip[i] == caracter) {
    newSpaceShip += subcaracter
  } else {
    newSpaceShip += spaceShip[i]
  }
}
alert("O novo nome da nave é: " + newSpaceShip)*/

let nome = prompt("Qual o nome da sua nave ?")
let atual = prompt("Qual caractere do nome deseja substituir ?")
let novo = prompt("Por qual ?")
let feito = ""

for (let i = 0; i < nome.length; i++) {
  if (nome[i] == atual) {
    feito += novo
  } else {
    feito += nome[i]
  }
}
alert("O novo nome da nave é: " + feito)