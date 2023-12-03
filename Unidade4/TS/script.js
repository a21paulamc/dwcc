var meuArrayPaises = ["Portugal", "Francia", "Andora", "Alemania", "Suíza", "Italia", "Países Baixos", "Grecia"];
function contarPaisesTS(arr) {
    var cantidadePaises = arr.length;
    console.log("O n\u00FAmero de elementos do array \u00E9 ".concat(cantidadePaises));
}
function mostrarPaisesTS(arr) {
    arr.forEach(function (element) {
        console.log(element);
    });
}
function ordearInversaTS(arr) {
    var arrInvertido = arr.slice();
    console.log(arrInvertido.reverse());
}
function engadirPaisComezoTS(arr) {
    var arrayAumentado1 = arr.unshift("España");
    console.log(arrayAumentado1);
}
function engadirPaisFinalTS(arr) {
    var arrayAumentado2 = arr.push("Bélgica");
    console.log(arrayAumentado2);
}
function eliminarPaisComezoTS(arr) {
    var paisEliminadoPrincipio = arr.shift();
    console.log(arr.shift());
    console.log("O pa\u00EDs eliminado foi ".concat(paisEliminadoPrincipio));
}
function eliminarPaisFinalTS(arr) {
    var paisEliminadoFinal = arr.pop();
    console.log(arr.pop());
    console.log("O pa\u00EDs eliminado foi ".concat(paisEliminadoFinal));
}
function mostrarPaisElexidoTS(arr) {
    var posicion = Number(prompt("Introduce un número do 0 ao 7"));
    console.log("O pa\u00EDs da posici\u00F3n ".concat(posicion, " \u00E9 ").concat(arr[posicion]));
}
function mostrarPosicionElexidaTS(arr) {
    var _a;
    var pais = (_a = prompt("Introduce un país da seguinte lista: Portugal, Francia, Andorra, Alemania, Suíza, Italia, Países Baixos, Grecia")) !== null && _a !== void 0 ? _a : "";
    console.log("O pa\u00EDs ".concat(pais, " est\u00E1 na posici\u00F3n ").concat(arr.indexOf(pais)));
}
function mostrarPaisesEntreDuasPosicionsTS(arr) {
    var pos1 = Number(prompt("Elixe un número do 0 ao 7"));
    pos1 = pos1 + 1; //Así facemos que non se amose a posición elexida se non a seguinte xa que queremos amosar os países entre dúas posicións, ambas excluídas.
    var pos2 = Number(prompt("Elixe outro número do 0 ao 7"));
    console.log("Os pa\u00EDses entre as posici\u00F3ns ".concat(pos1, " e ").concat(pos2, " son: ").concat(arr.slice(pos1, pos2)));
}
contarPaisesTS(meuArrayPaises);
mostrarPaisesTS(meuArrayPaises);
ordearInversaTS(meuArrayPaises);
engadirPaisComezoTS(meuArrayPaises);
engadirPaisFinalTS(meuArrayPaises);
eliminarPaisComezoTS(meuArrayPaises);
eliminarPaisFinalTS(meuArrayPaises);
mostrarPaisElexidoTS(meuArrayPaises);
mostrarPosicionElexidaTS(meuArrayPaises);
mostrarPaisesEntreDuasPosicionsTS(meuArrayPaises);
