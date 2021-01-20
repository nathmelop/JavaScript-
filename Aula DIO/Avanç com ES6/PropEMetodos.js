var prop1 = 'dio';
var obj = {
    prop1: prop1
};
console.log(obj);

// ou 
var prop1 = 'dio';
var obj = {
    prop1
};
console.log(obj);

// também para funções para definir metodos 

function method1() {
    console.log('method called');
}
var obj = {
    method1
};
method1();


// outra forma 
var obj = {
    sum: function sum(a, b) { //tb da para tirar o sum q da a mesma coisa
        return a + b;
    }
};
console.log(obj.sum(1, 5));

//outra forma de encurtar 

var obj = {
    sum(a, b) {
        return a + b;
    }
};
console.log(obj.sum(2, 7))

// propName
var propName = 'utilizando.. '
var obj = {};
obj[propName /*tb da para fazer operações aqui dentro, so que teria que declarar um obj antes */ ] = 'prop Value'
console.log(obj);

//
var propName = 'tentando'
var obj = {
    [propName + ' concat']: 'prop value '
};
console.log(obj);