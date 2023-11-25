"use strict";

// Apartado 1
let diaActual = new Date();
let finCurso = new Date(2024, 5, 25);
let milisegundos = finCurso - diaActual;
let segundos = milisegundos / 1000;
let minutos = segundos / 60;
let horas = minutos / 60;
let dias = horas / 24;
console.log(dias);


//Apartado 2
let diaCumple = prompt("Introduce o dia do teu cumpleanos");
let mesCumple = prompt("Introduce o mes do teu cumpleanos");
let ano = new Date().getFullYear();

for (ano; ano < 2100; ano++) {
    let diaSemana = new Date(ano, mesCumple-1, diaCumple).getDay();
    if (diaSemana == 6 || diaSemana == 0) {
        console.log(ano);
    };
    
}

//Apartado 3
let day = new Date().getDate();
let weekDay = new Date().getDay();

let diaGalego;
let diaIngles;

switch (weekDay) {
    case 0:
        diaGalego = "Domingo";
        diaIngles = "Sunday";
        break;
    case 1:
        diaGalego = "Lunes";
        diaIngles = "Monday";
        break;
    case 2:
        diaGalego = "Martes";
        diaIngles = "Tuesday";
        break;
    case 3:
        diaGalego = "Miércoles";
        diaIngles = "Wednesday";
        break;
    case 4:
        diaGalego = "Jueves";
        diaIngles = "Thursday";
        break;
    case 5:
        diaGalego = "Viernes";
        diaIngles = "Friday";
        break;
    case 6:
        diaGalego = "Sábado";
        diaIngles = "Satruday";
        break;
}
let month = new Date().getMonth();
let mesGalego;
let mesIngles;

switch (month) {
    case 1:
        mesGalego = "xaneiro";
        mesIngles = "January";
        break;
    case 2:
        mesGalego = "febreiro";
        mesIngles = "February";
        break;
    case 3:
        mesGalego = "marzo";
        mesIngles = "March";
        break;
    case 4:
        mesGalego = "abril";
        mesIngles = "April";
        break;
    case 5:
        mesGalego = "maio";
        mesIngles = "May";
        break;
    case 6:
        mesGalego = "xuño";
        mesIngles = "June";
        break;
    case 7:
        mesGalego = "xullo";
        mesIngles = "July";
        break;
    case 8:
        mesGalego = "agosto";
        mesIngles = "August";
        break;
    case 9:
        mesGalego = "septembro";
        mesIngles = "September";
        break;
    case 10:
        mesGalego = "outubro";
        mesIngles = "October";
        break;
    case 11:
        mesGalego = "novembro";
        mesIngles = "November";
        break;
    case 12:
        mesGalego = "decembro";
        mesIngles = "December";
        break;
}

let year = new Date().getFullYear();
let decision;

while (decision != 1 && decision != 2 && decision != 3) {
    decision = Number(prompt(`Pulsa 1 para o formato '17/02/2016'
    Pulsa 2 para o formato 'Mércores, 17 de febreiro de 2016'
    Pulsa 3 para o formato 'Wednesday, February 17, 2016'`));
};

let formato1 = new Date().toLocaleDateString();

switch (decision) {
    case 1:
        console.log(formato1);
        break;
    case 2:
        console.log(`${diaGalego}, ${day} de ${mesGalego} de ${year}`);
        break;
    case 3:
        console.log(`${diaIngles}, ${mesIngles} ${day}, ${year}`);
        break;

}


// Apartado 4
let horaActual = new Date().getHours();
let minutosActual = new Date().getMinutes();
let segundosActual = new Date().getSeconds();
let ampm = horaActual >= 12 ? 'PM' : 'AM';
let horaAct = horaActual % 12;
horaAct = horaAct ? horaAct : 12;

let decisionHora;

while (decisionHora != 1 && decisionHora != 2 && decisionHora != 3) {
    decisionHora = Number(prompt(`Pulsa 1 para o formato '14:35:07'
    Pulsa 2 para o formato '02:35 PM`));
};

switch (decisionHora) {
    case 1:
        console.log(`${horaActual}:${minutosActual}:${segundosActual}`);
        break;
    case 2:
        console.log(`${horaAct}:${minutosActual}${ampm}`);
        break;
}