const marcas = ['Nike', 'Adidas', 'NewBalance']

function imprimirOrdem(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
   
}


marcas.forEach(imprimirOrdem)// para cada elemento encontrado, retornar para o array e mostrar no console novamente

