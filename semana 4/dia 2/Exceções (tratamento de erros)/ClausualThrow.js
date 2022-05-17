class spaceshipweapon{
  constructor(identificador){
    this.identificador = identificador
    this.shotleft = 5
  }
  shoot(){
    console.log("Bang !")
    if (this.shootleft > 0) {
      this.shotleft -= 1
    }else{
      /*DEFININDO QUE MUNIÇÃO MENOR QUE 0 É UM ERRO*/
      throw new Error("Arma " + this.identificador + " sem munição")
    }
    
  }
}

let fenixweapon = new spaceshipweapon(10)
fenixweapon.shoot()
fenixweapon.shoot()
fenixweapon.shoot()
fenixweapon.shoot()
fenixweapon.shoot()
fenixweapon.shoot()
console.log(fenixweapon)