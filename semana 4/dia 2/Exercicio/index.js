/* 
Vamos criar um sistema de monitoramento de uma nave espacial.
Logo que o sistema é iniciado, ele deve pedir os dados da nave.
Para a nave, que for cadastrada, precisamos de:  *Nome
                                                                              *Quantidade de Tripulantes
*/
class NaveEspacial{
    constructor(nome,quantidade_tripulantes){
    this.nome = nome
    this.quantidade_tripulantes = quantidade_tripulantes
    }
}
class Nave_Batalha{
    constructor(nome,quantidade_tripulantes,quantidade_armas){
    super(nome,quantidade_tripulantes)
    this.quantidade_armas = quantidade_armas
}
}
class Nave_Transporte{
    constructor(nome,quantidade_tripulantes,quantidade_assentos){
    super(nome,quantidade_tripulantes)
    this.quantidade_assentos = quantidade_assentos
}
}

let nome_nave = prompt("Digite o nome da Nave.")
let quantidade_tripulantes = prompt("Digite a quantidade de Tripulantes.")
let velocidade_atual = 0

/*
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