console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1   // a agora é visivel fora do arquivo
exports.b = 2   // b também é visivel fora
module.exports.c = 3    // forma ideal de exportar
