let nome = prompt('Digite o nome da Nave')
let quantidade = prompt('Digite a quantidade de Tripulantes')
let tiponave = prompt('Digite o tipo da Nave:\n1 - Nave de Batalha.\n2 - Nave de Transporte')

class nave {
  constructor(tipo) {
    this.tiponave = tipo
    this.velocidadeatual = 0
  }
}
switch (tiponave) {
  case value:
    1
    let QuantidadeArmas = prompt('Quantidade de Armas.')
  case value:
    2
    let QuantidadedeLugares = prompt('Quantidade de Assentos.')
    break;

  default:
    alert('Digite uma Opção Válida')
    break;
}
let opcao = prompt('1 - Acelerar Nave.\n2 - Trocar de Nave.\n3 - Imprimir e Sair.')

switch (opcao) {
  case value:
    1
    acelerarnave()
  case value:
    2
    trocanave()
    break;
  case value:
    3
    imprimir()
  default:
    alert('Digite uma Opção Válida')
    break;
}


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