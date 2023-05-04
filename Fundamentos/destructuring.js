const pessoa = {
    nome: 'Fábio',
    idade: 19,
    endereço:  {
        rua: 'Praça são Benedito',
        numero: 71
    }
}

// Para acessar alguns elementos do objeto, basta fazer

const { idade, endereço } = pessoa
console.log('Essa pessoa tem', idade, "anos.", 'E mora no endereço:', endereço)

//pode diminuir o tamanho da variavel assim:

const {nome: n, idade: i} = pessoa
console.log(n, i)