const mongoose = require('mongoose');
const admin = mongoose.model('Admin');
const bcrypt = require('bcrypt');
const saltRounds = 10;


module.exports = (function(){
	return{
        adminLogin: function (req, res) {
            console.log(req.body);
            admin.findOne({password: req.body}, function(err, data){
                if(!data){
                    var adminInstance = new admin(req.body);
                    adminInstance.save(function(err){
                        if(!err){
                            res.json({admin:adminInstance});
                        }else{
                            console.log(err);
                        }
                    });
                }else{
                    res.json({admin:data});
                }
            });
        }

    };
})();