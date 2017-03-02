var mongoose = require('mongoose');
const multer = require('multer');
var shirt = mongoose.model('Shirt');

module.exports = (() => {
	return {
        newShirt : (req, res) => {
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
        shirtImage : (req, res) => {
          upload(req, res, function (err) {
            if (err) {
            return res.end(err.toString());
            }
            res.end('File is uploaded');
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