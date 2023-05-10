/* 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */

function jurosSimples (capitalInicial, taxaDeJuros, tempoDeAplicacao){
        console.log(`Após os juros,o valor inicial de ${capitalInicial}, ficará:${capitalInicial * taxaDeJuros * tempoDeAplicacao} de juros.`)
}

jurosSimples(200, 0.2, 10)
jurosSimples(1000, 0.1, 1)

function jurosCompostos(capitalInicial, taxaDeJuros, tempoDeAplicacao){
    let montante = capitalInicial * (1 + taxaDeJuros)**tempoDeAplicacao
    let juros = montante - capitalInicial
    console.log(`O juros ficou no valor de:${juros.toFixed(2)}`)
}

jurosCompostos( 1000, 0.1, 1)