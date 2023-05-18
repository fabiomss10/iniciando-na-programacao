const obj = { a: 1, b: 2, c: 3, soma(){ return a + b + c}}
// Json retorna em formato textual (string)

console.log(JSON.stringify(obj))  // função foi excluida pois JSON é um formato de dados

// console.log(JSON.parse("{a: 1, b: 2, c: 3}"))

// console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}"))   : o nome do produto deve estar em aspas duplas

console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}')) // json para obj