/*7) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano | Aumento
A | 10%
B | 15%
C | 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.*/


function aumento(salario, planodeaumento){
        switch(planodeaumento){
            case 'a':
                return salario + (0.1 * salario)
                break

            case 'b':
                return salario + (0.15 * salario)
                break

            case 'c':
                return salario + (0.20 * salario)
                break

            default:
                return 'Plano Invalido'
        } 
}


console.log(aumento(2000, 'a'))
console.log(aumento(2000, 'b'))
console.log(aumento(2000, 'c'))
console.log(aumento(2000, 'k'))

