import { Cerveza } from "./cerveza";

export class Contacto {
    nombre: string = '';
    telefono: string = '';
    fecha: string = '';
    genero: string = '';
    listaBeers!: Cerveza[];
    constructor(nombre: string,
        telefono: string,
        fecha: string,
        genero: string,
        listaBeers: Cerveza[]) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.fecha = fecha;
        this.genero = genero;
        this.listaBeers = listaBeers;
    }
}
