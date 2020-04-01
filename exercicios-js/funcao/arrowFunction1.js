//função tradicional
let dobro = function(a){
    return 2 * a
}


//arrow function
dobro = (a) => {
    return 2 * a
}

//arrow function de 1 parametro 
dobro = a => 2 * a // return implicito

console.log(dobro(Math.PI))

let ola = function(){
    console.log('ola')
}

ola = () => 'ola'
ola = _ => 'ola' // possui 1 parametro

console.log(ola())