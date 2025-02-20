export default class Tarea {
    constructor(id, titulo, descripcion, completado = false){
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.completado = completado;
    }

    // metodo para marcar tarea como completada
    completar() {
        this.completado = true; // cambia estado de completado a true
    }

    validar() {
        if (!this.titulo || this.titulo.trim() === '') {
            throw new Error('El titulo de la tarea es obligatorio.');
        }
    }
}