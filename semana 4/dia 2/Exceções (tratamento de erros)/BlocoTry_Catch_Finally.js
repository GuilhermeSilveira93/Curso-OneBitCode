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
  reload(){
    this.shotleft = 5
  }
}

let fenixweapon = new spaceshipweapon(10)
try {
fenixweapon.shoot()
fenixweapon.shoot()
fenixweapon.shoot()
fenixweapon.shoot()
fenixweapon.shoot()
fenixweapon.shoot()
}catch(e){
  console.log(e.message)
  fenixweapon.reload()
}finally{
  console.log("Arma deu bons tiros")
}
/*FINALLY É UM BLOCO OPCIONAL*/
console.log(fenixweapon)