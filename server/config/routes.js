const express = require('express');
const routes = express.Router();
const adminController = require('./../controllers/adminController.js');
const shirtController = require('./../controllers/shirtController.js');
const stencilController = require('./../controllers/stencilController.js');
const multer = require('multer');
var path = require('path');
var storage = multer.diskStorage({
  destination: './src/img/shirtPics/',
  filename: function (req, file, cb) {   
      cb(null, file.originalname);
  }
});
var upload = multer({ storage: storage }).array("uploads[]", 12);
// Stencil Multer
var storageStencil = multer.diskStorage({
  destination: './src/img/stencilPics/',
  filename: function (req, file, cb) {   
      cb(null, file.originalname);
  }
});
var uploadStencil = multer({ storage: storageStencil }).array("uploads[]", 12);

/* all of my API backend ROUTES */
routes.post('/adminLogin', (req, res, next) => {
        adminController.adminLogin(req, res);
});
routes.post('/newShirt', (req, res, next) => {
        shirtController.newShirt(req, res);
});
routes.post("/newStencil", (req, res, next) => {
        stencilController.newStencil(req, res);
})
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
routes.post("/uploadStencil", uploadStencil, function(req, res) {
    stencilController.stencilImage(req, res);
});
module.exports = routes;

