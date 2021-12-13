const { Router } = require("express");
const { agregarMantenimiento } = require("../controllers/agregarMantenimiento");
const { agregarTareas } = require("../controllers/agregarTareas");

const router = Router();

// http PosT
router.post('/', agregarMantenimiento );
router.post('/tareas', agregarTareas );


module.exports = router;