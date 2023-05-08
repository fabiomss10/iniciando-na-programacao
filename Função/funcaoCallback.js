const marcas = ['Nike', 'Adidas', 'NewBalance']

function imprimirOrdem(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
   
}

(imprimirOrdem(marcas[0], 0))
console.log()
marcas.forEach(imprimirOrdem)

