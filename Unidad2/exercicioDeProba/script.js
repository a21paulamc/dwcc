const mostrarTabla = () => {

    // previene que el evento se propague. Si no ponemos esta línea, al terminar limpia los campos y no nos deja ver el resultado. Lo muestra y lo borra al momento
    this.event.preventDefault();

    //pasamos el valor del campo de texto a número ya que todos los datos recogidos en un formulario se tratan como texto
    const numero = Number(document.getElementById('numero').value);

    //comprobamos si el valor que el usuario introdujo está entre 0 y 10 ambos incluídos
    //Si el valor está entre 0 y 10, muestra el bloque tabla mediante un bucle
    //Si el valor no está entre 0 y 10, alerta al usuario del error y elimina el contenido del campo de texto
    if (numero >= 0 && numero <= 10) {
        let tabla = document.getElementById('tabla');
        let tablaMultiplicar = `<h2>Tabla de multiplicar del número ${numero}</h2>`;
        tablaMultiplicar += '<ul>';

        for (let i = 0; i <= 10; i++){
            tablaMultiplicar += `<li>${numero} * ${i} = ${numero * i}</li>`
        }

        tablaMultiplicar += '</ul>';
        tabla.innerHTML = tablaMultiplicar;
    } else {
        alert('El número introducido debe estar entre 0 y 10 (ambos inclusive)');
        document.getElementById('numero').value = '';
    }
}


//AUTOEVALUACIÓN

//El uso del bucle for en este ejemplo es el más adecuado. ¿Verdadero o falso?

//a) Verdadero.
//Correcto. En este caso sabemos las iteraciones justas que debe dar el bucle, por lo que sí que sería el más adecuado aunque se podría haber llevado a cabo con cualquiera de los otros.

//b) Falso.
//Incorrecto. En este caso sabemos las iteraciones justas que debe dar el bucle, por lo que sí que sería el más adecuado aunque se podría haber llevado a cabo con cualquiera de los otros.