const http = require('http');
const bodyParser = require('body-parser');
const fs = require('fs');
const express = require('express');
const DIR = './src/img/shirtPics';
const multiparty = require('multiparty');
const multer = require('multer');
const session = require('express-session');


// Get our API routes
require('./server/config/mongoose.js');
const api = require('./server/config/routes.js');
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use(session({
	secret:'secretLuca',
	resave: false,
	saveUninitialized : true,
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/api', api);

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'src/index.html'));
});


const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));