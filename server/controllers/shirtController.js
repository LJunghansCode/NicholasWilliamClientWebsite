const mongoose = require('mongoose');
const shirt = mongoose.model('Shirt');
const shirtPhoto = mongoose.model('ShirtPhoto');



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
        removeShirt : (req, res) => {
            shirt.findOneAndRemove({_id: req.body.id}, (err, data) => {
                if(!err){
                    res.json({remove:true});
                }
            });   
        },
        shirtImage: (req, res) => {
            const fileToSee = req.files;
            const originalName = fileToSee[0].originalname;
            const path = `../..${fileToSee[0].path.substr(3,fileToSee[0].path.length - 1)}`;
            shirtPhoto.findOne({'name' : originalName}, (err, photo) => {
                if(photo) {
                    res.json({added: path});
                } else {
                    const photoUrlToBeAdded = new shirtPhoto({'name' : originalName,'localPath' : path });
                    photoUrlToBeAdded.save();
                    res.json({added: path});
                }
            });
        },
        allImages: (req, res) => {
            shirtPhoto.find({}, (err, data) => {
                console.log(data);
                res.json({data: data});
            });
        }
    };
})();





