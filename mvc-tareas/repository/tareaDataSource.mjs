// definir clase abstracta que actúa como interfaz para persistencia de datos
export default class TareasDataSource {
    // método abstracto para obtener todas las tareas
    obtenerTodas() {
        throw new Error('Este método debe ser implementado por la subclase');
    }
    // método abstracto para guardar todas las tareas
    obtenerTodas( tareas ) {
        throw new Error('Este método debe ser implementado por la subclase');
    }
    // método abstracto para eliminar todas las tareas
    eliminar( id ) {
        throw new Error('Este método debe ser implementado por la subclase');
    }
}