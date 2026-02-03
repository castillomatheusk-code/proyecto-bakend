const express = require('express');
const path = require('path');
const logger = require('morgan');

// 1. Importar Seed y Router
const { seed } = require('./src/models/index');
const labRouter = require('./src/routers/labRouter');

const app = express();

// 2. Ejecutar Seed
seed();

// Configuración de EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// 3. Usar el nuevo Router
app.use('/', labRouter);

module.exports = app;