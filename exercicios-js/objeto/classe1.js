class Lancamento {
    constructor(nome = 'Genérioco', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }


addLancamentos (...lancamentos) {
    lancamentos.forEach(l => this.lancamentos.push(l))
}

sumario(){
    let valorConsolidado = 0 
    this.lancamentos.forEach(l => {
        valorConsolidado += l.valor
    })

    return valorConsolidado 
 }

}

const salario = new Lancamento('salario',45000)
const contaDeLuz = new Lancamento('Luz',-220)
const contaDeAgua = new Lancamento('Agua',-250)
const aluguel = new Lancamento('Aluguel',700)


const contas = new CicloFinanceiro(6,2018)

const salario2 = new Lancamento('salario',45000)
const contaDeLuz2 = new Lancamento('Luz',-300)
const contaDeAgua2 = new Lancamento('Agua',-400)
const aluguel2 = new Lancamento('Aluguel',700)

const contas2 = new CicloFinanceiro(8,2021)

contas.addLancamentos(salario, contaDeLuz,contaDeAgua,aluguel)
contas2.addLancamentos(salario2, contaDeLuz2,contaDeAgua2,aluguel2)

console.log(contas.sumario());
console.log(contas2.sumario());