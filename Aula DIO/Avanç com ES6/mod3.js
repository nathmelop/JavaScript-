//Destructuring Assigment 
/*
var arr = ['apple', 'banana', 'orange' ['tomato']];
var apple = arr [0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0]; */

// destruir arrays 
var [apple2, banana2, orange2, [tomato2]] = ['apple', 'banana', 'orange', ['tomato']];
console.log(tomato2);

// 
var obj = {
    name: 'nathalia'
}
var { name } = obj;
console.log(name)

//  destroi os obj  
var arr = [{ name: 'apple', type: 'fruit' }];
var obj = {
    name: 'nath',
    props: {
        agr: 24,
        favoriteColors: ['black', 'blue']
    }
};
var fruit1 = arr[0].name;
var [{ name: fruitName }] = arr;
console.log(fruitName);

// function 

function sum(arr) {
    return arr[0] + arr[1];
}
console.log(sum([5, 5]));

// 
function sum({ a, b }) {
    return a + b;
}
console.log(sum({ a: 5, b: 15 }));