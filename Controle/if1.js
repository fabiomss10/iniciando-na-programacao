function noticiaBoa(nota){
    if(nota>=6){
        console.log('Parabens, aprovado com nota:', nota)
    }
}

noticiaBoa(6.3)
noticiaBoa(3.7) // Não mostra nada, pois só mostra noticia boa (acima de 6)

function seForTrue(valor){
    if(valor){
        console.log('É verdade.. ', valor)
    }
}

seForTrue() // Falso, então nao apresenta nada
seForTrue(null) // Falso, então nao apresenta nada
seForTrue(undefined) // Falso, então nao apresenta nada
seForTrue(1) // valor verdadeiro
seForTrue('Fabio') // valor verdadeiro
seForTrue('') // Falso, então nao apresenta nada
seForTrue(' ') //valor verdadeiro
seForTrue(false) // Falso, então nao apresenta nada
seForTrue([]) // Array vazio = true