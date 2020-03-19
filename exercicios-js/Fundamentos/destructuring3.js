//utilizando operador destructuring com uma funçao
function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
//const obj = {max:50, min:40} 
console.log(rand({max:50, min:40}))
//console.log(rand({min:995})) so um parametro , usando o padrao 1000

console.log(rand({}))
