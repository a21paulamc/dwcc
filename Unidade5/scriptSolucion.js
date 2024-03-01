"use strict";

let errores = document.getElementById("errores");
let intentos = document.getElementById("intentos");



//VALIDACIONES CAMPOS NOMBRE Y APELLIDOS
//--------------------------------------------------------------------
/*La función que usaremos hace que un valor se ponga en mayúsculas al perder el foco
comprueba que un valor siga un patrón
si el patrón se cumple, al perder el foco no saltará ningún error
si el patrón no se cumple, saltará un error y el foco se pondrá el el campo del error */

//guardamos los campos en variables
let nombre = document.getElementById("nombre");
let apellidos = document.getElementById("apellidos");
//añadimos el evento que se dispara al perder el foco
nombre.addEventListener("focusout", validarNombreApellidos, false);
apellidos.addEventListener("focusout", validarNombreApellidos, false);
//desarrollamos la función que servirá para ambos campos
function validarNombreApellidos(e) {
  let patron = /(^[A-ZÁÉÍÓÚÑ][A-ZÁÉÍÓÚÑ ]{1,20}$)/gi; 
  e.target.value = e.target.value.toUpperCase();
  const isValid = patron.test(e.target.value);
  if (isValid == true) { 
    errores.innerHTML = "";
  } else {
    errores.innerHTML = "Error"; 
    e.target.focus();
  }
}



//VALIDACIONES CAMPO EDAD
//------------------------------------------------------------------------
/*La función que usaremos hace que a través de un patrón, la edad sólo pueda contener un mínimo de 1 dígito y un máximo de 3, además el valor mínimo será 0 y el máximo 105. En caso de no ser así, dará error y el foco quedará en el campo edad */

//guardamos el campo edad en una variable
let edad = document.getElementById("edad");
//añadimos un evento al campo edad que se disparará al perder el foco y desarrollamos la función
edad.addEventListener("focusout", () => {
  let patron = /\d{1,3}/g;
  const edadValida = patron.test(edad.value);
  if (edadValida == true && (edad.value >= 0 && edad.value <= 105)) {
    errores.innerHTML = "";
  } else {
    errores.innerHTML = "Error en la edad";
    edad.focus();
  }
}, false);



//VALIDACIONES CAMPO NIF
//------------------------------------------------------------------------
/*La función que usaremos hace que a través de un patrón, el NIF sólo pueda contener 8 dígitos al principio y 1 letra de las correctas al final. En caso de no ser así, dará error y el foco quedará en el campo nif */

