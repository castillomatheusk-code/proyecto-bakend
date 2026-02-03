const express = require('express');
const router = express.Router();
const LabController = require('../controllers/LabController');


router.get('/', LabController.listarTodo);
router.get('/cliente/:id', LabController.verCliente);
router.get('/api/muestras/recientes', LabController.ultimasMuestras);

router.post('/cliente', LabController.agregarCliente);
router.put('/examen/:id', LabController.editarExamen);
router.delete('/muestra/:id', LabController.eliminarMuestra);

module.exports = router;