//Simbols  é uma maneira de gerar um identificador unico, invocando um simbols
//identificador unico que não pode ser adivinhado 

const uniqueId = Symbol('oi');
const uniqueId2 = Symbol('oi');
console.log(uniqueId === uniqueId2); //ele declara como falso porq n é igual 


const uniqueId = Symbol('oi');
const obj = {
    [uniqueId]: 'oie'
};
console.log(obj);

//possui uma serie de propriedade  chamada well know symbls 

const any = Symbol('hey');
Symbol.iterator;
Symbol.split;
Symbol.toStringTag;

const arr = [1, 2, 3, 4];
const it = arr[Symbol.iterator](); //interface para você consumir passo a passo uma lista estrutura de dados 
console.log(it.next());
console.log(it.next());
console.log(it.next());

// colocando while 

const uniqueId = Symbol('hehe');
Symbol.iterator;
Symbol.split;
Symbol.toStringTag;

const arr = [1, 2, 3, 4];
const it = arr[Symbol.iterator]();

while (true) {
    let { value, done } = it.next();

    if (done) {
        break;
    }
    console.log(value);
}

//ou 

const uniqueId = Symbol('hehe');
Symbol.iterator;
Symbol.split;
Symbol.toStringTag;

const arr = [1, 2, 3, 4]
for (let value of arr) {
    console.log(value)
}

//contruindo uma funcao operadora em um objeto  *nao rodou*
/*
const uniqueId = Symbol('hehe');
Symbol.iterator;

const arr = [1, 2, 3, 4];
const str = 'digital innovation one';

console.log   */