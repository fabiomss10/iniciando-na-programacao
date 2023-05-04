function a(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}


do {
    opcaoo = a(-1, 10)
    console.log(`numero: ${opcaoo}.`)
} while (opcaoo != -1)

console.log('até a proxima')

//quando chegar no -1 para o sorteio de numeros

