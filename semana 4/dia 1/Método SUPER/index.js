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
  constructor(name, maxCrew,maxRecommendedVelocity,maxloadwight){   /*ESTOU PUXANDO AS CARACTERISTICAS DO SPACESHIP */
    super(name, maxCrew,maxRecommendedVelocity) /* E REPASSANDO AQUI */
    this.maxloadwight = maxloadwight
  }
  speedUp(acceleration){
    acceleration /= 2
    alert('incrementando velocidade em ' + acceleration +'  km/s')
    super.speedUp(acceleration)
  }
}
let transportespaceship1 = new transportespaceship('Transportadora',4,100,400)

console.log(transportespaceship1)

transportespaceship1.speedUp(210)