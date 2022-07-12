const obj1= {
                      name: 'Guilherme',
                      idade: 28,
                      sexo: 'Masculino',
                      }

/*1ª FORMA*/
let copia1obj1 = Object.assign({},obj1) /*O SEGUNDO PARAMETRO É O OBJETO A SER  COPIADO*/
console.log(copia1obj1)


/*2ª FORMA USANDO SPREAD*/
let copia2ob1 = {...obj1}
console.log(copia2ob1) 