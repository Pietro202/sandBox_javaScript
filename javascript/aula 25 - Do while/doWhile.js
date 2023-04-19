let velocity = 0

do {
    alert('Velocidade é de ' + velocity + 'Km/h')
    velocity -=20
} while (velocity>0)

alert('Velocidade final ' + velocity + 'km/h')

// Vai diminuir a velocidade mesmo que inicialmente seja = 0, pois ele roda uma vez o código.