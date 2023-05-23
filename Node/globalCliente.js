require('./global')

console.log(atributo.saudar())

atributo.nome = 'Joao'
console.log(atributo.nome) // o objeto ficou passivel de ser modificado 

//depois eu dei object.freeze no global, entao o nome voltou a ser fabio