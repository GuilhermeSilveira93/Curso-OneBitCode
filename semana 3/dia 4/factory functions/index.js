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