// criar uma função que é chamada instantaneamente
//para isso, basta colocar a função entre parenteses, e no final colocar mais um parenteses

(function () {
    console.log('Essa função foge do escopo global')
    console.log('Ela também é chamada instantaneamente')
})()