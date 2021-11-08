const { Router } = require("express");
const { editarMantenimiento } = require("../controllers/editarMantenimiento");

const router = Router();

// http POST
router.post('/editar/:idDet',editarMantenimiento );

module.exports= router;