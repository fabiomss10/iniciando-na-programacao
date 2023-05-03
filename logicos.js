/* CCriar uma logica que se dois trabalhos derem certo, comprar uma tv de 50 polegadas,
se apenas um der certo, comprar a de 32 polegadas, e caso compre alguma tv, comprar um sorvete para 
comemorar */



function exec(trabalho1, trabalho2){

        const tv50 = trabalho1 && trabalho2
        const tv32 = trabalho1 != trabalho2
        const comprarSorvete = trabalho1 || trabalho2
        const comprouNada = !trabalho1 && !trabalho2
    
    return {tv50, tv32, comprarSorvete, comprouNada}

}

console.log(exec(true, true))