function tratarErroElancar(erro) {
  //throw new Error('...')
  //throw 10
  //throw true
  //throw 'erro'
  throw {
    nome: erro.name,
    msg: erro.message,
    date: new Date()
  }
}

function imprimirNomeGritado(obj) {
  try {
    console.log(obj.name.toUpperCase() + '!!!')
  } catch (e) {
    tratarErroElancar(e)
  } finally {
    console.log('final')
  }
}

const obj = {
  nome: 'Roberto' // chamando atributo errado , certo seria "name"
}
imprimirNomeGritado(obj)
