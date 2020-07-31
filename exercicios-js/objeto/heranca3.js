const pai = {
    nome: 'Pedro',
    corDoCabelo: 'Preto'
}

const filha1 = Object.create(pai)

filha1.nome = 'Ana'
console.log(filha1.corDoCabelo);

const filha2 = Object.create(pai,{
    nome: {value: 'Bia',writable: false , enumerable: true}

})

console.log(filha2.nome);
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corDoCabelo}`);

console.log(Object.keys(filha1));
console.log(Object.keys(filha2));

console.log(Object.entries(filha1));
console.log(Object.entries(filha2));

for(let key in filha2){
    filha2.hasOwnProperty(key) ? 
    console.log(key) : console.log(`Por herança: ${key}`);
}