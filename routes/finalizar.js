const { Router } = require("express");
const { finalizarMantenimiento } = require("../controllers/finalizarMantenimiento");

const router = Router();

// http POST
router.post('/',finalizarMantenimiento);

module.exports= router;