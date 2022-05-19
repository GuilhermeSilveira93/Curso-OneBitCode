function addNewPhone() {
  const phoneform = document.querySelector("form#phones")
  const newphone = phoneform.children[0].cloneNode(true)
  const phonePosition = phoneform.children.length + 1
  newphone.querySelector('label').innerText = "Telefone " + phonePosition + ": "
  phoneform.appendChild(newphone)
  console.log(phoneform.children)
}

function printPhones() {
let message = ""
const phones = document.querySelectorAll
("input[name='phone']")
phones.forEach((phone, index) => {
  message += "Telefone " + (index + 1) + ": " + phone.value + "\n"
})
alert(message)
}