// usando a forma literal

const obj1 = {}
console.log(obj1)


// objeto em js

const obj2 = new Object('fabio')
console.log(obj2)

// Função construtora

function produto(nome, descricao, preco, desconto){
    this.nome = nome
    this.descricao = descricao
    this.preco = preco
    this.desconto = desconto

    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }
       
    
} 

const prod1 = new produto ('Computador', 'Gamer', 3000, 0.1,)

console.log(prod1.getPrecoComDesconto())