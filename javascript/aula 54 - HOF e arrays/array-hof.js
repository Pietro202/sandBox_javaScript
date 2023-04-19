const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
  ]

//   let name = []

  //posso fazer usando o for (para puxar somente os nomes)

//   for(i=0; i<personagens.length; i++){
//     const personagem = personagens[i]
//     nomes.push(personagem.nome)
//   }

// usando o Map
  let nome = personagens.map(function(personagem){
    return personagem.nome
  })

  console.log(nome)

  // Filter serve para filtrar

  const orcs = personagens.filter(function(personagem){
    return personagens.raca === "Orc"
  })

  console.log(orcs)

  // reduce usado para usar o valor do array para criar novo array com valores usados no array 1

  const valorTotal = personagens.reduce(function(valorAcumulado, personagem){
    return valorAcumulado + personagem.nivel
  },0) //aqui vai o valor inicial 

  console.log(valorTotal)

  const racas = personagens.reduce(function(valorAcumulado, personagem){
    if (valorAcumulado[personagem.raca]){
        valorAcumulado[personagem.raca].push(personagem)
    }else {
        valorAcumulado[personagem.raca] = [personagem]
    }
    return valorAcumulado
    },{})

    console.log(racas)

// sort -> usado para ordenar o array (pode ser do maior para o menor ou o contrario, ele altera o próprio array)

personagens.sort(function(a,b){
    return a.nivel - b.nivel // ele pegara o menor numero e colocará na frente, para fazer decrescente é só inverter
})

console.log(personagens)