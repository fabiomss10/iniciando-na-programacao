console.log(typeof Array, typeof new Array, typeof [])


let aprovados = new Array ('Fabio', 'Livia', 'Mariana' )
console.log(aprovados)

// Ou

let aprovados1 = ['Fabio', 'Livia', 'Mariana' ]
console.log(aprovados[0])
console.log(aprovados1[1])
console.log(aprovados[3])
console.log(aprovados.length) // Mostra a quantidade de elementos
aprovados.push('Bia')
console.log(aprovados[3])
console.log(aprovados.length)
aprovados[9] = 'Luiz'
console.log(aprovados)
aprovados.sort()
console.log(aprovados)

let aprovados2 = ['Fabio', 'Livia', 'Mariana' ]
aprovados2.splice(1, 2) // A PARTIR DO ELEMENTO 1, EXCLUI 1 ELEMENTO ( em ordem )
console.log(aprovados2)
aprovados2.splice(1, 0, 'Elemento 1', 'Elemento 2') //NO ELEMENTO 1, NAO TIRA NADA E ADICIONA OS STRINGS
console.log(aprovados2)