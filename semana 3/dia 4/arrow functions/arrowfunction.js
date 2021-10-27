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