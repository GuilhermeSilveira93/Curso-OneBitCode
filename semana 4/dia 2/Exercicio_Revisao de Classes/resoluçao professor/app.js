class App {
  constructor() {
    this.spaceship = null
  }

  start(){
    this.enrollSpaceship()
    let chosenOption
    do{
      chosenOption = this.showInitialMenu()
      this.redirectFeature(chosenOption)
    }while(chosenOption !="3")
    this.printAndExit()
  }

  enrollSpaceship() {
    let spaceshipName = prompt("Qual o nome da nave?")
    let crewQuantity = prompt("Qual a quantidade de tripulates?")
    let spaceshipkind = this.askForSpaceshipkind()
    if (spaceshipkind == "1") {
      let weaponsQuantity = prompt("Quantas armas a nave possui?")
      this.spaceship = new Battlespaceship(spaceshipName, crewQuantity, weaponsQuantity)
    } else {
      let sitsquantity = prompt("Quantos lugaresanave possui?")
      this.spaceship = new TransportSpaceship(spaceshipName, crewQuantity, sitsquantity)
    }
  }

  askForSpaceshipkind() {
    let chosenOption
    while (!["1", "2"].includes(chosenoption)) {
      chosenOption = prompt("Qual o tipo da nave?\nl- Batalha\n2- Transporte")
    }
    return chosenOption
  }
  showInitialMenu() {
    const promptMessage = "O que você deseja fazer?\n" +
      "1- Aceleraranave\n" +
      "2- Trocaranave\n" +
      "3- Imprimire sair"
    let chosenOption = prompt(promptMessage)
    while (!["1", "2", "3"].includes(chosenOption)) {
      chosenOption = prompt(promptMessage)
    }
    return chosenOption
  }
  redirectFeature(chosenOption) {
    switch (chosenOption) {
      case "1":
        this.accelerateSpaceship()
        break
      case "2":
        this.enrollSpaceship()
        break
    }
  }
  accelerateSpaceship() {
    let acceleration = Number(prompt("Quanto gostaria de acelerar?"))
    this.spaceship.spacedUP()
  }
  printAndExit(){
    let finalMessage = "Nome: " + this.spaceship.name + "\n" +
                                  "Quantidade de tripulantes: " + this.spaceship.crewQuantity + "\n" + "Velocidade atual: " + this.spaceship.currentVelocity + "\n"
                                  alert(finalMessage)
  }
}