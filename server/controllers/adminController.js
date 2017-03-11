const mongoose = require('mongoose');
const admin = mongoose.model('Admin');
const bcrypt = require('bcrypt');
const saltRounds = 10;


module.exports = (function(){
	return{
        adminLogin: (req, res) => {
            console.log('here')
            admin.findOne({password: req.body.hash}, (err, data) => {
                if(data){
                  req.session.admin = data;
                  res.json({admin:true});
                } else{
                    res.json({notfound:true});
                }
            });
        },
        getAdmin: (req, res) => {
            if(!req.session.admin){
                res.json({password: undefined});
            }else{
               admin.findOne({password: req.session.admin.password}, (err, data) => {
                    res.json({password: data.password});
                 });
            }
        }
    };
})();