"use strict";

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

crearTablero();


let btnAmarillo = document.querySelector(".color1");
btnAmarillo.addEventListener("mousedown", () => {
    if (btnAmarillo.classList.contains("seleccionado")) {
        btnVerde.classList.remove("seleccionado");
        btnNegro.classList.remove("seleccionado");
        btnRojo.classList.remove("seleccionado");
        btnAzul.classList.remove("seleccionado");
        btnBlanco.classList.remove("seleccionado");
    } else {
        btnAmarillo.classList.add("seleccionado");
        btnVerde.classList.remove("seleccionado");
        btnNegro.classList.remove("seleccionado");
        btnRojo.classList.remove("seleccionado");
        btnAzul.classList.remove("seleccionado");
        btnBlanco.classList.remove("seleccionado");
    }   
});


let btnVerde = document.querySelector(".color2");
btnVerde.addEventListener("mousedown", () => {
    if (btnVerde.classList.contains("seleccionado")) {
        btnAmarillo.classList.remove("seleccionado");
        btnNegro.classList.remove("seleccionado");
        btnRojo.classList.remove("seleccionado");
        btnAzul.classList.remove("seleccionado");
        btnBlanco.classList.remove("seleccionado");
    } else {
        btnVerde.classList.add("seleccionado");
        btnAmarillo.classList.remove("seleccionado");
        btnNegro.classList.remove("seleccionado");
        btnRojo.classList.remove("seleccionado");
        btnAzul.classList.remove("seleccionado");
        btnBlanco.classList.remove("seleccionado");
    }   
});

let btnNegro = document.querySelector(".color3");
btnNegro.addEventListener("mousedown", () => {
    if (btnNegro.classList.contains("seleccionado")) {
        btnAmarillo.classList.remove("seleccionado");
        btnVerde.classList.remove("seleccionado");
        btnRojo.classList.remove("seleccionado");
        btnAzul.classList.remove("seleccionado");
        btnBlanco.classList.remove("seleccionado");
    } else {
        btnNegro.classList.add("seleccionado");
         btnAmarillo.classList.remove("seleccionado");
        btnVerde.classList.remove("seleccionado");
        btnRojo.classList.remove("seleccionado");
        btnAzul.classList.remove("seleccionado");
        btnBlanco.classList.remove("seleccionado");
    }   
});

let btnRojo = document.querySelector(".color4");
btnRojo.addEventListener("mousedown", () => {
    if (btnRojo.classList.contains("seleccionado")) {
        btnAmarillo.classList.remove("seleccionado");
        btnVerde.classList.remove("seleccionado");
        btnNegro.classList.remove("seleccionado");
        btnAzul.classList.remove("seleccionado");
        btnBlanco.classList.remove("seleccionado");
    } else {
        btnRojo.classList.add("seleccionado");
        btnAmarillo.classList.remove("seleccionado");
        btnVerde.classList.remove("seleccionado");
        btnNegro.classList.remove("seleccionado");
        btnAzul.classList.remove("seleccionado");
        btnBlanco.classList.remove("seleccionado");
    }   
});
let btnAzul = document.querySelector(".color5");
btnAzul.addEventListener("mousedown", () => {
    if (btnAzul.classList.contains("seleccionado")) {
        btnAmarillo.classList.remove("seleccionado");
        btnVerde.classList.remove("seleccionado");
        btnNegro.classList.remove("seleccionado");
        btnRojo.classList.remove("seleccionado");
        btnBlanco.classList.remove("seleccionado");
    } else {
        btnAzul.classList.add("seleccionado");
        btnAmarillo.classList.remove("seleccionado");
        btnVerde.classList.remove("seleccionado");
        btnNegro.classList.remove("seleccionado");
        btnRojo.classList.remove("seleccionado");
        btnBlanco.classList.remove("seleccionado");
    }   
})
let btnBlanco = document.querySelector(".color6");
btnBlanco.addEventListener("mousedown", () => {
    if (btnBlanco.classList.contains("seleccionado")) {
        btnAmarillo.classList.remove("seleccionado");
        btnVerde.classList.remove("seleccionado");
        btnNegro.classList.remove("seleccionado");
        btnRojo.classList.remove("seleccionado");
        btnAzul.classList.remove("seleccionado");
    } else {
        btnBlanco.classList.add("seleccionado");
        btnAmarillo.classList.remove("seleccionado");
        btnVerde.classList.remove("seleccionado");
        btnNegro.classList.remove("seleccionado");
        btnRojo.classList.remove("seleccionado");
        btnAzul.classList.remove("seleccionado");
    }   
})




