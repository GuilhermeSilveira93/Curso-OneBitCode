/* 
Vamos criar um sistema de monitoramento de uma nave espacial.
Logo que o sistema é iniciado, ele deve pedir os dados da nave.
Para a nave, que for cadastrada, precisamos de:  *Nome
                                                                              *Quantidade de Tripulantes
*/
class NaveEspacial{
    static get TaxaDesaceleracao(){
        return 0.17
    }
    constructor(nome,quantidade_tripulantes){
    this.nome = nome
    this.quantidade_tripulantes = quantidade_tripulantes
    this.velocidade_atual = 0
    }
    speedUp(aceleracao){
        this.velocidade_atual += aceleracao * (1 - NaveEspacial.TaxaDesaceleracao)
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

function MenuInicial(){
    let nome_nave = prompt("Digite o nome da Nave.")
    let quantidade_tripulantes = prompt("Digite a quantidade de Tripulantes.")
    let tipo_nave = 
    prompt("Qual o tipo da Nave?\n1 - Nave de Batalha\n2 - Nave de Transporte")
    switch (tipo_nave) {
        case 1:
            
            break;
    
        default:
            break;
    }
}
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