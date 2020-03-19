//par nome/valor
const saudacao = 'opa' //contexto lexico 1 (local onde a variavel foi definida no codigo)

function exec(){
    const saudacao = 'falaa' //contexto lexico 2 (escopo da função)
    return saudacao
}

//objeto sao grupo aninhados de nome/valor 

const Cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco:{
        logradouro: "Rua muito legal",
        numero: 123

    }
}

console.log(saudacao)
console.log(exec()) 
console.log(Cliente) 