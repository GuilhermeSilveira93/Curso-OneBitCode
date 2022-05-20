function addNewPhone() {
  let phoneform = document.querySelector("form#phones")
  let newphone = phoneform.children[0].cloneNode(true)
  let phonePosition = phoneform.children.length + 1


  newphone.querySelector('label').innerText = "Telefone " + phonePosition + ": "
  phoneform.appendChild(newphone)/*APLICAR NO FINAL DO FILHO, APP END CHILD*/
  console.log(phoneform.children)
}

function printPhones() {
let message = ""
let phones = document.querySelectorAll
("input[name='phone']")/*PHONE É UMA DIV*/
phones.forEach((phone, index) => {
  message += "Telefone " + (index + 1) + ": " + phone.value + "\n"
})
alert(message)
}