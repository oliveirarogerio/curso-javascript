
function pessoa (nome){
    
    this.falar = function(){
            console.log(`Meu nome é ${nome}`) 
    }      
}

const p1 = new pessoa('Joao')
p1.falar()