const escola = 'cod3r';

console.log(escola.charAt(4));
//console.log(escola.charAt(5)) fora dos limites
console.log(escola.charCodeAt(3)); //retorna o valor unicode do caracter
console.log(escola.indexOf('3')); //retorna em qual indice o caracter se encontra
console.log(escola.substring(1)); // retorna os caracteres de acordo com os limites passados
console.log(escola.substring(0, 3)); // retorna os caracteres de acordo com os limites passados

console.log('Escola '.concat(escola).concat('!')); // concatenando caracteres
console.log('Escola ' + escola + '!'); // concatenando caracteres
console.log(escola.replace(3, 'e')); //substitiu um caracter da string
console.log(escola.replace(/\w/g, 'e')); //substitiu um caracter da string
console.log('Ana,Maria,Pedro'.split(',')); //divide a string em arrays
