const express = require('express');
const routes = express.Router();
const adminController = require('./../controllers/adminController.js');
const shirtController = require('./../controllers/shirtController.js');
const multer = require('multer');
const DIR = './src/img/shirtPics';
const upload = multer({ dest: DIR });

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
routes.post('/shirtImage', upload.single('image'),  (req, res, next) => {
        shirtController.shirtImage(req, res);
});
routes.post('/removeShirt', (req, res, next) => {
        shirtController.removeShirt(req, res);
});
routes.get('/getAdmin', (req, res, next) => {
        shirtController.getAdmin(req, res);
});
module.exports = routes;

