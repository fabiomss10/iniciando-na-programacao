//Maneiras de armazenar uma função em JS

//armazenar de forma literal
function funçao(){ }

//armazenar em uma variavel

const funçao1 = function(){ }

// armazenar em um array

const array = [ function (a, b){ return a + b} ] 

console.log(array[1](2, 6))

//armazenar em um objeto

const obj = {}
    obj.func = function (){return 'Fábio'}
    console.log(obj.func())


//armazenar como parametro

function fun(par){
    par()
}
fun(function () {(console.log('Fabio Matheus'))}) //aqui o () da função é a mesma coisa que o par)

//função dentro de uma função
function soma(a, b){
    return function (c){
    console.log(a + b + c)
}
}

soma(3, 5) (4)
