let velocity = 110
/*------------------------------IF NORMAL----------------------*/
  if (velocity < 40) {
    console.log("Velocidade muito baixa.")
  }else if (velocity <=100) {
      console.log("Dentro da velocidade, continue assim.")
    }else{
      console.log("velocidade de risco")
    }
/*---------------------------IF NORMAL----------------------*/
/*------------------------IF de uma linha-------------------*/

//só é recomendado se for pequeno
(velocity > 100) ? console.log("velocidade maior que 100") : console.log("Velocidade baixa.")
/*------------------------IF de uma linha-------------------*/