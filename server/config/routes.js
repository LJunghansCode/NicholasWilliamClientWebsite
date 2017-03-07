const express = require('express');
const routes = express.Router();
const adminController = require('./../controllers/adminController.js');
const shirtController = require('./../controllers/shirtController.js');
const multer = require('multer');
var path = require('path');
var storage = multer.diskStorage({
  destination: './src/img/shirtPics/',
  filename: function (req, file, cb) {   
      cb(null, file.originalname);
  }
});
var upload = multer({ storage: storage }).array("uploads[]", 12);

/* all of my API backend ROUTES */
routes.post('/adminLogin', (req, res, next) => {
        adminController.adminLogin(req, res);
});
routes.post('/newShirt', (req, res, next) => {
        shirtController.newShirt(req, res);
});
routes.post('/allShirts', (req, res, next) => {
        shirtController.allShirts(req, res);
});
routes.post('/removeShirt', (req, res, next) => {
        shirtController.removeShirt(req, res);
});
routes.get('/getAdmin', (req, res, next) => {
        adminController.getAdmin(req, res);
});
routes.get('/shirtUrls', (req, res, next ) => {
        shirtController.allImages(req, res);
});
routes.post("/upload", upload, function(req, res) {
    shirtController.shirtImage(req, res);
});
module.exports = routes;

