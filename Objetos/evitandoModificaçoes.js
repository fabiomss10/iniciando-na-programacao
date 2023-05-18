//Object.preventExtensions    :   não deixa adiconar mais nada ao objeto, mas deixa deletar

const produto = Object.preventExtensions({
    nome: 'Computador', preço: 2000
})

produto.promoçao = 0.1
console.log(produto.promoçao)
console.log(produto)
console.log(Object.isExtensible(produto))
delete produto.preço
console.log(produto)
console.log()
//object.seal    :   nao consegue adicionar nem remover atributos, mas permite modificar

const pessoa = {
    nome: 'Fabio',
    idade: 19
}
Object.seal(pessoa)
console.log(pessoa)
delete pessoa.idade
console.log(pessoa)
pessoa.idade = 20
console.log(pessoa)
console.log(Object.isSealed(pessoa))

//object.freeze   :   não consegue adicionar nem remover e nem modificar os atributos

const carro = {nome: 'civic', ano: 2023}
Object.freeze(carro)
console.log(carro)
carro.nome = 'city'
console.log(carro.nome)
delete carro.nome
console.log(carro.nome)