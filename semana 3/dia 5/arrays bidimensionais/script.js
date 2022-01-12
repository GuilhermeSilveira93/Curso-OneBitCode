let hitchedSpaceships = [['Elemental',7],['Helmet',13],['Golias',5],['Supernova',10]]
/*TEMOS UM ARRAY GERAL, E VAIROS ARRAYS DENTRO DELE, INTERNAMENTE*/
hitchedSpaceships.push(['Colossus',8])
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