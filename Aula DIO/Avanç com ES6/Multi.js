function multiply(a, b) {
    return a * b;
}
console.log(multiply(10, 5))

// ou 

function multiply(a = 2, b = 1) {
    return a * b;
}
console.log(multiply(undefined, 5))

//lazy evaluation
function randomNumber() {
    return Math.random() * 10;
}

function multiply(a = 2, b = 1) {
    return a * b;
}
console.log(randomNumber());

// outro modo , é bom para gerar id random

function randomNumber() {
    console.log('generating  a random number... ');
    return Math.random() * 10;
}

function multiply(a, b = randomNumber()) {
    return a * b;
}
console.log(multiply(5));
console.log(multiply(5));