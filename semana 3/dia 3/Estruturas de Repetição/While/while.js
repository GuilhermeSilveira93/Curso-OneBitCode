/*let velocity = 50
let aceleration = 5

  while (velocity <= 100) {
    velocity +=  aceleration
    console.log("acelerando: Estamos a " + velocity + "km/s")
  }
*/
let constellation = "Andromeda"
let pos = 0
let constellationLenght = constellation.length

while(pos < constellationLenght) {
  if (constellation[pos] == "a" || constellation[pos] == "A") {
    console.log(pos)
  }
  pos += 1
}