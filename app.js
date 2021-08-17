const express = require('express')
const app = express()

let chamadasRouter = require('./Roteadores/chamadasRouter')

const port = 3000


app.use('/chamadaRouter', chamadasRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})