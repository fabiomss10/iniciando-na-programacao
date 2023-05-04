function numeroEntre([min = 50, max = 100]){
    if ( min > max) [min, max] [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(numeroEntre([min = 95, max = 80]))