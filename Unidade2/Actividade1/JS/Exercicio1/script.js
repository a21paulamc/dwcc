"use strict";

//al cargar la página se ejecuta la función cargar funciones que contiene las dos funciones de tabla de multiplicar del 9 y la función de la sucesión de Fibonacci 
window.onload = cargarFunciones;

function cargarFunciones() {
    mostrarTaboa();
    mostrarFibonacci();
}

//Táboa de multiplicar
function mostrarTaboa() {
    const NUMERO = 9;
    let taboaMultiplicar = document.getElementById("taboaMultiplicar");
    let taboa = `<ul>`;
    let i = 0;    
    do {
        taboa += `<li>${NUMERO} * ${i} = ${NUMERO * i}</li>`;
        i++
    } while (i <= 10);

    taboa += `</ul>`
    return taboaMultiplicar.innerHTML = taboa;
}
/**/

//Sucessión de Fibonacci
function mostrarFibonacci() {
    let sucesionFibonacci = document.getElementById("sucesionFibonacci");
    let num1 = 1;
    let num2 = 1;
    let sumaAnteriores = num1 + num2;
    let sucesion = `${num1}, ${num2}, ${sumaAnteriores}, `;
    let i = 4; //empezamos en el cuarto número ya que los 3 primeros los tenemos
    while (i <=9) { //lo hacemos hasta el noveno número 
        num1 = num2;
        num2 = sumaAnteriores;
        sumaAnteriores = num1 + num2;
        sucesion += `${sumaAnteriores}, `;
        i++;
    }
    //el décimo lo hago fuera del bucle para que no aparezca una coma al final
    num1 = num2;
    num2 = sumaAnteriores;
    sumaAnteriores = num1 + num2;
    sucesion += `${sumaAnteriores} `;

    return sucesionFibonacci.innerHTML = sucesion;
}


//Comprobación de números primos
function comprobarPrimos() {
    let numeroAComprobar = Number(document.getElementById("numero").value);
    let resultadoComprobacion = document.getElementById("resultadoComprobacion");
    let resultado = "";

    if (numeroAComprobar <= 1) {
        resultado= "Non é válido";
    } 

    if (numeroAComprobar == 2) {
        resultado= "É primo";
    } 

    for (let i = 2; i < numeroAComprobar; i++) {
        if (numeroAComprobar % i == 0) {
            resultado = "Non é primo";
            break;
        }
        else {
            resultado = "É primo";
        }
    }
    
    return resultadoComprobacion.innerHTML = resultado;
}


    
 