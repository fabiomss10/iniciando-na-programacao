// Cada "../" sai de uma pasta e vai para pasta mais proxima
//Ou copia o caminho do arquivo e cola
// const moduloA = require('C:\Users\Fabio\Desktop\IniciandoJS\Node\moduloA.js')
const moduloA = require('../../moduloA.js')
console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

// const c = require('./pastaC/index.js') PARA ACESSAR PASTAS<<<
