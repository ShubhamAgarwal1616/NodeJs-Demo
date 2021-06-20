const express = require('express');
const path = require('path');
const rootDir = require('../path/util')

const router = express.Router();

router.get('/add-product', (req, res, next) => {
  // res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));

  // In root dir we have absolute path to app.js
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));

})

router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
})

module.exports = router;
