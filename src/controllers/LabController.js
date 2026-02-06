const db = require('../models/index');

const LabController = {
    index: (req, res) => {
        res.render('index', { clientes: db.clientes });
    },
    verCliente: (req, res) => {
        const cliente = db.clientes.find(c => c.idCliente == req.params.id);
        if (cliente) {
            const historial = db.muestras
                .filter(m => m.idCliente == req.params.id)
                .map(m => {
                    const emp = db.empleados.find(e => e.empleadoId == m.empleadoId);
                    const exa = db.examenes.find(e => e.idMuestra == m.idMuestra);
                    return { 
                        ...m, 
                        nombreEmpleado: emp ? emp.nombre : 'No asignado',
                        resultadoExamen: exa ? exa.datosExamen : 'No cargado',
                        estadoExamen: exa ? exa.estadoExamen : 'Pendiente',
                        idExamen: exa ? exa.idExamen : null
                    };
                });
            res.render('detalle', { cliente, historial });
        } else { res.status(404).send("Paciente no encontrado"); }
    },
    listarEmpleados: (req, res) => {
        res.render('empleados', { empleados: db.empleados });
    },
    listarExamenes: (req, res) => {
        res.render('examenes', { examenes: db.examenes });
    },
    formMuestra: (req, res) => {
        res.render('nueva_muestra', { clientes: db.clientes, empleados: db.empleados });
    },
    crearMuestra: (req, res) => {
        const nueva = {
            idMuestra: db.muestras.length + 1,
            tipoMuestra: req.body.tipoMuestra,
            estadoMuestra: 'Pendiente',
            idCliente: parseInt(req.body.idCliente),
            empleadoId: parseInt(req.body.empleadoId)
        };
        db.muestras.push(nueva);
        res.redirect('/');
    },
    formExamen: (req, res) => {
        res.render('nuevo_examen', { muestras: db.muestras });
    },
    crearExamen: (req, res) => {
        const nuevoEx = {
            idExamen: db.examenes.length + 500,
            idMuestra: parseInt(req.body.idMuestra),
            datosExamen: req.body.datosExamen,
            estadoExamen: req.body.estadoExamen
        };
        db.examenes.push(nuevoEx);
        res.redirect('/examenes');
    },
    editarEstadoMuestra: (req, res) => {
        const muestra = db.muestras.find(m => m.idMuestra == req.params.id);
        res.render('editar_muestra', { muestra });
    },
    actualizarMuestra: (req, res) => {
        const index = db.muestras.findIndex(m => m.idMuestra == req.params.id);
        if (index !== -1) db.muestras[index].estadoMuestra = req.body.estadoMuestra;
        res.redirect('/');
    },
    editarEstadoExamen: (req, res) => {
        const examen = db.examenes.find(e => e.idExamen == req.params.id);
        res.render('editar_examen', { examen });
    },
    actualizarExamen: (req, res) => {
        const index = db.examenes.findIndex(e => e.idExamen == req.params.id);
        if (index !== -1) {
            db.examenes[index].estadoExamen = req.body.estadoExamen;
            db.examenes[index].datosExamen = req.body.datosExamen;
        }
        res.redirect('/examenes');
    }
};

module.exports = LabController;