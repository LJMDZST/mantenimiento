const { Router } = require("express");
const { cancelarMantenimiento } = require("../controllers/cancelarMantenimiento");

const router = Router();

// http POST
router.delete('/cancelar/:idDet',cancelarMantenimiento);

module.exports= router;