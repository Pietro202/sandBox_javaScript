function show(){

    //para selecionar elementos pelo ID
    const contactList = document.getElementById('contact1')
    console.log(contactList)

    //para selecionar elementos pelo nome
    const listElements = document.getElementsByTagName('li')
    console.log(listElements)

    //para selecionar elementos pelo Classe
    const contactInputs = document.getElementsByClassName('contact-input')
    console.log(contactInputs)

    //para selecionar elementos por query select (ele devolve uma nodeList com todos os campos do caminho selecionado)
    const contacts = document.querySelectorAll('#contact-list > li > label')
    console.log(contacts)

    //Para selecionar apenas um elemento da lista utilizar apenas querySelector, assim ele devolve somente o primeiro elemento no nome ao invés de uma lista)

}