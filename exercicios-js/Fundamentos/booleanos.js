let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);

//situaçoes que atribuem valor TRUE
console.log('os verdadeiros');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'texto');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

//situaçoes que atribuem valor FALSE
console.log('os falsos...');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log((isAtivo = false));

//operação OU
console.log('operação OU');
console.log(!!('' || null || 0 || ' '));

let nome = 'lucas';

console.log(nome || 'Desconhecido');
