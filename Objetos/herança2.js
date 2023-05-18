const pai = {nome:'Matheus', corCabelo:'Loiro' }

const filha1 = Object.create(pai)
filha1.nome = 'Maria'
console.log(filha1)
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {value: 'Bianca', writable: false, enumerable: true}
})
// writable : false / nao pode ser mudado

filha2.nome = 'Carmen'
console.log(filha2.nome)
console.log(`${filha2.nome} tem o cabelo de cor: ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2) {
    filha2.hasOwnProperty(key) ?
    console.log(key) : console.log(`${key} por herança`)
}