let spaceship = {};
spaceship.velocity = 0;
spaceship.name = prompt("Qual o nome da nave:");
spaceship.type = prompt("Qual o tipo da nave:");
spaceship.maxVelocity = Number(prompt("Digite a velocidade máxima da nave?"));
spaceship.finalMessage = function () {
  alert(`
    Nome da espaçonave: ${spaceship.name}
    Tipo da espaçonave: ${spaceship.type}
    Velocidade atual da espaçonave: ${spaceship.velocity} km/s
  `);
};
spaceship.acceleration = function (speed) {
  speed = Number(prompt("Quanto você quer acelerar?"));
  this.velocity += speed;
  if (this.velocity > this.maxVelocity) {
    alert(`
        PERIGO! Risco de combustão!
        Velocidade atual da espaçonave: ${this.velocity} km/s
        Velocidade máxima permitida: ${this.maxVelocity} km/s
      `);
  };
}
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