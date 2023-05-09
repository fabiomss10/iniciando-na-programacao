function criarProduto(nome, preço, desconto){
   console.log(`${nome}, preço:${preço * (1 - desconto)} já com o desconto de:${desconto}`)
}


criarProduto('computador', 2000, 0.40)
criarProduto('tablet', 1000, 0 )
//ou pode ser escrito assim:

function criarProduto2(produto, preco, promoçao){
    return{
        produto,
        preco,
        promoçao: 0.2

    }
 }
console.log(criarProduto2('carro', 50000))