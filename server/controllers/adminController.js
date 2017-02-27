const mongoose = require('mongoose');
const admin = mongoose.model('Admin');
const bcrypt = require('bcrypt');
const saltRounds = 10;


module.exports = (function(){
	return{
        adminLogin: (req, res) => {
            admin.findOne({password: req.body.hash}, function(err, data){
                if(!data){
                    var adminInstance = new admin({password: req.body.hash});
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