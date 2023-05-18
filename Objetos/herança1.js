const avo = {atributo1: 'A'}

const pai = {__proto__: avo, atributo2: 'B'}

const filho = {__proto__: pai, atributo3: 'C'}


console.log(filho.atributo1) // Ele buscou no avo

console.log(pai.atributo3) // Ele não busca em pessoas '' mais novas ''

console.log(pai.atributo0)