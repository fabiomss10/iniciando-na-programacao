function numeroEntre({min = 10, max = 200}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
 
console.log(numeroEntre({max : 25, min : 30}))
