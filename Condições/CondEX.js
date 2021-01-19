; // var agora = new Date () // hora atual do sistema.
// var hora= agora.getHours() //aqui você pode definir o que vc quer, hora, data etc 
var hora = 24
console.log(`Agora são ${hora} horas.`)
if (hora < 12)
    console.log('Bom dia!!')
else if (hora <= 18) {
    console.log('Boa tarde!!')
} else if (hora > 18 && hora <= 23) {
    console.log('Boa noite')
} else {
    console.log('boa madrugada')
}