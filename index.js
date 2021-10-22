let nome = prompt("nome da sua nave")
let velocidade = 0
let escolha

function menu() {
  let opcao
    while (opcao != 1 && opcao != 2 && opcao != 3 && opcao != 4) {
    opcao = prompt("O que deseja fazer ?\n" + "1- Acelerar a nave em 5km/s\n2- Desacelerar a nave em 5km/s\n3- imprimir dados de bordo\n4- Sair do programa")
    }
    return opcao
}
function velocidadesobe(velocidade){
  let novavelocidade = velocidade + 5
  return novavelocidade
}
function velocidadedesce(velocidade){
  let novavelocidade = velocidade - 5
  if (novavelocidade < 5) {
    novavelocidade = 0
  }
  return novavelocidade
}
function imprime(nome, novavelocidade){
  alert("Nome da Nave: " + nome + "\nVelocidade: " + novavelocidade)
}

do {
  escolha = menu()
  switch (escolha) {
    case "1":
    velocidadenave = velocidadesobe(velocidadenave)
    break;
    case "2":
    velocidadenave = velocidadedesce(velocidadenave)
    break;
    case "3":
      imprime(nome,velocidadenave)
    break;
  
    default:
    alert("Saindo do programa.")
      break;
  }
} while (escolha != 4);