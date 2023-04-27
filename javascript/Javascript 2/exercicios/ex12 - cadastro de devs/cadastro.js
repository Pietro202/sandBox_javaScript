function createLabel(text, htmlFor) {
    const label = document.createElement('label')
    label.htmlFor = htmlFor
    label.innerText = text
    return label
}

function createInput(id, value, name, type ="text", placeholder = ""){
    const input = document.createElement("input")
    input.id = id
    input.value = value
    input.name = name
    input.type = type
    input.placeholder = placeholder
    return input
}

const addTechBtn = document.getElementById('addTechBtn')
const form = document.getElementById('devForm')
const developers = []
let inputRows = 0

addTechBtn.addEventListener('click', function(ev){
    const newTec = document.getElementById('newTec')

    const newRow = document.createElement('li')
    const rowIndex = inputRows
    inputRows++
    newRow.id = 'inputRow-' + rowIndex
    newRow.className = 'inputRow'

    const techNameLabel = createLabel('Nome: ', 'TechName - ' + rowIndex)
    const techNameInput = createInput('techName -' + rowIndex, null, 'techName')

    const expLabel = createLabel(' Experiência')
    const id1 = 'expRadio' + rowIndex + '.1'
    const expRadio1 = createInput(id1, '0 - 2 anos', 'techExp' + rowIndex, 'radio')
    const expRadioLabel1 = createLabel('0 - 2 anos', 'techExpLabel', id1)

    const id2 = 'expRadio' + rowIndex + '.2'
    const expRadio2 = createInput(id1, '3 - 4 anos', 'techExp' +rowIndex, 'radio')
    const expRadioLabel2 = createLabel('3 - 4 anos', 'techExpLabel', id2)

    const id3 = 'expRadio' + rowIndex + '.3'
    const expRadio3 = createInput(id1, '5 + anos ', 'techExp' + rowIndex, 'radio')
    const expRadioLabel3 = createLabel('5 + anos ', 'techExpLabel', id3)

    const removeRowBtn = document.createElement('button')
    removeRowBtn.type = 'button'
    removeRowBtn.innerText = 'Remover'
    removeRowBtn.addEventListener('click', function() {
        newTec.removeChild(newRow)

    })

    newRow.append(techNameLabel, techNameInput, expLabel, expRadio1, expRadioLabel1, expRadio2, expRadioLabel2, expRadio3, expRadioLabel3, removeRowBtn)

    newTec.append(newRow)
})

form.addEventListener('submit', function(ev){
    ev.preventDefault()

    const fullNameInput = document.getElementById('fullName')
    const inputRows = document.querySelectorAll('.inputRow')

    let technologies = []
    inputRows.forEach(function(row){
        const techName = document.querySelector('#' + row.id + ' input[name="techName"]').value
        const techExp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value

        technologies.push({ name: techName, exp: techExp })
    })

    const newDev = { fullName: fullNameInput.value, technologies: technologies }
    developers.push(newDev)
    alert('Desenvolvedor Cadastrado')

    fullNameInput.value = ''
    inputRows.forEach(function(row){
        row.remove()
    })
    console.log(developers)
})