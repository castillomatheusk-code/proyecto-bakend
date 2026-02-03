const clientes = [];
const muestras = [];
const examenes = [];
const empleados = [];

function seed() {
    if (clientes.length > 0) return; // Evita duplicar datos

    // 1. Empleados
    empleados.push({ empleadoId: 1, nombre: 'Kenner Castillo', cedula: 30116553 });
    empleados.push({ empleadoId: 2, nombre: 'Juan Reategui', cedula: 31876531 });

    // 2. Clientes
    clientes.push({ idCliente: 1, nombreDelCliente: 'jesus paredes', cedulaCliente: 30553434, fechaUltima: '2026-01-28' });
    clientes.push({ idCliente: 2, nombreDelCliente: 'jhonathan jose', cedulaCliente: 31857312, fechaUltima: '2026-01-28' });

    // 3. Muestras (Relacionadas por idCliente)
    muestras.push({ idMuestra: 1, tipoMuestra: 'sangre', estadoMuestra: 'analizada', fechaEntrega: '2026-01-27', idCliente: 1 });
    muestras.push({ idMuestra: 2, tipoMuestra: 'orina', estadoMuestra: 'por_analizar', fechaEntrega: '2026-01-28', idCliente: 1 });

    // 4. Exámenes
    examenes.push({ idExamen: 1, estadoExamen: 'entregado', datosExamen: 'datos_de_examen1', idMuestra: 1 });

    console.log(">> Base de datos en memoria inicializada exitosamente.");
}

module.exports = { clientes, muestras, examenes, empleados, seed };