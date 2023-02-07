export class persona {
    id?: number;
    nombre: string;
    apellido: string;
    cargo: string;
    ciudad: string;
    descripcion: string;
    img: string;

    constructor(nombre: string, apellido: string, cargo: string, ciudad: string, descripcion: string, img: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.cargo = cargo;
        this.ciudad = ciudad;
        this.descripcion = descripcion;
        this.img = img;
    }

}
