const produtos = [
    {nome: 'Celular', preço: 2000, fragil: true},
    {nome: 'Computador', preço: 2500, fragil: false},
    {nome: 'Tablet', preço: 750, fragil: true},
    {nome: 'Monitor', preço: 970, fragil: true}
]

console.log(produtos.filter(function(p){
    return p.preço >= 1000
}))

const caroo = produtos => produtos.preço >= 1000

const éFragil = produtos => produtos.fragil

console.log(produtos.filter(caroo).filter(éFragil))