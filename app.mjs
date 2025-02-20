import express from 'express';

// crear instancia express
const app = express();

// configurar puerto que sv escuchará
const PORT = 3000;

// Ruta basica
app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});

// Iniciar sv
app.listen( PORT, () => {
    console.log(`SV corriendo en http://localhost:${PORT}`);
})