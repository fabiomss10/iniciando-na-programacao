function exec(parametro){
    if(typeof parametro === Boolean){
        return !Boolean
    }
    else if (typeof parametro === 'number'){
        return -parametro
    }
    else {
        return `Booleano ou número esperados, mas o parâmetro é do tipo:${typeof parametro}`
    }
}

console.log(exec(-1))
