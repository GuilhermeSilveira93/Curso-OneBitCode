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