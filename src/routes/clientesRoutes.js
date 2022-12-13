const express = require("express");
const router = express.Router();

const controllerClientes = require("../controllers/clientesController");

router.get("/buscar", controllerClientes.buscarClientes);
router.get("/:id", controllerClientes.buscarClientePorId);

router.post("/cadastrarCliente", controllerClientes.cadastrarCliente);

router.patch("/:id", controllerClientes.alterarCliente);

router.delete("/:id", controllerClientes.deletarCliente);

module.exports = router;
