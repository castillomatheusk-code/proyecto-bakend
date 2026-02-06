const express = require('express');
const path = require('path');
const { seed } = require('./src/models/index');
const labRouter = require('./src/routers/labRouter');

const app = express(); // Aquí se crea la función app

// Ejecutar la semilla de datos
seed(); 

// Configuración de vistas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares para leer datos de formularios y JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// CONEXIÓN DE RUTAS
app.use('/', labRouter);

// LA LÍNEA MÁS IMPORTANTE PARA QUITAR EL ERROR:
module.exports = app;