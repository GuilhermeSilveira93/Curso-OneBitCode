/* 
          ** ANINHAR - TERMO USADO PARA UTILIZADO PARA FALAR QUANDO TEMOS UM TERMO COBERTO POR OUTRO*/

/*
** ARRAYS PODEM ESTAR DENTRO DE OBJETOS
*/

let spaceship = {
  name:"Supernova",
  Type:"Batalha",
  Crew:["Cap. Silva", "Ana Julia", "Thiago"]/*array*/
}
spaceship.Crew.push("Ten. Fernana")/*Push pois é um Array*/
console.log(spaceship.Crew)

/*
**OBJETOS PODEM ESTAR DENTRO DE ARRAYS
*/

let listanaves =[
  {name: "Elemental", crewQuantity:10},
  {name: "Colossus", crewQuantity:8},
  {name:"Helmet", crewQuantity:15}
]
console.log(listanaves[0].name)
console.log(listanaves[1].crewQuantity)

listanaves.forEach(listanaves => {
  console.log(listanaves.name + ' tem ' + listanaves.crewQuantity + ' tripulantes.')
});

/* OBJETOS DENTRO DE OBJETOS*/

let exercito = {
  nome: "Brasileiro",
  tamanho:200,
  capitao:{
    nome:"Nascimento",
    idade:35
  }
}
console.log(exercito.capitao.nome)