//Closure é o escopo criado quado uma funçao é declarada
//Esse espaço permite a função acessar e manipular variaveis externas a função

//contexto lexico em ação

const x = 'Global'

function fora(){
    const x = 'Local'

    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())



