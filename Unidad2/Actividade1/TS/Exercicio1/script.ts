/*Taboa de multiplicar do 9 */
console.log("Taboa de multiplicar do 9");
const NUMERO = 9;
let i = 0;    
do {
    console.log(`${NUMERO} * ${i} = ${NUMERO * i}`);
    i++
} while (i <= 10);
console.log(" ");


/*Sucessión de Fibonacci*/
console.log("Sucesión de Fibonacci");
let num1 = 1;
let num2 = 1;
let sumaAnteriores = num1 + num2;
let sucesion = `${num1}, ${num2}, ${sumaAnteriores}, `;
let j = 4; 
while (j <=9) { //lo hacemos hasta el noveno número 
    num1 = num2;
    num2 = sumaAnteriores;
    sumaAnteriores = num1 + num2;
    sucesion += `${sumaAnteriores}, `;
    j++;
}
    
num1 = num2;
num2 = sumaAnteriores;
sumaAnteriores = num1 + num2;
sucesion += `${sumaAnteriores} `;
console.log(sucesion);
console.log(" ");
/*Comprobación de números primos */
console.log("Comprobación de números primos");

let numeroAComprobar = Number(prompt("Inserte un número"));
let resultado = "";

if (numeroAComprobar <= 1) {
    resultado= `${numeroAComprobar} non é válido`;
} 

if (numeroAComprobar == 2) {
    resultado= `${numeroAComprobar} é primo`;
} 

for (let k = 2; k < numeroAComprobar; k++) {
    if (numeroAComprobar % k == 0) {
        resultado = `${numeroAComprobar} non é primo`;
        break;
    } else {
        resultado = `${numeroAComprobar} é primo`;
    }
}
console.log(resultado)