// generators  pausando e executando em varias vezes 
/*
function* hello (){
    console.log('hello'); 
yield 1;
    console.log('from'); 
const value = yield 2;
    console.log(value); 
}

const it = hello();

console.log(it.next())
console.log(it.next())
console.log(it.next('Outside!')) // essa funcao vc pode receber valores de fora para dentro 
*/
//  pode utilizar de uma forma de construir operadores 
//alem de uma funcao com pausa, pode utilizar para construir meta propriedade e tranfromar num objeto interavel

function* naturalNumbers() {
    let number = 0;
    while (true) {
        yield number;
        number++;
    }
}

const it = naturalNumbers();

console.log(it.next()); //coloca na medida que achar necessario 
console.log(it.next());
console.log(it.next());
console.log(it.next());