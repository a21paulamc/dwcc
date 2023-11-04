//Usando if/else
var idade = parseInt(prompt("Introduza a súa idade (if/else)"));
while (isNaN(idade)) {
    idade = parseInt(prompt("Introduza a súa idade (if/else)"));
}
while (idade < 0 || idade > 100) {
    idade = parseInt(prompt("Por favor, introduza unha idade entre 0 e 100 (if/else)"));
}
if (idade >= 0 && idade <= 12) {
    console.log("Neno");
}
else if (idade >= 13 && idade <= 18) {
    console.log("Adolescente");
}
else if (idade >= 19 && idade <= 30) {
    console.log("Xoven");
}
else if (idade >= 31 && idade <= 64) {
    console.log("Adulto");
}
else {
    console.log("Xubilado");
}
//usando case/switch
var idade2;
do {
    idade2 = parseInt(prompt("Introduza a súa idade (if/else)"));
} while (isNaN(idade2) || (idade2 < 0 || idade2 > 100));
idade2 = Number(idade2);
switch (true) {
    case idade2 <= 12:
        console.log("Neno");
        break;
    case idade2 <= 18:
        console.log("Adolescente");
        break;
    case idade2 <= 30:
        console.log("Xoven");
        break;
    case idade2 <= 63:
        console.log("Adulto");
        break;
    case idade2 <= 100:
        console.log("Xubilado");
        break;
    default:
        console.log("Erro");
        break;
}
