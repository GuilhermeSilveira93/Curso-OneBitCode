//TAMBÉM SÃO FUNÇÕES ANONIMAS, NÃO POSSUEM NOME.

const doubleVelocity = (velocity) => {
          //não fazemos mais com function(velocity){}
          // apenas abrimos () e colocamos a seta =>
  return velocity * 2
}
console.log(doubleVelocity(60))

//PODEMOS SIMPLIFICAR AINDA MAIS A FUNÇÃO

const doubleVelocity1 = (velocity) => velocity * 2
//ISSO SÓ É POSSIVEL, POIS TENHO APENAS 1 LINHA DE COMANDO DEPOIS DAS CHAVEZ {}

console.log(doubleVelocity1(100))

//simplificando ainda mais:
const doubleVelocity2 = velocity => velocity * 2
                    //Parametro     //Retorno

//-------------------------------------------------------------//

// Arrow Function é uma simplificação de uma função Anônima. Ex:
const doubleVelocity = (velocity) => {
  return velocity * 2
}

console.log(doubleVelocity(10))

///////////////////////////////////////////////////////////////////
// Quando temos apenas uma linha (como por exemblo o return), podemos simplificar mais ainda.
const doubleVelocity = (velocity) => velocity * 2

console.log(doubleVelocity(10))

///////////////////////////////////////////////////////////////////
// Quando tempo apenas um parâmetro sendo passado para a função, pode simplificar mais ainda:

const doubleVelocity = velocity => velocity * 2

console.log(doubleVelocity(10))