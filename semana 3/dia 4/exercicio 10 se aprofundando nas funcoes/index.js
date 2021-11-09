function speedDown(velocity, print){
  let deceleration = 20
  while(velocity > 0){
    print(velocity)
    velocity -= deceleration
  }
  alert("Nave Parada. Comportas abertas")
}

let velocidadedanave = 150

speedDown(velocidadedanave, function(velocity){
  console.log("Velocidade atual: " + velocity)
})