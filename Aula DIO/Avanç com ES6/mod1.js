//function log (value){
//  console.log(value);
//}
//log('test')

/*var soma = function(a,b){
    return a + b;
};
console.log(soma(5,5))    */

//arrow function  voce tem que usar o  "  =>    " são funções anonimas || se for colocar var if, tem q utilizar chaves 
var soma = (a, b) => a + b
console.log(soma(5, 20));


var soma = (a, b) => {
    var x = 10;
    if (a > b) {}
    return a + b;
}
console.log(soma(30, 2))

var createObj = () => ({ test: 123 });
console.log(createObj());

function car() {
    this.foo = 'bar';
}
console.log(new car());

log('test');

function log(value) {
    console.log(value);
}

log('tex3')
var log = value => {
    console.log(value);
}

var obj = {
    showContext: function showContext() {
        this.log('teste');
    },
    log: function log(value) {
        console.log(value);
    }
};
obj.showContext();