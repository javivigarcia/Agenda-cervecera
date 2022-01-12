export class Cerveza {
    id: string = '';
    nombre: string = '';
    descripcion: string = '';
    imagen: string = '';
    estado:boolean=false;

    constructor(id: string, nombre: string, descripcion: string, imagen: string,estado:boolean) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.estado=estado;
    }
}
