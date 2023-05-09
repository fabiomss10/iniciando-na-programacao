
function soma(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma(3, 4, 5))
console.log(soma()) // como os 3 valores estao vazios (False), ele retornou todos como 1
