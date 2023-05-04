function fazerSoma(a, b){
    console.log(a + b)
}
fazerSoma(10, 15)
//Pode colocar mais numeros além de apenas 2, mas menos que 2 nao
// se tiver menos do que 2 numeros, ira retornar NaN (not a number)


//função com retorno
function soma(a, b = 0){
    return a + b
}

console.log(soma(2 + 4))
console.log(soma(2))

//Função dentro da variavel

const somar = function(a, b = 0){
    return a + b
}
console.log(somar(2, 4))

//armazenando uma função ARROW ( => ) em uma variavel

const somas = (a, b = 0) => {
    return a + b
}

console.log(somas(5, 3))

//Retorno implicito


const subtracao = (a, b) => a - b
console.log(typeof subtracao)
console.log(subtracao(3, 1))