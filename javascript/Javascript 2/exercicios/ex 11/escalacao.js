function addPlayer(){
    const name = document.getElementById('name').value
    const position = document.getElementById('position').value
    const number = document.getElementById('number').value

    const confirmation = confirm('Deseja adicionar o jogador ' + name + ' na posição de ' + position + '?')

    if (confirmation){
        const teamList = document.getElementById('teamList')
        const playerLi = document.createElement('li')
        playerLi.id = 'player - ' + number
        playerLi.innerText = position + ': ' + name + ' (' + number + ')'
        teamList.appendChild(playerLi)

        document.getElementById('name').value = ""
        document.getElementById('position').value = ""
        document.getElementById('number').value =""
    }

}

function removePlayer(){
    const number = document.getElementById('numberToRemove').value
    const playerToRemove = document.getElementById('player - ' + number)

    const confirmation = confirm('Deseja remover o jogador ' + playerToRemove.innerText + '?')

    if (confirmation){
       // document.getElementById('teamList').removeChild(playerToRemove)
       playerToRemove.remove()

        document.getElementById('numberToRemove').value = ''
    }
}
