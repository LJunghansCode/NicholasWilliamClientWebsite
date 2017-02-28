const express = require('express');
const router = express.Router();
const adminController = require('./../controllers/adminController.js');
const shirtController = require('./../controllers/shirtController.js');


/* all of my API backend ROUTES */
router.post('/adminLogin', (req, res, next) => {
        adminController.adminLogin(req, res);
});
router.post('/newShirt', (req, res, next) => {
        shirtController.newShirt(req, res);
});
router.post('/allShirts', (req, res, next) => {
        shirtController.allShirts(req, res);
});
router.post('/shirtImage', (req, res, next) => {
        shirtController.shirtImage(req, res);
});
module.exports = router;

