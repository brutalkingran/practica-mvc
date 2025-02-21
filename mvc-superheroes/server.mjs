import express from 'express';
import { obtenerSuperheroePorIDController, buscarSuperheroesPorAtributoController, obtenerSuperheroesMayoresDe30Controller } from './controllers/superheroesController.mjs';

const app = express();
const PORT = 3005;

// rutas
app.get('/superheroes/id/:id', obtenerSuperheroePorIDController);
app.get('/superheroes/atributo/:atributo/:valor', buscarSuperheroesPorAtributoController);
app.get('/superheroes/edad/mayorA30', obtenerSuperheroesMayoresDe30Controller);
app.get('/', (req, res) => res.send('Bienvenido a la API de Superhéroes 🦸‍♂️'));

// levantar servidor en el puerto 3005
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

