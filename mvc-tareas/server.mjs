import express from 'express';
// importamos controladores
import { listarTareasController,
    listarTareasCompletadasController,
    crearTareaController,
    completarTareaController,
    eliminarTareaController } from './controllers/tareaController.mjs';

const app = express();
const PORT = 3000;

// Middleware que permite el manejo de solicitudes con cuerpo de JSON
app.use( express.json() );

// Rutas
    // Ruta para obtener todas las tareas
app.get('/tareas', listarTareasController);
    // Ruta para obtener tareas completadas
app.get('/tareas/completadas', listarTareasCompletadasController);
    // Ruta para crear nueva tarea
app.post('/tareas', crearTareaController);
    // Ruta para marcar tarea como completada
app.put('/tareas/:id/completar', completarTareaController);
    // Ruta para eliminar una tarea
app.delete('/tareas/:id', eliminarTareaController);

// inicializar sv
app.listen(PORT, () => {
    console.log(`Servicio corriendo en http://localhost:${PORT}`);
});

