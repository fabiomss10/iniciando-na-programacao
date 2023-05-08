const pessoa = {
    saudaçao: 'Olá',
    falar(){
        console.log(this.saudaçao)
    }
}

pessoa.falar()


const falar = pessoa.falar
falar() // undefined

const falarDePessoa = pessoa.falar.bind(pessoa)

falarDePessoa()