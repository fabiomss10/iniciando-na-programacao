const soma = function (x, y){
    return x + y
}



const imprimirSoma = function (a, b, operacao = soma){
    console.log(operacao(a, b))

}

imprimirSoma(3, 4) // subentende-se que a e b se tornaram o x e y da soma

imprimirSoma(2, 3, function (a, b){
return a - b
})
imprimirSoma(2, 5, multiplicacao = (a, b) => a * b)

console.log(multiplicacao(5, 6))