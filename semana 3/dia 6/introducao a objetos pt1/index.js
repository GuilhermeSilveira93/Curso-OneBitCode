/*
 **ASSIM COMO OS ARRAYS, TAMBÉM SÃO ESTRUTURAS DE DADOS
      capazes de armazenar e organizar outros dados
**DADOS SÃO ORGANIZADOS ATRAVES DE PROPRIEDADES
**ASSOSCIACAO CHAVE-VALOR
      Chave é o nome da propriedade
      Valor é o valor que esta propriedade vai receber.
**TAMBÉM PODEM ARMAZENAR INTERNAMENTE QUALQUER OUTRO TIPO
      inclusive arrays e outros objetos.
 */

let spaceship = {
      name: "Fenix",
      crew: 7,
      Type: "Batalha"
}
console.log(spaceship)
console.log(spaceship.Type)
console.log(spaceship['name'])

/*adicionando propriedade no objeto*/
spaceship.isHitched = false
console.log(spaceship)

/*outra forma*/
spaceship["shieldLevel"] = 100 /*não gostei dessa*/
console.log(spaceship)

/*CHAMANDO*/
console.log(spaceship.shieldLevel)
console.log(spaceship["isHitched"])