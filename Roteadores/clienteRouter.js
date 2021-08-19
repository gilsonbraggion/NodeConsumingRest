var express = require('express')
var router = express.Router();


const {
    criarCliente,
    buscarClientes
} = require("../Service/Cliente")


router.get("/", buscarClientes)
router.post("/criarCliente", criarCliente)

module.exports = router;