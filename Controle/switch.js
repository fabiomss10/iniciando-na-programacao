function notaDoAluno(nota){
    switch(Math.floor(nota)){

    case 10: case 9:
        console.log('Entre os Melhores')
        break
        
        case 8: case 7: case 6:
            console.log('Aluno aprovado')
            break

    case 5: case 4: case 3:
        console.log('Aluno de recuperação final')
        break

        case 2: case 1: case 0:
        console.log('Aluno reprovado')
        break

        default:
            console.log('Não matriculado nessa escola / Nota inválida')
    }

    console.log('Bom final de ano!')
}

notaDoAluno(9.5)
notaDoAluno(7.2)
notaDoAluno(4.9)
notaDoAluno(2)
notaDoAluno(12)