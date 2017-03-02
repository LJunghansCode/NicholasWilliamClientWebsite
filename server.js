const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const fileUpload = require('express-fileupload');
const express = require('express');
const multer = require("multer");
const DIR = './src/img/shirtPics';


// Get our API routes
require('./server/config/mongoose.js');
const api = require('./server/config/routes.js');
const app = express();



app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist')));
app.use(multer({ dest: DIR}).single('photo'));
app.use('/api', api);

app.use(cors());

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'src/index.html'));
});


const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));