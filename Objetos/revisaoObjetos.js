const produto = new Object

produto.preco = 2000
produto.nome = 'computador'
produto['desconto?'] = 'acima de gastos de 5000'

console.log(produto)

delete produto['desconto?']

console.log(produto)


let carroDaFamilia = {
    condutores: [{
        nome: 'Marcelo',
        idade: 50,
        endereço: {
            rua: 'ABC',
            numero: 32
        }
    },
        { nome: 'Fabio',
        idade: 18,
        endereço:{
            rua: 'BAC',
            numero: 10
        }

    }
]
}

console.log(carroDaFamilia)


var conta = {
    ag: '0000',
    banco: {
      cod: 033,
      id: 9,
      nome: 'Santander'
    }
  }

  console.log(conta)