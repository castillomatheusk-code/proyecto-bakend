const clientes = [];
const muestras = [];
const examenes = [];
const empleados = [];

function seed() {
    if (clientes.length > 0) return;
    // Semilla inicial para el video
    empleados.push({ empleadoId: 1, nombre: 'Kenner Castillo', cedula: '30116553' });
    empleados.push({ empleadoId: 2, nombre: 'Juan Reategui', cedula: '31876531' });
    clientes.push({ idCliente: 1, nombreDelCliente: 'Jesus Paredes', cedulaCliente: '30553434', fechaUltima: '2026-01-28' });
    clientes.push({ idCliente: 2, nombreDelCliente: 'Jhonathan Jose', cedulaCliente: '31857312', fechaUltima: '2026-01-28' });
    muestras.push({ idMuestra: 1, tipoMuestra: 'Sangre', estadoMuestra: 'Pendiente', idCliente: 1, empleadoId: 1 });
}

module.exports = { clientes, muestras, examenes, empleados, seed };