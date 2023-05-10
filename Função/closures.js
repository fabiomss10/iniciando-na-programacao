/*Closure é um bloco criado quando uma função é declarada, nele é possivel acessar variaveis declaradas 
dentro e fora do bloco
Contexto léxico:                                                                */


let x = "Global"
 
function meuMetodo() {
    let x = "Local"
    return x
}
 
let teste = meuMetodo()
console.log(teste)
console.log(x)