//FUNCAO SIMPLES
function escreva(){
  console.log('olá programador a bordo')
}
escreva()

//FUNCAO COM PARAMETROS
function escrevamensagem(mensagem){
  console.log(mensagem)
}
escrevamensagem("como vai você ?")
/* DESSA FORMA, NÃO PODEMOS ARMAZENAR O RESULTADO EM UMA VARIAVEL*/

//FUNCAO QUE RETORNA VALOR
function soma(a, b){
return a + b
}
var resultadoSoma = soma(10,5)//AGORA PODEMOS ARMAZENAR EM UMA VARIAVEL
console.log(resultadoSoma)
console.log(soma(10,20))
//FUNCAO QUE RETORNA VALOR

//ARRAY
function somaTudo(numeros){
  var total = 0
  for(var num of numeros){
    total = total + num
  }
  return total
}
var resultado = somaTudo([3,5,7,10,9,12])
console.log(resultado)

//PARAMETRO REST, QUANDO NÃO SEI QUANTOS PARAMETROS SERÃO USADOS.
function endereco(rua, cidade, pais, ...complementos){
            //todos os outros parametros, vao ser armazenadas am cima
  console.log(rua)
  console.log(cidade)
  console.log(pais)
  console.log(complementos)
}
endereco("Rua programador a brodo", "São Paulo", "Brasil", "Estado de SP", "Casa apto","Bloco Q")

//FUNÇÃO JÁ CHAMANDO ELA.

(function autoExecuta(nome){
  console.log("Executei" + nome)
}("Guilherme"));
//PRECISO DEIXAR TODA A FUNÇÃO PROTEGIDA DENTRO DE PARENTESES.

//PODEMOS ARMAZENAR UMA FUNCTION EM UMA VARIAVEL
var subtraidoisnumeros = function subtrai(a,b){
  return a - b
}
console.log(subtraidoisnumeros(10,3))

//FUNCOES ANONIMAS / sem nomes
var subtraiTresNumeros = function (a,b,c){
  return a - b - c
}
console.log(subtraiTresNumeros(15,3,5))

//FUNCOES CALL BACKS - USAM PARAMETROS DE OUTRAS FUNCOES
function somaCallBack(a,b, fnCallBack){
  return fnCallBack(a + b)
}
var multiplica =  function(total){
  return total * 2
}
console.log(somaCallBack(10, 3, multiplica))
console.log()