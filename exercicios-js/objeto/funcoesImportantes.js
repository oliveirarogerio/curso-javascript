const pessoa = {
    nome: 'Rebeca',
    idade:  2,
    peso: 13
}

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`);
})

// forma mais flexivel para extrair os valor diretamente
Object.entries(pessoa).forEach(([chave, valor])=> {
    console.log(`${chave}: ${valor}`);
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false, //congela o valor do atributo especifico
    value: '01/01/2017'
})

pessoa.dataNascimento = '01/01/2019'
console.log(pessoa.dataNascimento);

console.log(Object.keys(pessoa))


const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3,a:4}
const o3 = {d: 5,e:6}

// teste para impedir um atributo especifico de ser atribuido
Object.defineProperty(o3, 'd', {
    writable: false,
    enumerable: false
})

const obj = Object.assign(dest, o1,o2,o3)
console.log(obj);