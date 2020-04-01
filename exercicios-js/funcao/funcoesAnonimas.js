//função anonima armazenada em uma variavel 
const soma = function (x,y){
    return x + y
}
//funçao anonima passada como parametro
const imprimirResultado = function (a,b,operacao = soma){
    console.log(operacao(a,b));
}

imprimirResultado(3,4)
imprimirResultado(3,4,soma)
imprimirResultado(3,4, function (x , y){
    return x - y
})
//funçao arrow passada como parametro
imprimirResultado(3,4 , (x,y) => x * y)

//funçao anonima em contexto de objeto
const pessoa = {

    falar : function(){
        console.log('alo');
    }
    /* tambem pode ser feito dessa forma
    falar(){
        console.log('alo');
    }*/
}

pessoa.falar()