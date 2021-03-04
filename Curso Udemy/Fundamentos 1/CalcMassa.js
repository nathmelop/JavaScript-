let masssaMark = 95;
let alturaMark = 1.69;
let massaJohn = 92;
let alturaJohn = 1.95;

const bmiMark = masssaMark / alturaMark ** 2;
const bmiJohn = massaJohn / (alturaJohn * alturaJohn);
const markMaiorBMI = bmiMark > bmiJohn;
console.log(bmiMark, bmiJohn, markMaiorBMI);

if (masssaMark > massaJohn) {
    console.log('Mark tem BMI maior que John');
} else {
    console.log('John tem BMI maior que mark')
}

let pesoNath = 82;
let pesoCamila = 80;
let alturaNath = 1.69;
let alturaCamila = 1.70;

const BMInath = pesoNath / alturaNath ** 2;
const BMIcamila = pesoCamila / (alturaCamila * alturaCamila);
const nathMaiorBMI = BMInath < BMIcamila;
console.log(nathMaiorBMI)
if (BMInath < BMIcamila) {
    console.log('nath é mais gorda que camila')
} else {
    console.log('Camila é mais gorda que Nath')
}