function showInfo(){
  let name = document.querySelector("input[name='name']").value
  let favoriteColor = document.querySelector("select[name='color'] option:checked").text
  let likeprogramin = document.querySelector("input[name='like-programming']:checked").value
  /*PEGANDO VARIOS VALORES DE INPUT */
  let developerOptions = document.querySelectorAll("input[name='developer-options']:checked")
  let optionValue = []/*vai receber todos os dados*/
  developerOptions.forEach(e => {optionValue.push(e.value)}) 
  let optionsChecked = optionValue.join(", ")
  alert("Nome: " + name + "\nCor Primaria: " + favoriteColor + "\nGosta de Programar ? " + likeprogramin + "\nConhecimentos em programação: " + optionsChecked)
}