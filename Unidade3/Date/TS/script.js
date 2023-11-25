// Apartado 1
var diaActual = new Date();
var finCurso = new Date(2024, 5, 25);
var milisegundos = finCurso.valueOf() - diaActual.valueOf();
var segundos = milisegundos / 1000;
var minutos = segundos / 60;
var horas = minutos / 60;
var dias = horas / 24;
console.log(dias);


//Apartado 2
var diaCumple = Number(prompt("Introduce o dia do teu cumpleanos"));
var mesCumple = Number(prompt("Introduce o mes do teu cumpleanos"));
var ano = new Date().getFullYear();
for (ano; ano < 2100; ano++) {
    var diaSemana = new Date(ano, Number(mesCumple) - 1, Number(diaCumple));
    diaSemana.getDay();
    if (Number(diaSemana) == 6 || Number(diaSemana) == 0) {
        console.log(ano);
    }
    ;
}
//Apartado 3
var day = new Date().getDate();
var weekDay = new Date().getDay();
var diaGalego;
var diaIngles;
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
var month = new Date().getMonth();
var mesGalego;
var mesIngles;
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
var year = new Date().getFullYear();
var decision;
while (decision != 1 && decision != 2 && decision != 3) {
    decision = Number(prompt("Pulsa 1 para o formato '17/02/2016'\n    Pulsa 2 para o formato 'M\u00E9rcores, 17 de febreiro de 2016'\n    Pulsa 3 para o formato 'Wednesday, February 17, 2016'"));
}
;
var formato1 = new Date().toLocaleDateString();
switch (decision) {
    case 1:
        console.log(formato1);
        break;
    case 2:
        console.log("".concat(diaGalego, ", ").concat(day, " de ").concat(mesGalego, " de ").concat(year));
        break;
    case 3:
        console.log("".concat(diaIngles, ", ").concat(mesIngles, " ").concat(day, ", ").concat(year));
        break;
}
// Apartado 4
var horaActual = new Date().getHours();
var minutosActual = new Date().getMinutes();
var segundosActual = new Date().getSeconds();
var ampm = horaActual >= 12 ? 'PM' : 'AM';
var horaAct = horaActual % 12;
horaAct = horaAct ? horaAct : 12;
var decisionHora;
while (decisionHora != 1 && decisionHora != 2 && decisionHora != 3) {
    decisionHora = Number(prompt("Pulsa 1 para o formato '14:35:07'\n    Pulsa 2 para o formato '02:35 PM"));
}
;
switch (decisionHora) {
    case 1:
        console.log("".concat(horaActual, ":").concat(minutosActual, ":").concat(segundosActual));
        break;
    case 2:
        console.log("".concat(horaAct, ":").concat(minutosActual).concat(ampm));
        break;
}
