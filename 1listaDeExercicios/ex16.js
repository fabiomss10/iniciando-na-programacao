/* 16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica. O programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas. */


function calculadora (a, operando, b){
    switch(operando){
        case '+':
        return a + b
       break

        case '-':
        return a - b
      break

        case '*':
        return a * b
       break

        case '/':
        return a / b
        break

        default:
            return 'operação invalida'
    }
}

console.log(calculadora(3, '+', 4))
console.log(calculadora(10, '-', 6))
console.log(calculadora(6, '*', 2))
console.log(calculadora(9, '/', 3))
console.log(calculadora(4, ')', 9))