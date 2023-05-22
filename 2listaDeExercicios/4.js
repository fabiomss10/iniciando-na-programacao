const mes = ['Mes inválido', 'janeiro', 'Fevereiro', 'Março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

function qualMes(numeroMes){
    return mes[numeroMes]
}

console.log(qualMes(12))