console.log( this === global)
console.log( this === module)

console.log( this === module.exports)
console.log( this === exports)
console.log()
console.log()

function exec(){
    console.log('dentro de uma função é diferente, veja...')
    console.log( this === global)
    console.log( this === module)

    console.log( this === module.exports)
    console.log( this === exports)
}

console.log(exec())

/*              !!!!!!!!!!!!!!!!!!
OU SEJA: o this DENTRO de uma função, QUE NÃO SEJA ARROW FUNCTION, aponta para o global,
e o this FORA de uma funçao, aponta para o module.exports 
*/