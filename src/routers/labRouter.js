const express = require('express');
const router = express.Router();
const LabController = require('../controllers/LabController');

router.get('/', LabController.index);
router.get('/cliente/:id', LabController.verCliente);
router.get('/empleados', LabController.listarEmpleados);
router.get('/examenes', LabController.listarExamenes);
router.get('/muestras/nueva', LabController.formMuestra);
router.post('/muestras/nueva', LabController.crearMuestra);
router.get('/examenes/nuevo', LabController.formExamen);
router.post('/examenes/nuevo', LabController.crearExamen);
router.get('/muestras/editar/:id', LabController.editarEstadoMuestra);
router.post('/muestras/actualizar/:id', LabController.actualizarMuestra);
router.get('/examenes/editar/:id', LabController.editarEstadoExamen);
router.post('/examenes/actualizar/:id', LabController.actualizarExamen);

module.exports = router;