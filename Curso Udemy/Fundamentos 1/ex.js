const primeiroNome = 'Nathalia';
const nascimento = 1996;
const trabalho = 'estudante';
const ano = 2021;

const nath = "Me chamo " + primeiroNome + ", sou " + trabalho + " e tenho " + (ano - nascimento) +
    " anos!";
console.log(nath)

const nathNew = `Me chamo ${primeiroNome}, sou ${trabalho} e tenho ${ano - nascimento} anos!!`;
console.log(nathNew)