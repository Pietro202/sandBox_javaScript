function addContact(){
    const contactSection = document.getElementById('contactSection')

    const h3 = document.createElement('h3')
    h3.innerText = 'Contato'

    const ul = document.createElement('ul')

    const nameLi = document.createElement('li')
    nameLi.innerText = 'Nome: '
    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.name = 'fullname'
    nameLi.appendChild(nameInput)
    ul.appendChild(nameLi)
    ul.appendChild(document.createElement('br'))

    const phoneNumber = document.createElement('li')
    phoneNumber.innerText = 'Telefone: '
    const phoneNumberInput = document.createElement('input')
    phoneNumberInput.type = 'text'
    nameInput.name = 'phoneNumber'
    phoneNumber.appendChild(phoneNumberInput)
    ul.appendChild(phoneNumber)
    ul.appendChild(document.createElement('br'))

    const addressLi = document.createElement('li')
    addressLi.innerHTML = '<label for = "adress">Endereço: </label>'
    const addressInput = document.createElement('input')
    addressInput.type = 'text'
    addressInput.name = 'adress'
    addressLi.id = 'adress'
    addressLi.appendChild(addressInput)
    ul.appendChild(addressLi)
    ul.appendChild(document.createElement('br'))


    contactSection.append(h3, ul) // o append é usado para adicionar mais de um elemento ao mesmo tempo no html

}

function removeContact(){
    const contactSection = document.getElementById('contactSection') //selecionando o nó HTML
    const titles = document.getElementsByTagName('h3') //elemento a ser removido
    const contacts = document.getElementsByTagName('ul')

    contactSection.removeChild(titles[titles.length -1]) //removendo o ultimo da posição "tamanho"
    contactSection.removeChild(contacts[contacts.length -1])
}