const estudantes = {
  Joao: [8, 7.6, 8.9, 6],
  Mariana: [9, 6.6, 7.9, 8],
  Carla: [7, 7, 8, 9],
};

function receberMelhorEstudante(estudantes) {
  const maior = [];

  Object.entries(estudantes).forEach(([chave, valor]) => {
    maior.push({ nome: chave, media: media(valor) });
  });
  const estudanteComMelhorMedia = retornaEstudanteComMelhorMedia(maior);

  console.log(
    `Nome: ${estudanteComMelhorMedia.nome}, Media: ${estudanteComMelhorMedia.media}`
  );
}

function retornaEstudanteComMelhorMedia(estudantes) {
  let melhorEstudante = {
    media: 0,
  };

  for (let chave in estudantes) {
    if (estudantes[chave].media > melhorEstudante.media) {
      melhorEstudante = estudantes[chave];
    }
  }
  return melhorEstudante;
}

function media(lista) {
  let soma = 0;
  for (let index = 0; index < lista.length; index++) {
    soma += lista[index];
  }
  return soma / lista.length;
}

receberMelhorEstudante(estudantes);
