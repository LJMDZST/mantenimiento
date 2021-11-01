
const { Router } = require("express");
const { verDetalleMantenimiento } = require("../controllers/verDetalleMantenimiento");
const { verMantenimientos } = require("../controllers/verMantenimientos");

const router = Router();

// http GET
router.get('/Mant',verMantenimientos );
router.get('/Det/:idDet',verDetalleMantenimiento );

module.exports= router;