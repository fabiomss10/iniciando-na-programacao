function getPreco(moeda = 'R$', imposto = 0){
    return `${moeda} ${this.preco * (1 - this.desconto) * (1 + imposto)}`
}

const carro = {
    preco: 20000,
    desconto: 0.2,
   getPreco
}

console.log(carro.getPreco())

console.log(getPreco.call(carro, '$', 0.45))
console.log(getPreco.apply(carro, ['$', 0.70]))