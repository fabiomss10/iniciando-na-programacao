{
    {
        {
            {
                {
                    var nome = 'fabio'
                    console.log(nome)
                }
            }
        }
    }
}
console.log(nome)

//A variavel VAR pode ser declarada dentro e fora dos blocos, que dará certo do mesmo jeito
//
//

// A variavel VAR pode ser acessada dentro de uma função, mas fora dela não

function teste (){
    var idade = 19
    console.log(idade)
}
teste()

//console.log(idade) -> erro
