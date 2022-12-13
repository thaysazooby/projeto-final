const express = require("express");
const router = express.Router();

const controllerConsultoras = require("../controllers/consultorasController");

router.get("/buscar", controllerConsultoras.buscarConsultoraPorId);
router.get("/:id", controllerConsultoras.buscarConsultoraPorId);

router.post("/cadastrarConsultora", controllerConsultoras.cadastrarConsultora);

router.patch("/:id", controllerConsultoras.alterarConsultora);

router.delete("/:id", controllerConsultoras.deletarConsultora);

module.exports = router

