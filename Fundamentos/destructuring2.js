const [n1, , n3, , n5, n6, , n8 = 0] = [1, 3, 5, 223, 45, 24, 42]
console.log(n3, n6, n5)

const [,[, m1]] = [[2, 4, 6], [1, 3, 5]]

/* Se pedir para mostrar m1, ele ira ignorar a primeira sentença, que é o que a primeira virgula propoe
depois ira para o 2 array dentro do array, no caso o [1, 3, 5], como o m1 vem após uma sentença vazia,
o 1 dentro do 2 array seria ignorado, e ele mostraria o 3 */

console.log(m1)