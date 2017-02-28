const mongoose = require('mongoose');
const admin = mongoose.model('Admin');
const bcrypt = require('bcrypt');
const saltRounds = 10;


module.exports = (function(){
	return{
        adminLogin: (req, res) => {
            admin.findOne({password: req.body.hash}, (err, data) => {
                if(data){
                  req.session.admin = {admin: data};
                  res.json({admin:data});
                }
            });
        },
        getAdmin: (req, res) => {
            if(!req.session.admin){
                res.json({failed:true});
            }else{
                res.json({loggedInAdmin:true});
            }
        }
    };
})();