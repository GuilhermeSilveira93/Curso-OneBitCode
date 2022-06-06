function save(){
  event.preventDefault()/* impede que o evento tenha um comportamento padrão*/
  var nome = document.querySelector("input[name='name']").value
  var programingLang = document.querySelector("select[name='programming-lang']").value
  alert("nome: " + nome + '\nLinguagem: ' + programingLang)
}