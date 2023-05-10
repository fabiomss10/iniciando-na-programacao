/*04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.*/

divisao = (a, b) => {
    console.log(parseInt(a / b))
    console.log('Resto:', a % b)
}

divisao(5, 2)