let hitchedSpaceships = [
  ['Elemental', 7],
  ['Helmet', 13],
  ['Golias', 5],
  ['Supernova', 10]
]
console.log(hitchedSpaceships)
/*TEMOS UM ARRAY GERAL, E VARIOS ARRAYS DENTRO DELE, INTERNAMENTE*/
hitchedSpaceships.push(['Colossus', 8])
console.log(hitchedSpaceships)
/*-----------------------------------*/
console.log(hitchedSpaceships[3][0])
/*Aqui ele vai pegar o 3º array, e o indice 0, obtendo apenas a 1ª informação*/

let spaceshipsList = ["Colossus", "Helmet", ["Fenix", "Revivor"], "Supernova"]
spaceshipsList.pop()
spaceshipsList.pop()
spaceshipsList.push("Elemental")
spaceshipsList.unshift("Eagle")
spaceshipsList.shift()
spaceshipsList.unshift("")
console.log(spaceshipsList)

let novoarraybidimencional = [
  ['temos', 'um', 'array'],
  ['temos', 'outro', 'array', ['tridimencional']]
]
console.log(novoarraybidimencional[1][3][0])
/*ARRAY DE 3 DIMENÇÕES.*/