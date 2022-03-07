/*
  ** AS FUNÇÕES DE INTERAÇÃO QUE VEREMOS SÃO HOF
      enviamos callbacks(funcoes que enviamos como parametros)
  ** O CALLBACK É CHAMADO PARA CADA ELEMENTO DO ARRAY
  ** SEGUE O SEGUINTE FORMATO:

array.funcaoDeInterar(function(elementoAtual, indice, array){
  <corpo da função
})
espera um callback que receba como parametro o elemento atual, o indice e o array completo. */

let hitchedSpaceships = ['Demeter', 'Darwin', 'Supernova', 'Fenix', 'Puller']

hitchedSpaceships.forEach(function (currentSpaceship, index) {
  console.log('Nave: ' + currentSpaceship + '\nIndice: ' + index)
})

let hitchedSpaceshipsUpecased = ['Demeter', 'Darwin', 'Supernova', 'Fenix', 'Puller']
let SpaceshipsUpecased = hitchedSpaceshipsUpecased.map(function (currentSpaceship) {
  let upcased = currentSpaceship.toUpperCase()
  return upcased
})
console.log(SpaceshipsUpecased)

let hitchedSpaceshipsfilter = ['Demeter', 'Darwin', 'Supernova', 'Fenix', 'Puller']
let Spaceshipsfilter = hitchedSpaceshipsfilter.filter(element => {
  return element.length >= 7
})
console.log(Spaceshipsfilter)

let hitchedSpaceshipsfind = ['Demeter', 'Darwin', 'Supernova', 'Fenix', 'Puller']
let Spaceshipsfind = hitchedSpaceshipsfind.find(element => {
  return element.length >= 7
})
console.log(Spaceshipsfind)