var meuArrayPaises:string[] = ["Portugal", "Francia", "Andora", "Alemania", "Suíza", "Italia", "Países Baixos", "Grecia"];


function contarPaisesTS(arr: string[]){
  let cantidadePaises = arr.length;
  console.log(`O número de elementos do array é ${cantidadePaises}`);  
}

function mostrarPaisesTS(arr: string[]) {
    arr.forEach(element => {
        console.log(element)
    });
}

function ordearInversaTS(arr:string[]){
    let arrInvertido = arr.slice();
    console.log(arrInvertido.reverse())
}

function engadirPaisComezoTS(arr:string[]){
    let arrayAumentado1 = arr.unshift("España");
    console.log(arrayAumentado1);
}

function engadirPaisFinalTS(arr:string[]){
    let arrayAumentado2 = arr.push("Bélgica");
    console.log(arrayAumentado2);
}

function eliminarPaisComezoTS(arr:string[]){
    let paisEliminadoPrincipio = arr.shift();
    console.log(arr.shift());
    console.log(`O país eliminado foi ${paisEliminadoPrincipio}`);
}

function eliminarPaisFinalTS(arr:string[]){
    let paisEliminadoFinal = arr.pop();
    console.log(arr.pop());
    console.log(`O país eliminado foi ${paisEliminadoFinal}`);
}

function mostrarPaisElexidoTS(arr:string[]){
    let posicion = Number(prompt("Introduce un número do 0 ao 7"));
    console.log(`O país da posición ${posicion} é ${arr[posicion]}`);
}

function mostrarPosicionElexidaTS(arr:string[]) {
    let pais = prompt("Introduce un país da seguinte lista: Portugal, Francia, Andorra, Alemania, Suíza, Italia, Países Baixos, Grecia")?? "";
    console.log(`O país ${pais} está na posición ${arr.indexOf(pais)}`);
}

function mostrarPaisesEntreDuasPosicionsTS(arr:string[]) {
    let pos1 = Number(prompt("Elixe un número do 0 ao 7"));
    pos1 = pos1 + 1; //Así facemos que non se amose a posición elexida se non a seguinte xa que queremos amosar os países entre dúas posicións, ambas excluídas.
    let pos2 = Number(prompt("Elixe outro número do 0 ao 7"));
    console.log(`Os países entre as posicións ${pos1} e ${pos2} son: ${arr.slice(pos1, pos2)}`);
}


contarPaisesTS(meuArrayPaises);
mostrarPaisesTS(meuArrayPaises);
ordearInversaTS(meuArrayPaises);
engadirPaisComezoTS(meuArrayPaises);
engadirPaisFinalTS(meuArrayPaises);
eliminarPaisComezoTS(meuArrayPaises);
eliminarPaisFinalTS(meuArrayPaises);
mostrarPaisElexidoTS(meuArrayPaises);
mostrarPosicionElexidaTS(meuArrayPaises)
mostrarPaisesEntreDuasPosicionsTS(meuArrayPaises);