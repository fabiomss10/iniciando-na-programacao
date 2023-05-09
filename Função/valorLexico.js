const valor = 'global'

function minhaFuncao(){
    console.log(valor)
}

minhaFuncao()

function exec(){
    const valor = 'Local'
    minhaFuncao()
}

exec()

/* Apesar de a função exec decalrar dentro dela o minhaFuncao, e no exec valor = local, a minha função mostrará o global,
POIS NO CONTEXTO EM QUE MINHA FUNÇÃO FOI DELCARADA, ela mostra global.*/