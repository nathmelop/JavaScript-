function sum(a, b) {
    console.log(arguments);
    return a + b;
}

console.log(sum(5, 3, 5, 3, 5))

// 

function sum(a, b) {
    var value = 0;
    for (var i = 0; i < arguments.length; i++) {
        value += arguments[i];
    }
    return value;
}
console.log(sum(5, 5, 5, 2, 3))

// operador     rest operator ; além da lista igual do argument, ele tb tras os metodos de array 

function sum(...args) {
    return args.reduce((acc, value) => acc + value, 0);
}
console.log(sum(5, 5, 5, 2, 3));

// quando pega alguns parametros e repassa o resto  ...restOperator

const sum = (a, b, ...rest) => {
    console.log(a, b, rest);
};
console.log(sum(5, 2, 1, 6, 1));

// spread operator ... 

const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);
const sum = (...rest) => {
    return multiply(...rest);
};
console.log(sum(5, 2, 1, 6, 1));