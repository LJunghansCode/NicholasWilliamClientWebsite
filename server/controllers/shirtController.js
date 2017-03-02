var mongoose = require('mongoose');
const multer = require('multer');
var shirt = mongoose.model('Shirt');

module.exports = (() => {
	return {
        newShirt : (req, res) => {
            console.log(req.file);
            const shirtToBeAdded = new shirt(req.body.shirtForm);
            shirtToBeAdded.save();
            res.json({Shirt: req.body});
        },
        allShirts : (req, res) => {
            shirt.find({}, (err, data) => {
                if(data){
                    res.json({shirts: data});
                }
            });
        },
        removeShirt : (req, res) => {
            shirt.findOneAndRemove({_id: req.body.id}, (err, data) => {
                if(!err){
                    res.json({remove:true});
                }
            });   
        } 
    };
})();