var agora = new Date()
var diaSem = agora.getDay() // dia da semana começa no domingo = 0    Segunda =1 ...

console.log(diaSem)

switch (diaSem) { // sempre usar o break no final || usa para valores pontuais 
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sabado')
        break
    default:
        console.log('[ERRO] Dia invalido !!')
        break
}