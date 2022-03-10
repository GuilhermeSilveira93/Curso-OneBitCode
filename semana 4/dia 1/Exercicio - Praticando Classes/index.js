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

let spaceList = []

function cadastro(){
 let nome = prompt(`Qual o nome da sua nave?`)
 let quantidadeTripulantes = prompt(`Quantos tripulantes ela tem?`)
 new NaveEspacial (nome, quantidadeTripulantes, true , true)/* NEW FAZ OS DADOS ENTRAREM NO CONSTRUTOR DA CLASSE*/
 spaceList.push(nome + " " + quantidadeTripulantes)/*ADICIONA DADOS AO ARRAY*/
}

function imprime(){
 let imprimenave =  spaceList.join(`\n`)/*INCLUIU A QUEBRA DE LINHAS ENTRE AS VARIAVEIS / JOIN*/
  alert(`${imprimenave}`)
}

function escolha() {
  let opcao
  do {
    opcao = Number(prompt("MENU DA ESTAÇÃO\n1 - Cadastrar Nave\n2 - Imprimir Dados\n3 - Sair do programa"))
    switch (opcao) {
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
  } while (opcao != 3);
}
escolha()