const hitchedSpaceships = [
  ["Fenix", 8, true],
  ["Golias", 10, true],
  ["Helmet", 5, false],
  ["Elemental", 3, true],
  ["Darwth", 15, false]
];

let filtrado = hitchedSpaceships.filter(elemento =>{
  return elemento[1] >= 9
}).map(elemento =>{
  return elemento[0]
})

let engatependente = hitchedSpaceships.findIndex(elemento => {
  return elemento[2] == false
})+1

let caixaalta = hitchedSpaceships.map(elemento =>{
  return elemento[0].toUpperCase()
})

let mensagem = (filtrado + ' Possuem mais de 9 tripulantes' + '\nPlataformas com engate pendente : ' + engatependente + '\nNaves : ' + caixaalta)

window.alert(mensagem)