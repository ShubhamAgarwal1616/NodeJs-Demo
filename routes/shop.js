const express = require('express');
const path = require('path');
const rootDir = require('../path/util')
const adminData = require('./admin');

const router = express.Router();

// The get, put, post method do exact match of route while use does partial match
router.get('/', (req, res, next) => {
  // __dirname gives absolute path to where the files in which it is used is so we have to use .. to go one level up access html files.
  // res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));

  // In root dir we have absolute path to app.js
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));

  const products = adminData.products;
  // tell which pug file to render and pass data to it in JS object
  // res.render('shop', {products: products, pageTitle: 'Shop', path: '/'});

  // handleBars do not support logic in if else hence while using them we need to send hasProducts
  res.render('shop', {
    products: products,
    pageTitle: 'Shop', path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
})

module.exports = router;
