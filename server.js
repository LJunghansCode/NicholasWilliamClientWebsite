const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require("multer");
const fs = require('fs');
const express = require('express');
const DIR = './src/img/shirtPics';

const upload = multer({dest: DIR});

// Get our API routes
require('./server/config/mongoose.js');
const api = require('./server/config/routes.js');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', api);

app.use(cors());

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'src/index.html'));
});


const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));