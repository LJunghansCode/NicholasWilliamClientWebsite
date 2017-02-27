const express = require('express');
const router = express.Router();
const adminController = require('./../controllers/adminController.js');


/* all of my API backend ROUTES */
router.post('/adminLogin', (req, res) => {
        console.log('here');
        adminController.adminLogin(req, res);
});
module.exports = router;

