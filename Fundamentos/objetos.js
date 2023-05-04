const pessoa = {}

pessoa.nome = 'Fábio'
pessoa.idade = 19
pessoa.cidade = 'Aparecida'
pessoa['Está namorando?'] = 'Sim'
console.log(pessoa)

const pessoa2 = {
    nome : 'Joao',
    idade : 23,
    cidade : 'Guaratingueta'
    ['Está Namorando?'] = 'Nao'
}
console.log(pessoa2)