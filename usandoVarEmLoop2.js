const funcs = []

for (var i = 0; i < 10; i++){
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()


// Por ter sido declarado com VAR, a função apresenta um problema que independente do indice que
// deseja puxar do array, ele sempre ira mostrar o 10