const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
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

}

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
}

exports.getProducts = (req, res, next) => {
  // __dirname gives absolute path to where the files in which it is used is so we have to use .. to go one level up access html files.
  // res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));

  // In root dir we have absolute path to app.js
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));

  Product.fetchAll((products) => {
    // tell which pug or ejs file to render and pass data to it in JS object
    res.render('shop', {products: products, pageTitle: 'Shop', path: '/'});
  })

  // handleBars do not support logic in if else hence while using them we need to send hasProducts
  // res.render('shop', {
  //   products: products,
  //   pageTitle: 'Shop', path: '/',
  //   hasProducts: products.length > 0,
  //   activeShop: true,
  //   productCSS: true,
  // });
}
