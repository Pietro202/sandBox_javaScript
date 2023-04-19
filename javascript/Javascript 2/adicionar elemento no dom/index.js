function addInput(){
    const ul = document.getElementById('inputs') // pega o nó do html para usar

    const newLi = document.createElement('li') // criando novo elemento
    newLi.className = 'list-item' // colocando o nome da classe para o novo elemento
    newLi.innerText = 'Novo Input' //para inserir na pagina o texto 

    const newInput = document.createElement('input')// criando novo elemento input
    newInput.type = 'text' // colocando o tipo de input
    newInput.name = 'input'

    newLi.appendChild(newInput) //amarrando os nós (colocando o newInput dentro do newLi)
    ul.appendChild(newLi) // e colocando o newLi dentro do ul

}