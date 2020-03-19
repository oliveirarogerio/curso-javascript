//Função em JS é Firs-Class Object (Citizens)
// Higher order function

//criaçao de forma literal
function fun1() {}

//Armazenar funçao em uma variavel
const fun2 = function() {} //funçao anonima - nome da variavel referencia a funçao

//Armazenar em um array
const array = [
  function(a, b) {
    return a + b
  },
  fun1,
  fun2
]
console.log(array[0](2, 3))

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function() {
  return 'Opa'
}
console.log(obj.falar())
//Passar funçao como parametro
function run(fun) {
  fun()
}

run(function() {
  console.log('Executando')
})

//um funçao pode retornar/ conter uma funçao
function soma(a, b) {
  return function(c) {
    console.log(a + b + c)
  }
}

soma(2, 3)(4) // chama diretamenta a segunda funçao no segundo parenteses
//const cincoMais = soma(2, 3)
//cincoMais(4)
