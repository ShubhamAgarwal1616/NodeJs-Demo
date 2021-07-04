const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// const expressHbs = require('express-handlebars');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

// add config to app o use pug for dynamic html
// app.set('view engine', 'pug');
// set location where our views are, views is by default so if we use another dir name we need to set it.
// app.set('views', 'views/pugViews');

// make a express-handlebars engines and pass it to view engine just like pug
// app.engine('hbs', expressHbs({
//   layoutsDir: 'views/handlebarViews/layouts',
//   defaultLayout: 'main-layout',
//   extname: 'hbs',
// }));
// app.set('view engine', 'hbs');
// app.set('views', 'views/handlebarViews');

app.set('view engine', 'ejs');
app.set('views', 'views/ejsViews');

// This middleware is required to parse the body of all requests and hence it needs to be on top.
// The body parser calls next internally and hence we do not need to call it
app.use(bodyParser.urlencoded({extended: false}));

// this middleware is added at end of section-5 to load contents in public folder statically
// this will allow to use css files to be accessible in html files using file system path
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
  res.status(404).render('404', {pageTitle: 'Page Not Found'});
})

app.listen(3000);
// const server = http.createServer();
// server.listen(3000);
