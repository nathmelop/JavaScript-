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

//pode ser utilizado em arrays, objects  e objetos iteraveis 
//quebrar os itens e repassar para algum lugar  
// quebra e joga para uma lista, quebra cada letra e transforma em um array e  pode passar para outra função 

const str = 'dio' // é um objetio iteravel 
function logArgs(...args) {
    console.log(args);
}
logArgs(...str);

//cada item do array vai virar um argumento da função

const str = 'dio';
const arr = [1, 2, 3, 4];

function logArgs(a, b, c) {
    console.log(a, b, c);
}
logArgs(...arr);

//tb pode ser utilizado para construir arrays... combinação com o primeiro array

const str = 'dio';
const arr = [1, 2, 3, 4];

function logArgs(a, b, c) {
    console.log(a, b, c);
}
const arr2 = [5, 7, 6, ...arr]

const arr3 = [...arr2, ...arr, 0, 0, 0];

console.log(arr3);

//array clone  simples 

const str = 'dio';
const arr = [1, 2, 3, 4];

function logArgs(a, b, c) {
    console.log(a, b, c);
}
const arrClone = [...arr];
console.log(arrClone);

// obj literais só podem ser utilizados para construir novos objetos  

const str = 'dio';
const arr = [1, 2, 3, 4];

function logArgs(a, b, c) {
    console.log(a, b, c);
}
const arrClone = [...arr];

const obj = {
    test: 123
};

const obj2 = {
    ...obj, // para usar fora tem q ser obj interaveis    
    // test:456
    // ...obj    ah ordem é importante para considerar que propriedade vai prevalecer 
    test2: 'hello MUNDO'
};

console.log(obj2);

//gerar clone no objeto é chamado de clone raso 

const obj = {
    test: 123
}

const obj2 = {...obj };

obj2.test = 456;
console.log(obj);