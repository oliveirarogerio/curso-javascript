const pessoa = {nome: 'joao'}
pessoa.nome = 'Pedro'
console.log(pessoa);


Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome
console.log(pessoa.nome);
console.log(pessoa)

  