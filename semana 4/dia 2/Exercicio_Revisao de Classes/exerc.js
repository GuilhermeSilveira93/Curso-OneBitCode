class nave{
  constructor (nome,quantidade){
    this.nome = nome
    this.quantidade = quantidade
    this.velocidadeatual = 0
  }
  speedUP(aceleracao){
    this.currentVelocity += (aceleracao * (1 - 0.17))
  }
}
class NavedeBatalha extends nave{
  constructor(nome,quantidade,QuantidadeArmas){
    super(nome,quantidade)
    this.QuantidadeArmas = QuantidadeArmas
  }
}
class NavedeTransporte extends nave{
  constructor(nome,quantidade,QuantidadeLugares){
    super(nome,quantidade)
    this.QuantidadeLugares = QuantidadeLugares
  }
}

function menu1(){
              let nomenave = prompt('Digite o nome da Nave')
              let quantidade = prompt('Digite a quantidade de Tripulantes')
              let opcaomenu = prompt('Digite o tipo da Nave:\n1 - Nave de Batalha.\n2 - Nave de Transporte')

              switch (opcaomenu) {
                case "1":
                  var QuantidadeArmas = prompt('Quantidade de Armas.')
                  var navedeBatalha = new NavedeBatalha(nomenave,quantidade,QuantidadeArmas)
                  break
                case "2":
                  var QuantidadeLugares = prompt('Quantidade de Lugares.')
                  var Transporte = new NavedeTransporte(nomenave,quantidade,QuantidadeLugares)
                  break
                default:
                  while(opcaomenu == "3"){  
                    alert("opção inválida")
                    opcaomenu = prompt('Digite o tipo da Nave:\n1 - Nave de Batalha.\n2 - Nave de Transporte')
                  }
              }
function menu2(){
              var opcaomenu2 = prompt("Piloto, informe o que deseja\n "+"1. Acelerar a nave!\n"+"2.Trocar a nave!\n"+"3.Imprimir e Sair")
              switch (opcaomenu2) {
                case "1":
                if(opcaomenu == "1"){
                  var aceleracao = prompt("Quanto deseja acelerar?")
                  navedeBatalha.speedUP(aceleracao)
                  }else if (opcaomenu == "2") {
                  var aceleracao = prompt("Quanto deseja acelerar?")
                  Transporte.speedUP(aceleracao)
                  }
              menu2()
              break
              case "2":
              let certeza = prompt("Piloto, tem certeza que deseja trocar de nave?\n"+"1.Sim\n"+"2.Não")
                if(certeza == "1"){
                    menu1()
                }else{
                    menu2()
                }
                break
                case "3":
                  if(opcaomenu == "1"){
                      alert(navedeBatalha)
                      }else if (opcaomenu == "2") {
                        alert(Transporte)
                  }
              break 
                default:
                alert("Opção Inválida!")
                menu2()
              }
}
menu2()
}
menu1()


/* 
Vamos criar um sistema de monitoramento de uma nave espacial.
Logo que o sistema é iniciado, ele deve pedir os dados da nave.
Para a nave, que for cadastrada, precisamos de:  *Nome
                                                                              *Quantidade de Tripulantes 
--------------------------------------------------------------------------------------------------------------------------------
Os veículos podem ser de batalha ou de transporte.
Caso seja de batalha: ele também deverá pedir quantas armas a nave tem disponíveis.
Caso seja de transporte: o número de lugares que ela comporta.
Além disso, a nave deve ser iniciada com velocidade atual iguala 0.
Um menu deverá ser apresentado ao usuário com as opções:
                                                                                                    1- Aceleraranave
                                                                                                    2- TrocaraNave
                                                                                                    3- Imprimire sair 
---------------------------------------------------------------------------------------------------------------------------------
*Para acelerar a nave,é necessário pedir a aceleração.
    *A velocidade deve aumentar 83% da aceleração passada como parâmetro devidoàtaxa de desaceleração.
    *Para a nossa aplicação, toda aceleração tem uma taxa de desaceleração fixa de 17%.*/