"use strict";


const validar = (evento) => {
    evento.preventDefault();

    let respuesta = document.getElementById("respuesta-servidor");
    let info = document.getElementById("info-respuesta");

    //VALIDAMOS NOMBRE
    let nombre = document.getElementById("nombre").value;
    //caracteres alfabéticos con extensión máxima de 20 caracteres.
    let patronNombre = /^[A-Za-zÑñÁáÉéÍíÓóÚú]{1,20}$/g; 
    if (patronNombre.test(nombre) == true) {
        respuesta.innerText = "";
    } else if (patronNombre.test(nombre) == false){
        respuesta.innerText = "El nombre no es válido";    
    }


    //VALIDAMOS APELLIDOS
    let apellidos = document.getElementById("apellidos").value;
    //caracteres alfabéticos con extensión máxima de 40 caracteres.
    let patronApellidos = /^[A-Za-zÑñÁáÉéÍíÓóÚú]{1,40}$/g; 
    if (patronApellidos.test(apellidos) == true) {
        respuesta.innerText = respuesta.innerText + "";
    } else if (patronApellidos.test(apellidos) == false){
        respuesta.innerText = respuesta.innerText + " Los apellidos no son válidos";  
    }


    //VALIDAMOS CORREO
    let correo = document.getElementById("correo").value;
    //caracteres alfanuméricos antes y después del @ y terminar en .com|.net|.es|.gal|.org
    let patronCorreo = /^\w+@\w+\.(com|net|es|gal|org)$/g;
    if (patronCorreo.test(correo) == true) {
        respuesta.innerText = respuesta.innerText + "";
    } else if (patronCorreo.test(correo) == false){
        respuesta.innerText = respuesta.innerText + " El correo no es válido";  
    }


    //VALIDAMOS USUARIO
    let usuario = document.getElementById("usuario").value;
    //caracteres alfanuméricos con longitud máxima de 20
    let patronUsuario = /^\w{1,20}$/g;
    if (patronUsuario.test(usuario) == true) {
        respuesta.innerText = respuesta.innerText + "";
    } else if (patronUsuario.test(usuario) == false){
        respuesta.innerText = respuesta.innerText + " El usuario no es válido";  
    }


    //VALIDAMOS CLAVE
    let clave = document.getElementById("clave").value;
    //mínimo 8 caracteres, mínimo una mayúscula,una minúscula, un número y un caracter especial
    let patronClave = /((?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W))/g;
    if (patronClave.test(clave) == true) {
        respuesta.innerText = respuesta.innerText + "";
    } else if (patronClave.test(clave) == false){
        respuesta.innerText = respuesta.innerText + " La clave no es válida";  
    }


    //VALIDAMOS TELÉFONO
    let telefono = document.getElementById("telefono").value;
    //solo 9 dígitos
    let patronTelefono = /\d{9}/g;
    if (patronTelefono.test(telefono) == true) {
        respuesta.innerText = respuesta.innerText + "";
    } else if (patronTelefono.test(telefono) == false){
        respuesta.innerText = respuesta.innerText + " El teléfono no es válido";  
    }

    //eliminamos el atributo style que está oculto para que se vea la respuesta
    info.removeAttribute("style");

    //si no hay errores en el formulario, se envian los datos
    if (respuesta.innerText == "") { 
        //creamos un objeto FormData con los datos del formulario
        let fd = new FormData();
        fd.append('nombre', nombre);
        fd.append('apellidos', apellidos);
        fd.append('correo', correo);
        fd.append('usuario', usuario);
        fd.append('clave', clave);
        fd.append('telefono', telefono);
        //creamos la petición
        let peticion = new XMLHttpRequest();
        let url = "./php/registrar.php";
        let method = "POST";
        peticion.open(method, url);
        //mostramos la respuesta   
        peticion.onload = function () {
            respuesta.innerHTML = peticion.responseText;
        }
        peticion.send(fd);
    }
       
}; 

        
const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", validar, true);


