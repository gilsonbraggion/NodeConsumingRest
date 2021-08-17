var express = require('express')
var router = express.Router();


router.get('/', function(req, res) {
    res.send('Chegou no Router de chamadas')
})

router.get('/teste', function(req, res) {
    res.send('Chegou no endpoint Teste')
})

module.exports = router;