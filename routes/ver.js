
const { Router } = require("express");
const { verDetalleMantenimiento } = require("../controllers/verDetalleMantenimiento");
const { verMantenimientos } = require("../controllers/verMantenimientos");

const router = Router();

// http GET
router.get('/mant',verMantenimientos );
router.get('/det/:idDet',verDetalleMantenimiento );

module.exports= router;