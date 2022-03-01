let spaceShipName = prompt("Qual o nome da nave ?")
let invertedName = ""

for (let i = spaceShipName.length/*vai pegar o número de caracteres*/ - 1; i >= 0; i--) {
/* if (spaceShipName[i] == "e") {
    break
  }*/
  invertedName += spaceShipName[i]
}
alert("Nome Originhal: " + spaceShipName + "\nNome após ocultação: " + invertedName)

/*
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  }*/