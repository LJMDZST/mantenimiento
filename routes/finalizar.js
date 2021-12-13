const { Router } = require("express");
const { finalizarMantenimiento } = require("../controllers/finalizarMantenimiento");

const router = Router();

// http PUT
router.put('/',finalizarMantenimiento);

module.exports= router;