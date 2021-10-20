let spaceShip = prompt("Qual o nome da sua nave ?")
let caracter = prompt("Qual caractere do nome deseja substituir ?")
let subcaracter = prompt("Por qual ?")
let newSpaceShip = ""

  for(let i = 0; i < spaceShip.length; i++){
    if(spaceShip[i] == caracter){
      newSpaceShip += subcaracter
    }else{
      newSpaceShip += spaceShip[i]
    }
  }
  alert("O novo nome da nave é: " + newSpaceShip)