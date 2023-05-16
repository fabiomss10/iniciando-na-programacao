/*21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130 */

function valorPlano(idade){
    if(idade < 0){
        console.log(`Não existente`)
    }

    else if(idade <= 9){
        console.log(`O valor do plano de saúde é: ${180} reais.`)
    }

    else if(idade > 9 && idade <= 30){
        console.log(`O valor do plano de saúde é: ${150} reais.`)
    }

    else if(idade > 30 && idade <= 60){
        console.log(`O valor do plano de saúde é: ${195} reais.`)
    }

    else {
        console.log(`O valor do plano de saúde é: ${230} reais.`)
    }
}
    
valorPlano(5)
valorPlano(9)
valorPlano(11)
valorPlano(35)
valorPlano(60)
valorPlano(75)
