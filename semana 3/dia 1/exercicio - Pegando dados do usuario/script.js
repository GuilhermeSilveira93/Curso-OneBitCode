alert("Bem-vindo ! A seguir pediremos que informe alguns dados.")
let name = prompt("Qual seu nome ?")
let age = prompt("Qual sua idade ?")
let confirmation = confirm("Sua idade é " + age + " anos ?")
if (confirmation == true) {
  confirmation = 'Sim !'
} else {
  confirmation = 'Não !'
}
alert("Nome: " + name + "\nIdade: " + age + "\nConfirmação: " + confirmation)