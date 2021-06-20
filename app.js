const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

// This middleware is required to parse the body of all requests and hence it needs to be on top.
// The body parser calls next internally and hence we do not need to call it
app.use(bodyParser.urlencoded({extended: false}));

// this middleware is added at end of section-5 to load contents in public folder statically
// this will allow to use css files to be accessible in html files using file system path
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(3000);
// const server = http.createServer();
// server.listen(3000);
