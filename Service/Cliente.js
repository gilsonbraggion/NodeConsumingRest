const db = require("../DataBase/db");

const criarCliente = async (req, res) => {

    if (!req.body.nome || !req.body.idade || !req.body.uf) {
        res.status(500).send('Preenche tudo ai ')    
    } else {
        const inserirParametros = await db.insertCustomer({nome: req.body.nome, idade: req.body.idade, uf: req.body.uf});
        res.status(201).send('Retorno ' + inserirParametros)    
    }
}

const atualizarCliente = async (req, res) => {
    if (!req.body.nome || !req.body.idade || !req.body.uf) {
        res.status(500).send('Preenche tudo ai ')    
    } else {
        const customer = {
            ...req.body
        }

        const inserirParametros = await db.updateCustomer(req.body.id, customer);
        res.status(201).send('Retorno ' + inserirParametros)    
    }
}

const buscarClientes = async (req, res) => {
    const clientes = await db.selectCustomers();
    res.status(200).send(clientes)
}

module.exports = {
    criarCliente,
    atualizarCliente,
    buscarClientes
}