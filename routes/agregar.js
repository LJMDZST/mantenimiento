const { Router } = require("express");
const { agregarMantenimiento } = require("../controllers/agregarMantenimiento");
const { agregarTarea } = require("../controllers/agregarTarea");

const router = Router();

// http PosT
router.post('/', agregarMantenimiento );
router.post('/tarea', agregarTarea );


module.exports = router;