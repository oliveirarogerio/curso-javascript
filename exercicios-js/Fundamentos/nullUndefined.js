let valor //não inicialada
console.log(valor)
//console.log(valor2) //nao declarado

valor = null //ausencia de valor
console.log(valor)

//console.log(valor.toString()) Cannot read property 'toString' of null

const produto = {

}

console.log(produto.preco)//undefined
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evitar atribuir undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null //sem preço

console.log(!!produto.preco)
console.log(produto)

