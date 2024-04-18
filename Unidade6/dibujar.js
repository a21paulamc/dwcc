"use strict";

crearTablero();


//------------------------VARIABLES NECESARIAS-----------------------------
//seleccionamos un color por defecto y lo añadimos a la variable colorSel
let colorSel = elementoASeleccionar('.color1'); //td class="color1"
//quitamos la clase "seleccionado" para que solo quede la clase color1 y lo añadimos a la variable pincel
let pincel = colorSel.classList.remove("seleccionado");
pincel = colorSel.className; //color1


//----------------------EVENTOS--------------------------------------------
let btnAmarillo = elementoASeleccionar('.color1');
btnAmarillo.addEventListener("click", seleccionaColor);

let btnVerde = elementoASeleccionar('.color2');
btnVerde.addEventListener("click", seleccionaColor);

let btnNegro = elementoASeleccionar('.color3');
btnNegro.addEventListener("click", seleccionaColor);

let btnRojo = elementoASeleccionar('.color4');
btnRojo.addEventListener("click", seleccionaColor);

let btnAzul = elementoASeleccionar('.color5');
btnAzul.addEventListener("click", seleccionaColor);

let btnBlanco = elementoASeleccionar('.color6');
btnBlanco.addEventListener("click", seleccionaColor);



//--------------------FUNCIONES DESARROLLADAS-----------------------------

//FUNCIÓN CREAR TABLERO
function crearTablero() {
    //creamos el elemento tabla
    let tabla = document.createElement("table");
    //le añadimos la clase tablerodibujo
    tabla.className = "tablerodibujo";
    //creamos 30 tr
    for (let i = 0; i < 30; i++) {
        let tr = document.createElement("tr");
        //creamos 30 td
        for (let j = 0; j < 30; j++) {
            let td = document.createElement("td");
            //hacemos que tengan un borde negro para que se aprecien
            td.style.border = "1px solid #000";
            td.addEventListener("mousemove", pintar);
            //añadimos los td a los tr
            tr.appendChild(td);
        }
        //aádimos los tr a la tabla
        tabla.appendChild(tr);
    }
    //añadimos la tabla al div zonadibujo
    let div = document.getElementById("zonadibujo");
    div.appendChild(tabla);
}



//FUNCIÓN SELECCIONAR ELEMENTOS
function elementoASeleccionar(elemento) {
    return document.querySelector(elemento);
}


//FUNCIÓN SELECCIONAR COLOR
//seleccionamos el elemento con el color por defecto y le quitamos la clase "seleccionado". Hacemos que el color por defecto se convierta en el color sobre el que hemos pulsado. Convertimos la variable pincel en la clase del color seleccionado para obtener el color. Añadimos la clase "seleccionado" al nuevo color que hemos pulsado.
function seleccionaColor() {
    colorSel.classList.remove("seleccionado");
    colorSel = this;
    pincel = colorSel.className;
    colorSel.classList.add("seleccionado");
    mostrarEstado();
}

//FUNCIÓN PINTAR
//Si el botón izquierdo del ratón está pulsado, el color del pincel será el que se seleccione
function pintar(e) {
    if (e.buttons === 1) {
        this.className = pincel;
    } 
}

//FUNCIÓN MOSTRAR ESTADO PINCEL
//Seleccionamos el td con ID pincel
function mostrarEstado(){
    let estado = elementoASeleccionar('#pincel');
    if (pincel === "color6") {
        estado.innerHTML = "PINCEL DESACTIVADO...";
    } else {
        estado.innerHTML = "PINCEL ACTIVADO"
    }
}