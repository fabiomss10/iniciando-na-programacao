/* 18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’  */

function porExtenso(numero){
    switch(numero){
        case 0: 
        return 'Zero'
        break

        case 1: 
        return 'Um'
        break

        case 2: 
        return 'Dois'
        break

        case 3: 
        return 'Tres'
        break

        case 4: 
        return 'Quatro'
        break

        case 5: 
        return 'Cinco'
        break

        case 6: 
        return 'Seis'
        break
        
        case 7: 
        return 'Sete'
        break

        case 8: 
        return 'Oito'
        break

        case 9: 
        return 'Nove'
        break

        case 10: 
        return 'Dez'
        break

        default:
            return 'Número fora do intervalo.'
    }
}

console.log(porExtenso(0))
console.log(porExtenso(1))
console.log(porExtenso(2))
console.log(porExtenso(3))
console.log(porExtenso(4))
console.log(porExtenso(5))
console.log(porExtenso(6))
console.log(porExtenso(7))
console.log(porExtenso(8))
console.log(porExtenso(9))
console.log(porExtenso(10))
console.log(porExtenso(11))

