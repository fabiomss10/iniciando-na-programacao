const pilotos = ['Vettel', 'Senna', 'Massa', 'Alonso']
pilotos.pop() // remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') // coloca em primeiro
console.log(pilotos)

pilotos.splice(4, 0, 'Bottas', 'Raikkonen') // no elemento 4, tira 0 elementos e adciona as strings:
console.log(pilotos)


const algunsPilotos = pilotos.slice(2) // novo array formado dos elementos a partir do segundos
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(2, 4) // novo array formado dos elementos a partir do segundo, e para no 4 elemento, sem mostrar o 4 
console.log(algunsPilotos2)