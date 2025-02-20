// funcion renderizar lista tareas formato json
export const renderizarListaTareas = ( tareas ) => JSON.stringify({ mensaje }, null, 2); // formatea array de tareas en JSON con identacion

// funcion renderizar mensaje generico JSON
export const renderizarMensaje = ( mensaje ) => JSON.stringify( { mensaje }, null, 2); // envuelve un mensaje en formato JSON

// funcion para renderizar tarea especifica en formato JSON
export const renderizarTarea = ( tarea ) => JSON.stringify( tarea, null, 2); // formatea tarea individual en json con identificacion
