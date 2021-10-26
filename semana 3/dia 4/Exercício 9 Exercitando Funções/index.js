/*let nomedanave = prompt("qual o nome da  nave ?")
let velocidadedanave = 0
let escolha

function showMenu() {
  let option
  while (option != "1" && option != "2" && option != "3" && option != "4") {
    option = prompt("O que deseja fazer ?\n" +
                    "1- Acelerar a nave em 5km/s\n" +
                    "2- Desacelerar a nave em 5km/s\n" +
                    "3- Imprimir dados de bordo\n" +
                    "4- Sair do programa")
  }
  return option
}

function SpeedUp(velocidadedanave){
  let novavelocidade = velocidadedanave + 5
  return novavelocidade
}

function SpeedDown(velocidadedanave){
  let novavelocidade = velocidadedanave - 5
  if (novavelocidade < 0) {
    novavelocidade = 0
  }
  return novavelocidade
}

function printSpaceshipBoardData(nomedanave, velocidadedanave){
  alert("Nave: " + nomedanave + "\n Velocidade: " + velocidadedanave)
}

do {
  escolha = showMenu()
  switch (escolha) {
    case "1":
      velocidadedanave = SpeedUp(velocidadedanave)
      break;
    case "2":
      velocidadedanave = SpeedDown(velocidadedanave)
      break
    case "3":
      printSpaceshipBoardData(nomedanave, velocidadedanave)
      break
    default:
      alert("Saindo do programa.")
      break;
  }
} while (escolha != "4");*/

//Receber nome da nave
let spaceshipName = prompt("Informe o nome da nave: ")
//velocidade da nave inicial = 0; menu deve ser exibido para que o usuário escolha entre as seguintes op:
//1- Acelerar a nave em 5km/s\n2- Desacelerar em 5km/s\n3- Imprimir dados de bordo\n4- Sair do programa
let vel = 0
//Uma função para cada ação do menu de acelerar, desacelerar e imprimir dados de bordo.
function speedUp(){
    vel+=5
}
function speedDown(){
    vel-= 5
}
function Data(){
    alert("Nome da nave: " + spaceshipName + "\nVelocidade atual: " + vel + "km/s.")
}
let op = prompt("Informe uma opção válida:\n\n1- Acelerar a nave em 5km/s\n2- Desacelerar em 5km/s\n3- Imprimir dados de bordo\n4- Sair do programa")
do{
    if(op == "1"){
        speedUp()
        //alert("Estamos a " + vel + "km/s.")
    }
    else if(op == "2"){
        speedDown()
        //alert("Estamos a " + vel + "km/s.")
    }
    else if(op == "3"){
        Data()
    }
    else if(op == "4"){
        break
    }
    else{
        //caso a pessoa escolha um número que não está na lista, terá que exibir o menu novamente até que tenha uma opção válida.
        alert("Número inválido, tente novamente.")
    }
    op = prompt("Informe uma opção válida:\n\n1- Acelerar a nave em 5km/s\n2- Desacelerar em 5km/s\n3- Imprimir dados de bordo\n4- Sair do programa")
    //Encerrar o app somente quando digitar para sair
}while(op!="4")