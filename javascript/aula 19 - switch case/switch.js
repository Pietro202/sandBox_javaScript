
const result = prompt('Escolha uma opção: \n1) \n2) \n3)')

let resultNumber = parseFloat(result)

switch (resultNumber) {
    case 1: 
        alert(' O número escolhido foi o 1')
        break
    case 2:
        alert(' O número escolhido foi o 2')
        break
    case 3:
        alert(' O número escolhido foi o 3')
        break
    default:
        alert('Finalizando')

}