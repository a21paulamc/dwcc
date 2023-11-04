/*Taboa de multiplicar do 9 */
console.log("Taboa de multiplicar do 9");
var NUMERO = 9;
var i = 0;
do {
    console.log("".concat(NUMERO, " * ").concat(i, " = ").concat(NUMERO * i));
    i++;
} while (i <= 10);
console.log(" ");
/*Sucessión de Fibonacci*/
console.log("Sucesión de Fibonacci");
var num1 = 1;
var num2 = 1;
var sumaAnteriores = num1 + num2;
var sucesion = "".concat(num1, ", ").concat(num2, ", ").concat(sumaAnteriores, ", ");
var j = 4;
while (j <= 9) { //lo hacemos hasta el noveno número 
    num1 = num2;
    num2 = sumaAnteriores;
    sumaAnteriores = num1 + num2;
    sucesion += "".concat(sumaAnteriores, ", ");
    j++;
}
num1 = num2;
num2 = sumaAnteriores;
sumaAnteriores = num1 + num2;
sucesion += "".concat(sumaAnteriores, " ");
console.log(sucesion);
console.log(" ");
/*Comprobación de números primos */
console.log("Comprobación de números primos");
var numeroAComprobar = Number(prompt("Inserte un número"));
var resultado = "";
if (numeroAComprobar <= 1) {
    resultado = "".concat(numeroAComprobar, " non \u00E9 v\u00E1lido");
}
if (numeroAComprobar == 2) {
    resultado = "".concat(numeroAComprobar, " \u00E9 primo");
}
for (var k = 2; k < numeroAComprobar; k++) {
    if (numeroAComprobar % k == 0) {
        resultado = "".concat(numeroAComprobar, " non \u00E9 primo");
        break;
    }
    else {
        resultado = "".concat(numeroAComprobar, " \u00E9 primo");
    }
}
console.log(resultado);
