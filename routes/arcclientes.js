const express = require('express');
const router = express.Router();

const clientesController = require('../controllers/clientesController');

// Mostrar Todos los clientes
// api/cliente
router.get('/', clientesController.todoslosclientes);

// buscar x nombre
// /api/cliente
router.get('/xcliente', clientesController.buscarPorNombre);

// crear cliente
// /api/cliente
router.post('/crearcliente', clientesController.crearCliente);

// crear cliente
// /api/cliente
router.put('/updatecliente', clientesController.updateCliente);

// crear cliente
// /api/cliente
router.put('/undoupdatecliente', clientesController.undoupdateCliente);

// editar por cada celda cliente
// /api/cliente
router.put('/editrowmodelcliente', clientesController.editrowmodelcliente);






module.exports = router;