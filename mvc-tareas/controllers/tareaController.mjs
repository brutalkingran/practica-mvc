import { listarTareas, listarTareasCompletadas, crearTarea, completarTarea, eliminarTarea } from '../services/tareaService.mjs';
import { renderizarListaTareas, renderizarMensaje } from '../views/tareaVista.mjs';

// controlador para listar todas las tareas
export const listarTareasController = ( req, res ) => {
    const tareas = listarTareas();
    res.send( renderizarListaTareas( tareas ) );
}

// controlador listar tareas completadas
export const listarTareasCompletadasController = ( req, res ) => {
    const tareasCompletadas = listarTareasCompletadas();
    res.send( renderizarListaTareas( tareasCompletadas ) );
}

// controlador para crear nueva tarea
export const crearTareaController = ( req, res ) => {
    const { id, titulo, descripcion, completado } = req.body;
    crearTarea( id, titulo, descripcion, completado );
    res.send( renderizarMensaje( 'Tarea creada con éxito' ));
}

// controlador para marcar una tarea como completada
export const completarTareaController = ( req, res ) => {
    const { id } = req.params;
    completarTarea( parseInt( id ) );
    res.send( renderizarMensaje( 'Tarea marcada como completada' ) );
}

// controlador para eliminar una tarea
export const eliminarTareaController = ( req, res ) => {
    const { id } = req.params;
    eliminarTarea( parseInt( id ) );
    res.send( renderizarMensaje( 'Tarea eliminada con exito') );
}
