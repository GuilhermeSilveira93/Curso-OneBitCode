function criarcelular(marca,modelo,numero,capacidade){
  return { /*FUNÇÃO IRÁ RETORNAR A ESTRUTURA*/
    numero: numero,
    marca: marca,
    modelo: modelo,
    capacidade: capacidade,
    tamanhoTela: {
      horizontal: 1080,
      vertical: 1920
    },
    ligar:function () {
      console.log('Fazendo uma Ligação.')
    }
  }
}
const xiaomi = criarcelular('Xiaomi','Mi  9','19971357855','128gb')
console.log(xiaomi)


function teste(numero,marca,modelo,capacidade,tamanhoTela){
  this.numero = numero,
  this.marca = marca,
  this.modelo = modelo,
  this.capacidade = capacidade,
  this.tamanhoTela = tamanhoTela
  ligar = function(){
    console.log('Telefone de teste fazendo ligação.')
  }
}
const celular2 = new teste('1996181717','Apple','Iphone 13 Pro','512gb', '1920px x 1080px')
/*TEM QUE COLOCAR O NEW, SE NÃO ELE NÃO RECEBE OS PARAMETROS.*/
console.log(celular2)