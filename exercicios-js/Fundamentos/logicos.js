function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTV50 = trabalho1 && trabalho2
    //const comprarTV32 = !!(trabalho1 ^ trabalho2) //bitwise xor
    const comprarTV32 = trabalho1 != trabalho2 // diferença simula um xor
    const manterSaudavel = !comprarSorvete

    return { comprarSorvete,comprarTV50,comprarTV32,manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
