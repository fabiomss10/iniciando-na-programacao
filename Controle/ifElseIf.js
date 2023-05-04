function NotaDoAluno(nota){

    if(nota >= 8 && nota <= 10){
        console.log('Entre os melhores')
    }
    
    else if(nota >= 6 && nota <= 7.9){
        console.log('Aluno aprovado')
    }

    else if(nota >= 4 && nota <=5.9){
        console.log('Aluno de recuperação final')
    }

    else if(nota > 0 && nota <= 3.99){
        console.log('Aluno reprovado')
    }

    else{
        console.log('Não matriculado nessa escola / Nota inválida')

    }

    console.log('Bom final de ano')
}

NotaDoAluno(9)
NotaDoAluno(5)
NotaDoAluno(14)

