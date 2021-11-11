const { Router } = require("express");
const { cancelarMantenimiento } = require("../controllers/cancelarMantenimiento");

const router = Router();

// http POST
router.post('/',cancelarMantenimiento);

module.exports= router;