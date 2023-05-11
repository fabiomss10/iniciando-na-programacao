/*9) O cardápio de uma lanchonete é o seguinte:
Código |Descrição do Produto   |Preço
100    |Cachorro Quente        |R$ 3,00
200    |Hambúrguer Simples     |R$ 4,00
300    |Cheeseburguer          |R$ 5,50
400    |Bauru                  |R$ 7,50
500    |Refrigerante           |R$ 3,50
600    |Suco                   |R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente   */


function lanchonete(codigo, quantidade){
    switch(codigo){

        case 100:
            return console.log(`Você comprou ${quantidade} cachorro quente. E Ficou no valor de R$${quantidade * 3}`)
            break

        case 200:
            return console.log(`Você comprou ${quantidade} Hamburguer(es) simples. E Ficou no valor de R$${quantidade * 4}`)
            break

        case 300:
            return console.log(`Você comprou ${quantidade} Cheeseburguer(s). E Ficou no valor de R$${quantidade * 5.50}`)
            break

        case 400:
            return console.log(`Você comprou ${quantidade} Bauru(s). E Ficou no valor de R$${quantidade * 7.50}`)
            break

        case 500:
            return console.log(`Você comprou ${quantidade} Refrigerante(s). E Ficou no valor de R$${quantidade * 3.50}`)
            break

        case 600:
            return console.log(`Você comprou ${quantidade} Suco(s). E Ficou no valor de R$${quantidade * 2.80}`)
            break

        default:
            console.log('Produto não existente')    
    }
}

lanchonete(200, 5)
lanchonete(400, 6)
lanchonete(700, 90)
