const express = require('express');
const path = require('path');
const rootDir = require('../path/util')

const router = express.Router();

// The get, put, post method do exact match of route while use does partial match
router.get('/', (req, res, next) => {
  // __dirname gives absolute path to where the files in which it is used is so we have to use .. to go one level up access html files.
  // res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));

  // In root dir we have absolute path to app.js
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
})

module.exports = router;
