
numero = Array(5);
numero[0] = gets();
numero[1] = gets();
numero[2] = gets();
numero[3] = gets();
numero[4] = gets();
positivos = numero.filter(value => value > 0);
negativos = numero.filter(value => value < 0);
par = numero.filter(value => value % 2 == 0);
impar = numero.filter(value => value % 2 != 0);
console.log(par.length + " valor(es) par(es)");
console.log(impar.length + " valor(es) impar(es)");
console.log(positivos.length + " valor(es) positivo(s)");
console.log(negativos.length + " valor(es) negativo(s)");


