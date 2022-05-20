function adicionaremail() {
  let campoemail = document.querySelector('form#email')
  let novoemail = campoemail.children[0].cloneNode(true)
  let contador = campoemail.children.length + 1

  if (contador.length >= 2) {
    novoemail.querySelector('label').innerText = 'Email ' + contador + ':'
    campoemail.appendChild(novoemail)
  } else {
    novoemail.querySelector('label').innerText = 'Email ' + contador + ' :'
    campoemail.appendChild(novoemail)/*APLICAR NO FINAL DO FILHO, APP END CHILD*/
  }
}

function imprimir() {
  let menssagem = ""
  let emails = document.querySelectorAll/*SELECTOR ALL PARA SELECIONAR TUDO*/
  ("input[name='email']")/*PHONE É UMA DIV*/
  emails.forEach((label, input) => {/*label e input, são apenas as posições que a variavel emails vai receber os dados*/
    menssagem += "Email " + (input + 1) + ": " + label.value + "\n"
  })
  alert(menssagem)
  }