class SpaceShip{
  constructor(name){
    this.name = name
    this.velocity = 0
  }
  speedUp(acceleration){/*é uma função/metodo*/
  this.velocity += acceleration
  }
}
let artemis = new SpaceShip("Artemis")
console.log(artemis)
artemis.speedUp(10)
artemis.speedUp(15)
console.log(artemis)