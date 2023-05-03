const funcs = []

for (let i = 0; i < 10; i++){
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

//diferente do VarEmLoop2, ele imprime o valor correto que vc deseja puxar do array