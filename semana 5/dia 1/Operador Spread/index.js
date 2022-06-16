let spaceship =[ 'Colossus',
                          'Artemis',
                          'Fenix'
]

console.log(...spaceship)
console.log(spaceship)


function equipe(message, names) {
  names.forEach(name => console.log(`${message}${name}`))
}
equipe("Seja Bem-vindo", [" Arthur"," Jake"," Melissa"])

function equipe2(message, ...names) {
  names.forEach(name => console.log(`${message}${name}`))
}
equipe2("Adeus, ", " Pedro"," Beatriz"," Layane")