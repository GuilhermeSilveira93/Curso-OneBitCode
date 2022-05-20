function adicionar(){
  let casa = document.querySelectorAll('form#formulariocasa')
  let clonador = casa.cloneNode(true)
  let contador = casa.children.length + 1

  document.body.appendChild(clonador)
}