//guardamos el campo nif en una variable
let nif = document.getElementById("nif");
//añadimos un evento al campo nif que se disparará al perder el foco y desarrollamos la función
nif.addEventListener("focusout", () => {
  /*Explicación del patrón
  ^ => Que no haya nada más antes (de los números)
  \d => Sólo números
  {8} => Exactamente 8 (números)
  [TRWAGMYFPDXBNJZSQVHLCKE] => Sólo estas letras permitidas (solo una)
  $ => nada más después (de una de las letras anteriores)*/
  let patron = /^\d{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/g;
  nif.value = nif.value.toUpperCase();
  const nifValido = patron.test(nif.value);
  if (nifValido == true) { 
    errores.innerHTML = "";
  } else {
    errores.innerHTML = "Error en el NIF";
    nif.focus();
  }
}, false);



//VALIDACIONES CAMPO EMAIL
//------------------------------------------------------------------------
/*La función que usaremos hace a través de un patrón, que el email sea válido. En caso de no ser así, dará error y el foco quedará en el campo email.
Un email válido puede tener números y letras mayúsculas y minúsculas,sin tildes ni letra "ñ", puede tener también guiones bajos y medios y también puntos siempre y cuando no sea al principio o preceda al @. Después del arroba se podrá hacer lo mismo que antes,seguido de un sólo punto y entre 2 y 5 letras*/

//almacenamos el campo email en una variable
let email = document.getElementById("email");
//añadimos un evento al campo email que se disparará al perder el foco y desarrollamos la función
email.addEventListener("focusout", () => {
  /*Explicación del patrón
  ^ => Empieza por
  [a-zA-Z0-9_-] => Se permite cualquier letra en mayúsculas o minúsuclas y cualquier número. También barra baja y guión
  + => Se permiten uno o más del grupo entre corchetes anterior(nunca cero)
  ([.][a-zA-Z0-9_-]+)* => Se permiten puntos. Si hay puntos tiene que haber después cualquier mayúscula,minúscula,dígitos,barras bajas o guiones,y de esto último podrá haber uno o más, nunca 0 para evitar que termine en punto. También puede no haber nada de lo que va entre paréntesis (que no haya un .algo antes del arroba), esto es lo que significa el *, cero o más.
  * => Sólo estas letras permitidas (solo una)
  @ => Tiene que haber un @ y será seguido por letras,números, guiones o barras bajas
  [a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)* => Tras el arroba,las opciones son las mismas que antes de él (explicado anteriormente)
  [.][a-zA-Z]{2,5} => Terminaremos con un punto y entre dos y 5 letras mayúsculas o minúsculas
  $ => Nada más después de esto*/
  let patron = /^[a-zA-Z0-9_-]+([.][a-zA-Z0-9_-]+)*@[a-zA-Z0-9_-]+([.][a-zA-Z0-9_-]+)*[.][a-zA-Z]{2,5}$/g;
  email.value = email.value.toLowerCase();
  const emailValido = patron.test(email.value);
  if (emailValido == true) { 
    errores.innerHTML = "";
    } else {
      errores.innerHTML = "Error en el email";
      edad.focus();
    }
}, false);



//VALIDACIONES CAMPO PROVINCIA
//------------------------------------------------------------------------
/*La función que usaremos hace que el valor del campo provincia tenga que ser diferente a 0 (que haya alguna seleccionada). En caso de que no sea así, dará error, el foco quedará en el campo provincias y se nos pedirá que seleccionemos una */

//almacenamos el campo provincia en una variable
let provincia = document.getElementById("provincia");
//añadimos un evento al campo provincia que saltará al perder el foco y desarrollamos la función
provincia.addEventListener("focusout", () => {
  if (provincia.value != 0) { 
    errores.innerHTML = "";
    } else {
      errores.innerHTML = "Elija una provincia"; 
      provincia.focus();
    }
}, false);



//VALIDACIONES CAMPO FECHA
//------------------------------------------------------------------------
/*La función que usaremos hace que mediante un patrón se compruebe el formato del valor del campo fecha. En caso de que sea un formato erróneo,se indicará que hay un error en el campo fecha y el foco se quedará en ese campo */

//almacenamos el campo fecha en una variable
let fecha = document.getElementById("fecha");
//añadimos un evento al campo fecha que lanzará la función al perder el foco
fecha.addEventListener("focusout", () => {
  /*Explicación del patrón
  ^ => Empieza por
  () =>grupo
  \d{2} => Dos números
  \-{1} => Un guión
  \d{4}=> Cuatro números
  | => después de esto se muestra otra posible opción dentro de un grupo ()
  \/{1} => Una barra
  $ => Nada más después de esto*/
  let patron = /^(\d{2}\-{1}\d{2}\-{1}\d{4})|(\d{2}\/{1}\d{2}\/{1}\d{4})$/g;
  const fechaValida = patron.test(fecha.value);
  if (fechaValida == true) { 
    errores.innerHTML = ""; 
  } else {
    errores.innerHTML = "Error en la fecha";
    fecha.focus();
  }
}, false);



//VALIDACIONES CAMPO TELÉFONO
//------------------------------------------------------------------------
/*La función que usaremos hace que mediante un patrón se compruebe el formato del valor del campo teléfono. En caso de que sea un formato erróneo, se indicará que hay un error en el campo teléfono y el foco se quedará en ese campo */

//almacenamos el campo teléfono en una variable
let telefono = document.getElementById("telefono");
//añadimos un evento al campo telefono que lanzará la función al perder el foco
telefono.addEventListener("focusout", () => {
  /*Explicación del patrón
  ^ => Empieza por
  \d{9} => Nueve números
  $ => Nada más después de esto*/
  let patron = /^\d{9}$/g;
  const telefonoValido = patron.test(telefono.value);
  if (telefonoValido == true) { 
    errores.innerHTML = "";
  } else {
    errores.innerHTML = "Error en el teléfono";
    telefono.focus();
  }
}, false);



//VALIDACIONES CAMPO HORA
//------------------------------------------------------------------------
/*La función que usaremos hace que mediante un patrón se compruebe el formato del valor del campo hora. En caso de que sea un formato erróneo, se indicará que hay un error en el campo hora y el foco se quedará en ese campo */

//almacenamos el campo hora en una variable
let hora = document.getElementById("hora");
//añadimos un evento al campo hora que lanzará la función al perder el foco
hora.addEventListener("focusout", () => {
  /*Explicación del patrón
  ^ => Empieza por
  \d{2} => Dos números
  \:{1} => El caracter : una vez
  \d{2} => Dos números
  $ => Nada más después de esto*/
  let patron = /^\d{2}\:{1}\d{2}$/g;
  const horaValida = patron.test(hora.value);
  if (horaValida == true) { 
    errores.textContent = "";
  } else {
    errores.textContent = "Error en la hora";
    hora.focus();
    }
}, false);



//CREACIÓN COOKIES
//------------------------------------------------------------------------
//función con la que creamos una cookie con nombre y valor
function setCookie(nombreCookie,valorCookie) {
  document.cookie = `${nombreCookie}=${valorCookie}`;
}

//Le damos el nombre "Intentos" a la cookie y el valor 0 porque queremos que el contador empiece en 0
setCookie("Intentos", "0");

//función que aumenta el contador de intentos en uno cada vez que se ejecuta
function getCookie(nombreCookie) {
  //descomponemos la cookie en un array con dos elementos, el nombre por un lado y el valor por otro
  const partesCookie = decodeURIComponent(document.cookie);
  const arrayCookie = partesCookie.split("=");
  //cogemos el valor, lo pasamos a número y lo almacenamos en nueva variable
  let valorIntentos = Number(arrayCookie[1]);
  //aumentamos el contador de intentos en uno
  valorIntentos = valorIntentos + 1;
  //modificamos la cookie con el nuevo valor para que no se resetee a 0
  setCookie(nombreCookie, valorIntentos);
  //mostramos en el campo intentos
  intentos.innerHTML = `${nombreCookie} = ${valorIntentos}`;
}



//SUBMIT CON CONFIRMACIÓN
//------------------------------------------------------------------------
let formulario = document.getElementById("formulario");

//añadimos un evento al formulario de tipo submit que se ejecutará cada vez que pulsemos en el botón submit
formulario.addEventListener("submit", (e) => {
  //evitamos su comportamiento por defecto (que se envíe), para poder pedir primero una confirmación
  e.preventDefault();
  //Si todos los campos están cubiertos,se pide la confirmación y si no, se lanza la función que cuenta el número de intentos 
  if (nombre.value != "" && apellidos.value != "" && edad.value != "" && nif.value && email.value != "" && provincia.value != "" && fecha.value != "" && telefono.value != "" && hora.value != "") {
    confirm("¿Enviar datos?");
  } else {
    getCookie("Intentos");
  }
}, true);
