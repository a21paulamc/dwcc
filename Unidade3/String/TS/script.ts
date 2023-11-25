//Apartado 1
let nomeCompleto = prompt("Introduza o seu nome e apelidos");
console.log("O tamaño do nome e apelidos é " + String(nomeCompleto).length);

let nomeCompletoSenEspazos = String(nomeCompleto).replaceAll(" ", "");
console.log("O tamaño do nome e apelidos sen espazos é " + nomeCompletoSenEspazos.length);

let nomeCompletoMinusculas = String(nomeCompleto).toLowerCase();
console.log(nomeCompletoMinusculas);

let nomeCompletoMaiusculas = String(nomeCompleto).toUpperCase();
console.log(nomeCompletoMaiusculas);

let nomeSeparado = String(nomeCompleto).split(" ");
console.log(nomeSeparado);

let nomeUsuario = nomeSeparado[0]+nomeSeparado[1].charAt(0).toUpperCase()+nomeSeparado[2].charAt(0).toUpperCase();
console.log(nomeUsuario);



//Apartado 2
//comprobamos cantidade de caracteres
let contrasinal = prompt("Introduza o seucontrasinal");
if (String(contrasinal).length >= 8 && String(contrasinal).length <= 16) {
    console.log("Ten entre 8 e 16 caracteres");
} else {
    console.log("Non ten entre 8 e 16 caracteres")
}

//comprobamos se ten numeros
let numeros = 0;
for (let index = 0; index < String(contrasinal).length; index++) {
    if (Number(String(contrasinal).charAt(index))) {
        numeros = numeros;
    } else {
        numeros++;
    }
}

if (numeros > 0) {
    console.log("Ten algún número");
} else {
    console.log("Non ten ningún número");
}

//comprobamos se ten maiúsculas
let maiuscula = 0;
for (let index = 0; index < String(contrasinal).length; index++) {
    if (String(String(contrasinal).charAt(index))) {
        String(contrasinal).charAt(index).replace(String(contrasinal).charAt(index), "");
        maiuscula = maiuscula;
    } else if (String(contrasinal).charAt(index) == String(contrasinal).charAt(index).toUpperCase()) {
        maiuscula++;
    }
    
}
if (maiuscula >0) {
    console.log("Ten algunha maiúscula");
} else {
    console.log("Non ten ningunha maiúscula")
}

//comprobamos se ten minúsculas
let minuscula = 0;
for (let index = 0; index < String(contrasinal).length; index++) {
    if (String(String(contrasinal).charAt(index))) {
        String(contrasinal).charAt(index).replace(String(contrasinal).charAt(index), "");
        minuscula = minuscula;
    } else if (String(contrasinal).charAt(index) == String(contrasinal).charAt(index).toLowerCase()) {
        minuscula++;
    }
    
}
if (minuscula >0) {
    console.log("Ten algunha minúscula");
} else {
    console.log("Non ten ningunha minúscula")
}


//comprobamos se ten caracteres especiais
const regex = /([_,@#$%&.-])/g;
let especial = String(contrasinal).match(regex);
        
if (especial == null) {
    console.log("Non ten caracteres especiais");
} else {
    console.log("Ten caracteres especiais");
}