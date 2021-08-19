const express = require('express')
const app = express()


const port = 3000

// Configuração para chegar o Request com o Json Preenchido
app.use(express.json());
app.use(express.urlencoded({extended: true}))


let chamadasRouter = require('./Roteadores/testeRouter')
let clientesRouter = require('./Roteadores/clienteRouter')

app.use('/chamadaRouter', chamadasRouter);
app.use('/clientes', clientesRouter);


app.get('/', (req, res) => {
  res.send('Favor chamar uma das URLs da API')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})