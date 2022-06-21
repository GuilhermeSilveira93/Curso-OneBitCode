let spaceShip = "Guilherme"
let newSpaceShip = ""

for (let i = 0; i < spaceShip.length; i++) {
  if (spaceShip[i] == "e") {
    newSpaceShip += "i"
  } else {
    newSpaceShip += spaceShip[i]
  }
}
console.log(newSpaceShip)



//numeros impares
let number = 100
for (let index = number; index > 0; index--) {
  if (index % 2 !== 0) {
    console.log(index + ' impar')
  }else{
    console.log(index + ' par')
  }
}