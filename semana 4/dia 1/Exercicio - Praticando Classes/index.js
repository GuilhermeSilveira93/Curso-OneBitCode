class NaveEspacial {
  constructor(nome, tripulantes) {
    this.nome = nome
    this.tripulantes = tripulantes
    this.portas = false
    this.engate = false
  }
  engate(){
    this.portas = true
    this.engate = true
  }
}

function escolha() {
  do {
    let choseoption = Number(prompt("MENU DA ESTAÇÃO\n1 - Cadastrar Nave\n2 - Imprimir Dados\n3 - Sair do programa"))
    switch (choseoption) {
      case 1:
        cadastro()
        break;
      case 2:
        imprime()
        break;
      case 3:
        break
      default:
        alert("Escolha uma opção válida!")
    }
  } while (choseoption != 3);
}
escolha()

function cadastro() {
  nome = prompt("ENGATE DE NAVE\nDIGITE O NOME DA NAVE.")
  tripulantes = prompt("ENGATE DE NAVE\nDIGITE O NÚMERO DE TRIPULANTES.")
  portas = 'fechadas'
  engate = true
}

function imprime() {
  alert(NaveEspacial)
}

/*------------------------------------------------------------------------------------*/


class spaceShip{
  constructor(name, crewQuantity){
      this.name = name;
      this.crewQuantity= crewQuantity;
      this.doors = false;
      this.engate = false;
  };
  engatetrue(){
      this.engate = true;
      this.doors = true;
  }
}
let spaceList = []

function createShip(){
 let newShip = prompt(`Qual o nome da sua nave?`)
 let newCrewQuantity = prompt(`Quantos tripulantes ela tem?`)
 new spaceShip (newShip, newCrewQuantity, true , true)
 spaceList.push(newShip + " " + newCrewQuantity)
}

function printShip(){
 let printShip =  spaceList.join(`\n`)
  alert(`${printShip}`)
}

function showMenu(){
  let chosenOptions
  do {
      chosenOptions = prompt(`Digite a opção desejea \n1- Cadastrar nova spaceship\n2- imprimir lista de spaceships\n3-sair do programa`)
      switch(chosenOptions){
          case "1":
              createShip()
              break;
          case "2":
              printShip()
              break;
          case "3":
              break;
          default:
              alert("escolha uma opção valida")
      }
  } while (chosenOptions != "3");
}
showMenu()