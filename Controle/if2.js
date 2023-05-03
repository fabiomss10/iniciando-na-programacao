function exec(numero){
    if(numero >= 6)
    console.log(numero)
    console.log('string')

}

exec(8)
exec(3)

/* Por os "console.log" não estarem dentro de um bloco, o IF só considera a primeira linha abaixo dele,
o "console.log('string') não tem a ver com o if, ele será sempre mostrado, mas quando colocou
exec(3), por ser menor que 6, ele ignorou o numero e mostrou o string novamente.
Independente do numero que colocasse, ele iria mostrar o string, mas se o numero for maior ou igual
a 7, ele mostrará o numero também */