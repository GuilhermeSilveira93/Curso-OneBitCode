let name = prompt("Qual seu nome, piloto ?")
let velocity = 0
let pilotspeed = prompt("A que velocidade gostaria de acelerar a nave ?")
let confirmation = confirm("A velocidade escolhida é " + pilotspeed + " deseja mudar ?")
  if(confirmation == true){
    pilotspeed = prompt("digite a velocidade desejada.")
  }if(pilotspeed <=0){
    alert("Nave está parada. Considere partir e aumentar a velocidade")
  }else if(pilotspeed < 40){
    alert("Você está devagar, podemos aumentar mais")
  }else if(pilotspeed >= 40 && pilotspeed < 80){
    alert("Parece uma boa velocidade para manter")
  }else if(pilotspeed >= 80 && pilotspeed < 100){
    alert("Velocidade alta, considere diminuir")
  }else {
    alert("Velocidade perigosa. Controle automático forçado.")
  }
  alert("Piloto: " + name + "\nVelocidade: " + pilotspeed + "km/s")