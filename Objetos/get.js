let Pessoa = {
    nome: "João",
    sobrenome: "Santos",
    idioma : "Português",
 
    get linguagem() {
      return this.idioma
    },
 
  }
console.log(Pessoa.linguagem)
console.log(Pessoa)