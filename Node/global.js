// console.log(global)
global.atributo =Object.freeze({
    nome: 'Fabio',
    saudar(){
        return `saudação ${this.nome}`
    }
})
