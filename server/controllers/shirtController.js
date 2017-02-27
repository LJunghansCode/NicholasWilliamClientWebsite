var mongoose = require('mongoose');
var shirt = mongoose.model('Shirt');

module.exports = (() => {
	return{
        newShirt : (req, res) => {
            console.log(req.body.shirtForm);
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
        } 
    };
})();