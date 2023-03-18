'use strict'
const router = require('express').Router();
const queries = require('./queries.js');
router.get('/', queries.getSpirits);
// router.post('/endpoint', controller.postFunction);
module.exports = router;