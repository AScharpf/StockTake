'use strict'
const router = require('express').Router();
const controller = require('./controllers');
router.get('/endpoint', controller.getFunction);
router.post('/endpoint', controller.postFunction);
module.exports = router;