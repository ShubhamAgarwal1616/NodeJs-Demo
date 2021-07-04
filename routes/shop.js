const express = require('express');
const path = require('path');
const rootDir = require('../path/util')
const adminData = require('./admin');
const productsController = require('../controllers/products');

const router = express.Router();

// The get, put, post method do exact match of route while use does partial match
router.get('/', productsController.getProducts)

module.exports = router;
