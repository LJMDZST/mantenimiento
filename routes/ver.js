
const { Router } = require('express');
const { filtrarMantenimientosPorEstado } = require('../controllers/filtrarMantenimientosPorEstado');
const { verDetalleMantenimiento } = require('../controllers/verDetalleMantenimiento');
const { verEquipos } = require('../controllers/verEquipos');
const { verMantenimientos } = require('../controllers/verMantenimientos');
const { verUsuarios } = require('../controllers/verUsuarios');

const router = Router();

// http GET
router.get('/mant',verMantenimientos );
router.get('/mant/filt/:idEstado',filtrarMantenimientosPorEstado );
router.get('/mant/:idDet',verDetalleMantenimiento );
router.get('/equip',verEquipos);
router.get('/usrs',verUsuarios);

module.exports= router;