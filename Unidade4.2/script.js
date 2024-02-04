"use strict";

class Disco{
    nombre;
    artista;
    fecha;
    genero;
    prestado;

    constructor(nombre, artista, fecha, genero, prestado) {
        this.nombre = nombre;
        this.artista = artista;
        this.fecha = fecha;
        this.genero = genero;
        this.prestado = prestado;
    }

    cargarDatos() {
        let datos = [];
        datos.push(this.nombre);
        datos.push(this.artista);
        datos.push(this.fecha);
        datos.push(this.genero);
        datos.push(this.prestado);
    }
    
    mostrarInfoDisco() {
        console.log(`Nombre del disco: ${this.nombre}`);
        console.log(`Grupo de música: ${this.artista}`);
        console.log(`Año de publicación: ${this.fecha}`);
        console.log(`Tipo de música: ${this.genero}`);
        console.log(`Prestado: ${this.prestado}`);
        console.log(``);
    }
    
    mostrarDiscos() {
        return this.mostrarInfoDisco()
        
    }
}

const disco1 = new Disco("Toxicity", "System Of A Down", "2001", "Metal", "Sí");

const disco2 = new Disco("AM", "Artic Monkeys", "2013", "Indie Rock", "No");

disco1.mostrarInfoDisco();
disco2.mostrarDiscos();
