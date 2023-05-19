let array = [1, 2, 3, 4, 5]

let resultado = array.map(function(e){
    return e * 2
})

console.log(resultado)

let soma10 = array.map(function(e){
    return e + 10
})

let triplo = array.map(function(e){
    return e * 3
})

let paraDinheiro = array.map(function(e){
    return `R$${parseFloat(e).toFixed(2).replace(',','.')}`
})

const soMa10 = e => e + 10
const x3 = e => e*3
const viraDinheiro = e => `R$${parseFloat(e).toFixed(2).replace(',','.')}`

let resultadoDeTudo = array.map(soMa10).map(x3).map(viraDinheiro)


console.log(resultadoDeTudo)
console.log(soma10)
console.log(triplo)
console.log(paraDinheiro)