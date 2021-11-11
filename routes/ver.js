
const { Router } = require("express");
const { filtrarMantenimientosPorEstado } = require("../controllers/filtrarMantenimientosPorEstado");
const { verDetalleMantenimiento } = require("../controllers/verDetalleMantenimiento");
const { verMantenimientos } = require("../controllers/verMantenimientos");

const router = Router();

// http GET
router.get('/mant',verMantenimientos );
router.get('/mant/filt/:idEstado',filtrarMantenimientosPorEstado );
router.get('/mant/:idDet',verDetalleMantenimiento );

module.exports= router;