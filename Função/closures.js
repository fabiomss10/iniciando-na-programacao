let x = "Global"
 
function meuMetodo() {
    let x = "Local"
    return x
}
 
let teste = meuMetodo()
console.log(teste)
console.log(x)