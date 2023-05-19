const alunos = [
    {nome: 'Joao', nota: 8.9, bolsista: true},
    {nome: 'Maria', nota: 6.9, bolsista: true},
    {nome: 'Jose', nota: 4.5, bolsista: false},
    {nome: 'Miguel', nota: 10, bolsista: false}
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
       console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)