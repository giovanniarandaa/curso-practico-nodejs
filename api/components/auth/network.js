const express = require('express')
const response = require('../../../network/response')
const Controller = require('./index')

const router = express.Router()

router.post('/login', function(req, res, next) {
    Controller.login(req.body.username, req.body.password)
        .then(data => response.success(req, res, data, 200))
        .catch(next)
})

module.exports = router