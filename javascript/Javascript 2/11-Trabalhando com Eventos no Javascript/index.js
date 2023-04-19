function register(ev){
    console.log(ev)
    const sectionElement = ev.target.parentNode // target.parentNode é para buscar o pai do evento no caso o section
    const username = sectionElement.children.username.value
    const password = sectionElement.children.password.value
    const passwordConfirmation = sectionElement.children.passwordConfirmation.value

    if (password===passwordConfirmation){
        alert('Paciente: ' + username + ' cadastrado')
    }  else{
            alert('As senhas não são iguais')
        }

}

const button = document.getElementById('register-button');

button.addEventListener('click', register)

function removeEvent(){
    button.removeEventListener('click', register)
    alert('Evento removido')
}

button.addEventListener('mouseover', function(ev){
    console.log(ev.currentTarget)
})