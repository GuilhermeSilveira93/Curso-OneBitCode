let spaceshipNames = ['Elemental', 'Darwin', 'Artemis', 'Supernova']
console.log(spaceshipNames)
let removedSpaceships = spaceshipNames.splice(1, 2, 'Deméter', 'Puller', 'Golias')
/*A PARTIR DA POSIÇÃO  1, VAI APAGAR 2 DADOS, E A PARTIR DAI, ADICIONAR OS 3 DADOS*/
console.log(removedSpaceships + ' SPLICE')
console.log(spaceshipNames)


let spaceshipNames2 = ['Elemental', 'Darwin', 'Artemis', 'Supernova']
let extractedNames = spaceshipNames2.slice(1, 3)
console.log(spaceshipNames2)
console.log(extractedNames + ' SLICE')