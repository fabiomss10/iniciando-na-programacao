const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


//no caso abaixo, quando o indice 5 fosse aparecer, ele encerrava a sequencia dos indices
for(indice in numeros){
    if(indice == 5) {
        break
    }
    console.log(`${indice} = ${numeros[indice]}`)
}


//já nesse caso, ele apenas pulou o indice 5
for(indice2 in numeros){
    if(indice2 == 5) {
        continue
    }
    console.log(`${indice2} = ${numeros[indice2]}`)
}

externo: for (a in numeros) {
    for(b in numeros) {
        if( a == 2 && b == 3) break externo
        console.log(`par de numeros: ${a} e ${b}`)
    }
   
}

console.log('fim!')