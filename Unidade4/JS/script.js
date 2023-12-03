"use strict";

let arrayPaises = ["Portugal", "Francia", "Andora", "Alemania", "Suíza", "Italia", "Países Baixos", "Grecia"];


function contarPaises(arr) {
  let cantidadePaises = arr.length;
  console.log(`O número de elementos do array é ${cantidadePaises}`);  
}

function mostrarPaises(arr) {
    console.log(arr);
}

function ordearInversa(arr) {
    let arrInvertido = arr.slice();
    console.log(arrInvertido.reverse())
}

function engadirPaisComezo(arr) {
    arr.unshift("España");
    console.log(arr);
}

function engadirPaisFinal(arr) {
    arr.push("Bélgica");
    console.log(arr);
}

function eliminarPaisComezo(arr) {
    let paisEliminadoPrincipio = arr.shift();
    console.log(arr);
    console.log(`O país eliminado foi ${paisEliminadoPrincipio}`);
}

function eliminarPaisFinal(arr) {
    let paisEliminadoFinal = arr.pop();
    console.log(arr);
    console.log(`O país eliminado foi ${paisEliminadoFinal}`);
}

function mostrarPaisElexido(arr) {
    let posicion = prompt("Introduce un número do 0 ao 7");
    console.log(`O país da posición ${posicion} é ${arr[posicion]}`);
}

function mostrarPosicionElexida(arr) {
    let pais = prompt("Introduce un país da seguinte lista: Portugal, Francia, Andorra, Alemania, Suíza, Italia, Países Baixos, Grecia");
    console.log(`O país ${pais} está na posición ${arr.indexOf(pais)}`);
}

function mostrarPaisesEntreDuasPosicions(arr) {
    let pos1 = Number(prompt("Elixe un número do 0 ao 7"));
    pos1 = pos1 + 1; //Así facemos que non se amose a posición elexida se non a seguinte xa que queremos amosar os países entre dúas posicións, estas excluídas.
    let pos2 = prompt("Elixe outro número do 0 ao 7");
    console.log(`Os países entre as posicións ${pos1-1} e ${pos2} son: ${arr.slice(pos1, pos2)}`);
}

contarPaises(arrayPaises);
mostrarPaises(arrayPaises);
ordearInversa(arrayPaises);
engadirPaisComezo(arrayPaises);
engadirPaisFinal(arrayPaises);
eliminarPaisComezo(arrayPaises);
eliminarPaisFinal(arrayPaises);
mostrarPaisElexido(arrayPaises);
mostrarPosicionElexida(arrayPaises)
mostrarPaisesEntreDuasPosicions(arrayPaises);