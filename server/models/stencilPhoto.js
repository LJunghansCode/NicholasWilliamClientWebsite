var mongoose = require('mongoose');

var stencilPhotoSchema = mongoose.Schema({
    name:{type:String},
    localPath:{type:String}
});
mongoose.model('StencilPhoto', stencilPhotoSchema);