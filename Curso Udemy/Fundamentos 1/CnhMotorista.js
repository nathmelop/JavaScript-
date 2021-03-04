const idade = 17;
const habito = idade >= 18;

if (habito) {
    console.log('Sara tem idade para dirigir');
} else {
    const idadeFaltante = 18 - idade;
    console.log(`Falta ${idadeFaltante} ano, para sara tirar sua licença para dirigir`);
}

const anoAniversario = 2020;
let seculo;
if (anoAniversario <= 2000) {
    seculo = 20;
} else {
    seculo = 21;
}
console.log(seculo);