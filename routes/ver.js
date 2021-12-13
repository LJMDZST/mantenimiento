
const { Router } = require('express');
const { filtrarMantenimientosPorEstado } = require('../controllers/filtrarMantenimientosPorEstado');
const { verDetalleMantenimiento } = require('../controllers/verDetalleMantenimiento');
const { verEquipos } = require('../controllers/verEquipos');
const { verMantenimientos } = require('../controllers/verMantenimientos');
const { verTareas } = require('../controllers/verTareas');
const { verTecnicos } = require('../controllers/verTecnicos');
const { verTipoTareas } = require('../controllers/verTipoTareas');
const { verUsuarios } = require('../controllers/verUsuarios');

const router = Router();

// http GET
router.get('/mant',verMantenimientos );
router.get('/mant/filt/:idEstado',filtrarMantenimientosPorEstado );
router.get('/mant/:idDet',verDetalleMantenimiento );
router.get('/equipos',verEquipos);
router.get('/usuarios',verUsuarios);
router.get('/tecnicos',verTecnicos);
router.get('/tipotareas',verTipoTareas);
router.get('/tareas/:idDet',verTareas);

module.exports= router;