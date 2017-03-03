var mongoose = require('mongoose');

var shirtPhotoSchema = mongoose.Schema({
    name:{type:String},
    localPath:{type:String}
});
mongoose.model('ShirtPhoto', shirtPhotoSchema);