var mongoose = require('mongoose');
var stencil = mongoose.model('Stencil');
var stencilPhoto = mongoose.model('StencilPhoto');

module.exports = (function(){
	return{
        newStencil : (req, res) => {
            const stencilToBeAdded = new stencil(req.body.stencilForm);
            stencilToBeAdded.save();
            res.json({Stencil: req.body});
        },
        stencilImage: (req, res) => {
            const fileToSee = req.files;
            const originalName = fileToSee[0].originalname;
            const path = `../..${fileToSee[0].path.substr(3,fileToSee[0].path.length - 1)}`;
            stencilPhoto.findOne({'name' : originalName}, (err, photo) => {
                if(photo) {
                    res.json({added: path});
                } else {
                    const photoUrlToBeAdded = new stencilPhoto({'name' : originalName,'localPath' : path });
                    photoUrlToBeAdded.save();
                    res.json({added: path});
                }
            });
        } 

    };
})();