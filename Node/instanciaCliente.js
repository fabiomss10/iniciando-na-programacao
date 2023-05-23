const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')() // () pois o que pertence a esse arquivo é uma função construtora
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor) //como se trata de uma unica instancia, tudo que faz com o contador A, o B irá saber, e viceversa

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor) // novas instancias que foram criadas a partir de uma factory
