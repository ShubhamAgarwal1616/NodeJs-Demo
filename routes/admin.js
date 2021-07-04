const express = require('express');
const path = require('path');
const rootDir = require('../path/util')

const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
  // res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));

  // In root dir we have absolute path to app.js
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));

  // tell which pug or ejs file to render and pass data to it in JS object
  res.render('add-product', {pageTitle: 'Add Product', path: '/admin/add-product'});

  // handleBars do not support logic so we have to pass all logical values in data
  // res.render('add-product', {
  //   pageTitle: 'Add Product',
  //   path: '/admin/add-product',
  //   formsCSS: true,
  //   productCSS: true,
  //   activeAddProduct: true
  // });

})

router.post('/add-product', (req, res, next) => {
  products.push({title: req.body.title});
  res.redirect('/');
})

exports.routes = router;
exports.products = products;
