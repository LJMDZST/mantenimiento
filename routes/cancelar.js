const { Router } = require("express");
const { cancelarMantenimiento } = require("../controllers/cancelarMantenimiento");

const router = Router();

// http PUT
router.put('/',cancelarMantenimiento);

module.exports= router;