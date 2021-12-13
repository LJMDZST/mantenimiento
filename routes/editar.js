const { Router } = require("express");
const { editarMantenimiento } = require("../controllers/editarMantenimiento");

const router = Router();

// http PUT
router.put('/',editarMantenimiento );

module.exports = router;