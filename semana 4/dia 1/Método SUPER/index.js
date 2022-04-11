class spaceship{
  constructor(name, maxCrew,maxRecommendedVelocity){
  this.name = name
  this.crew = maxCrew
  this.maxVelocity = maxRecommendedVelocity
  this.currentspeed = 0
  }
  speedUp(acceleration){
    this.currentspeed += acceleration
    if (this.currentspeed > this.maxVelocity) {
      alert("Atenção ! Você atingiu " + this.currentspeed + '\nEssa é a velocidade máxima permida: ' + this.maxVelocity)
    }
  }
}
class transportespaceship extends spaceship{
  speedUp(){
    alert('Nave de transporte só aumenta a velocidade em 1km/s')
    this.currentspeed += 1
  }
}
let tranportespaceship = new transportespaceship('Transportadora',4,100)

tranportespaceship.speedUp(200)