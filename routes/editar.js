const { Router } = require("express");
const { editarMantenimiento } = require("../controllers/editarMantenimiento");

const router = Router();

// http POST
router.post('/',editarMantenimiento );

module.exports = router;