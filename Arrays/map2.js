const carrinho = [
    '{"nome": "lapis", "preço": "2" }',
    '{"nome": "borracha", "preço": "6" }',
    '{"nome": "caneta", "preço": "3" }',
    '{"nome": "tesoura", "preço": "10.50" }',
]

const paraObjeto = json => JSON.parse(json)  // de JSON para objeto
const apenasPreco = produto => produto.preço

let resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)