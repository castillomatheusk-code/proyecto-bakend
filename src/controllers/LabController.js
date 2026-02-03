const db = require('../models/index');

class LabController {
    // GET: Listar todos los clientes (Vista Principal)
    listarTodo(req, res) {
        res.render('index', { clientes: db.clientes, title: 'Laboratorio UVM' });
    }

    // GET: Detalle por ID
    verCliente(req, res) {
        const cliente = db.clientes.find(c => c.idCliente == req.params.id);
        if (!cliente) return res.status(404).send("Cliente no encontrado");
        res.render('detalle', { cliente });
    }

    // GET: Últimos 5 elementos (Requisito)
    ultimasMuestras(req, res) {
        const ultimas = [...db.muestras].reverse().slice(0, 5);
        res.json(ultimas);
    }

    // POST: Agregar nuevo cliente
    agregarCliente(req, res) {
        const { nombre, cedula } = req.body;
        db.clientes.push({ idCliente: db.clientes.length + 1, nombreDelCliente: nombre, cedulaCliente: cedula });
        res.redirect('/');
    }

    // PUT: Editar un examen
    editarExamen(req, res) {
        const examen = db.examenes.find(e => e.idExamen == req.params.id);
        if (examen) {
            examen.estadoExamen = req.body.estado || examen.estadoExamen;
            res.json({ mensaje: "Examen actualizado", examen });
        }
    }

    // DELETE: Eliminar una muestra
    eliminarMuestra(req, res) {
        const index = db.muestras.findIndex(m => m.idMuestra == req.params.id);
        if (index !== -1) {
            db.muestras.splice(index, 1);
            res.json({ mensaje: "Muestra eliminada" });
        }
    }
}

module.exports = new LabController();