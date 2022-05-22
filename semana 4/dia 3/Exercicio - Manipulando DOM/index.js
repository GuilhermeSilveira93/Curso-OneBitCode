function Listar(){
  let bairro = document.querySelector("input[name='bairro']").value/*RECEBENDO DADOS E COLOCANDO NA VARIAVEL*/
  let cidade = document.querySelector("input[name='cidade']").value/*RECEBENDO DADOS E COLOCANDO NA VARIAVEL*/
  let area = document.querySelector("input[name='area']").value/*RECEBENDO DADOS E COLOCANDO NA VARIAVEL*/
  let numero = document.querySelector("input[name='numero']").value/*RECEBENDO DADOS E COLOCANDO NA VARIAVEL*/

  /*CRIANDO LISTA NOVA QUE VAI MOSTRAR OS DADOS RECEBIDOS*/
  let lista = document.createElement("li")
  lista.innerText = area + ' mt², número :' + numero + ", Bairro: " + bairro + ", Cidade: " + cidade;

  /*CRIANDO BOTÃO REMOVER*/
  let botaoremover = document.createElement("button")
  botaoremover.type = "button"
  botaoremover.innerText = "Remover"
  botaoremover.setAttribute("onclick", "remover(this)")

  /*COLOCANDO O BOTAO DENTRO DA LISTA NOVA*/
  lista.appendChild(botaoremover)

  /*COLOCANDO TUDO NO DOM*/
  document.getElementById("listadinamica").appendChild(lista)
}

function remover(button){
  let listapararemover = button.parentNode
  document.getElementById("listadinamica").removeChild(listapararemover)
}