const notas = [6.2, 7.3, 8.6, 9.2]

for(let i in notas) {
    console.log(i, notas[i])
}

// o IN fez com que o i se tornasse o indice de cada elemento do array


const fabio = {
    sobrenome: 'santos',
    cachorro: 'luke',
    tamanhoCamisa: 'M',
    peso: 64
    
}

for(let caracteristica in fabio){
    console.log(`${caracteristica} = ${fabio[caracteristica]}`)
}


