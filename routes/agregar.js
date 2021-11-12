const { Router } = require("express");
const { agregarMantenimiento } = require("../controllers/agregarMantenimiento");

const router = Router();

// http PUT
router.put('/', agregarMantenimiento );


module.exports = router;