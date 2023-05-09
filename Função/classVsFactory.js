class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é: ${this.nome}`)
    }
}

const p1 = new Pessoa('Fábio')
p1.falar()

const criarPessoa = nome => {
    return {
        criarPessoa: () => console.log(`Meu nome é ${nome}`)
    }

}
const pessoa2 = criarPessoa('Matheus')
pessoa2.criarPessoa()