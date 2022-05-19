function show(){
    let elemento = document.getElementById('name')
    console.log(elemento.value)

    let documentinho = document.getElementsByName('phone')
    console.log(documentinho[0].value)
    /*console.log(document.domain)*/
    let documentinhao = document.querySelectorAll("div#phones input[name = 'phone']")
    console.log(documentinhao[1].value)
    /*console.log(document.domain)*/
}