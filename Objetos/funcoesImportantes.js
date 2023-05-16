const p1 = {
  nome: "Fabio",
  sobrenome: "Santos",
  idade: 19,
}

console.log(Object.keys(p1))
console.log(Object.values(p1))
console.log(Object.entries(p1)) // devolve um array, com arrays internos com cada chave e valor


Object.defineProperty(p1, 'DataDeNascimento', {
    enumerable: true,
    writable: false,
    value: '12/04/2004'
}) 

console.log(p1.DataDeNascimento)
console.log(p1)
