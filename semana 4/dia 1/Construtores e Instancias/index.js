/*
      ** EM GRANDE MAIORIA, AS CLASSES PODEM SER INSTANCIADAS
        *Grande maioria porque algumas linguagens podem impedir isso
      
      ** INSTANCIA DE UMA CLASSE É O QUE DÁ ORIGEM AO OBJETO.
        *Quando dizemos que uma classe foi instanciada, estamos dizendo apenas que um objeto foi criado a partir de uma classe.

      ** A CLASSE VEM COM UM MÉTODO ESPECIAL QUE CHAMAMOS DE CONSTRUTOR
        *Utilizamos para definir valores iniciais dos atributos de um objeto.
        * Esse método é chamado quando criamos uma instancia de uma classe com a palavra.*/

class EstacaoEspacial {
  constructor(Nome, QuantidaDePlataforma){
    this.Nome = Nome
    this.QuantidaDePlataforma = QuantidaDePlataforma
  }
}
let observatorio = new EstacaoEspacial("Observatório", 40)
console.log(observatorio)
/*------------------------------------------------------------------------*/
class EstacaoEspacial2 {
  constructor(nome, quantidadeplataforma = 10){
    this.nome = nome
    this.quantidadeplataforma = quantidadeplataforma
  }
}
let Helmet = new EstacaoEspacial2("Helmet")
console.log(Helmet)

let Darwin = new EstacaoEspacial2("Darwin", 20)
console.log(Darwin)


class animais{
  constructor(tipo,especie = 'Herbivoro'){
    this.tipo = tipo
    this.especie = especie
  }
}
let leao = new animais('Carnivoro')
console.log(leao)