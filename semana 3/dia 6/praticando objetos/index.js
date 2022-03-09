/*DECLARANDO VARIAVEIS*/
let spaceship = {};/*objeto vazio*/
spaceship.velocity = 0;/*adicionando objetos*/
spaceship.name = prompt("Qual o nome da nave:");/*adicionando objetos*/
spaceship.type = prompt("Qual o tipo da nave:");/*adicionando objetos*/
spaceship.maxVelocity = Number(prompt("Digite a velocidade máxima da nave?"));/*adicionando objetos*/

/*colocando uma função dentro do objeto*/
spaceship.finalMessage = function () {
  alert(`
    Nome da espaçonave: ${spaceship.name}
    Tipo da espaçonave: ${spaceship.type}
    Velocidade atual da espaçonave: ${spaceship.velocity} km/s
  `);
};
/*-------------------------------------------------------------*/

/*colocando uma função dentro do objeto*/
spaceship.acceleration = function (speed) {
  speed = Number(prompt("Quanto você quer acelerar?"));
  this.velocity += speed;
  if (this.velocity > this.maxVelocity) {
    alert(`
        PERIGO! Risco de combustão!
        Velocidade atual da espaçonave: ${this.velocity} km/s
        Velocidade máxima permitida: ${this.maxVelocity} km/s
      `);/* this serve para abreviarmos, como faz mensão a mesma variavel, usamos os o THIS para não ter que escrever, nesse caso, o spaceship . varias vezes. */
  };
}
/*----------------------------------------------------------------*/

/*FUNÇÃO PRINCIPAL, QUE VAI CHAMAR TODAS*/
spaceship.speedUp = function (option) {
  do {
    option = prompt(`
    ESCOLHA UMA DAS OPÇÕES:
    1- Acelerar a Nave:
    2- Parar a nave:
  `)
    switch (option) {
      case "1":
        spaceship.acceleration();
        break;
      case "2":
        spaceship.finalMessage();
        break;
    };
  } while (option !== "2");
};
spaceship.speedUp();
/*----------------------------------------------------------------*/