'use strict'
const router = require('express').Router();
const controller = require('./controller');
router.get('/', (req, res) => {
  res.send('<h1>hello world</h1>')});
// router.post('/endpoint', controller.postFunction);
module.exports = router;