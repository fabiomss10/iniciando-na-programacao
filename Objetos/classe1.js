class Avo {
  constructor(sobrenome) {
    this.sobrenome = sobrenome
  }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Empresario'){
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Souza')
    }
}

const filho1 = new Filho

console.log(filho1)