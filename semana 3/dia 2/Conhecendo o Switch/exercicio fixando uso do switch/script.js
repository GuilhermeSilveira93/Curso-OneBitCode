let distance = prompt("Informe a distancia em anos Luz")
let optionList = prompt("Digite a opção:\n1- Parsec (pc)\n2- Unidade Astronomia (AU)\n3- Quilometros(km)")
let convertida = 0

switch (optionList) {
  case "1":
    convertida = distance / 3.262
    alert("Distancia em Anos Luz: " + distance +"\n Distancia Parsec: " + convertida)
    break;
  case "2":
    convertida = distance * 63241
    alert("Distancia em Anos Luz: " + distance +"\n Unidade Astronomia (AU): " + convertida)
    break;
  case "3":
    convertida = distance * 9.5 * Math.pow(10, 12)
    alert("Distancia em Anos Luz: " + distance +"\n Distancia em Quilometros(km): " + convertida)
  break;

  default:
    alert("Distancia em Anos Luz: " + distance +"\nUnidade não identificada: Conversão fora do escopo")
    break;
}