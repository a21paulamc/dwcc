"use strict";

let enviar = document.getElementById("enviar");
let intentos = document.getElementById("intentos");

let miCookie = document.cookie;
let envios = 0;

enviar.addEventListener("click", getCookie ,false)
	
function getCookie(miCookie) {
  miCookie = envios++;
  if (envios == 0) {
    intentos.innerHTML = "Intentos de envío = 0"  
  } else {
    intentos.innerHTML = `Intentos de envío = ${miCookie}`
  }
}
