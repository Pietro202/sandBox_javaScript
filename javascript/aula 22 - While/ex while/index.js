const name = prompt('Digite seu nome: ')

let places = ""

let contagem = 0

let visit = prompt('Já fez alguma viagem? (sim ou não)')


while (visit === 'sim') {
    let place = prompt('Para qual cidade você já viajou?')
    places += ' - ' + place + "\n" 
    contagem++
    visit = prompt('Viajou para mais lugares? (sim ou nao)')
}

alert ('turista: ' + name + ' já viajou para ' + contagem + ' cidades' + '\nCidades visitadas: \n' + places)