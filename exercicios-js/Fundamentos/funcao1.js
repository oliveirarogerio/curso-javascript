// funçao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}


imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 4, 5, 6, 7)
imprimirSoma()

// funçao com retorno

function soma(a, b = 0) {//valor padrao se nao for passado por parametro
    return a + b
}
console.log(soma(2, 3)) //5
console.log(soma(2)) //2
console.log(soma()) //NaN


