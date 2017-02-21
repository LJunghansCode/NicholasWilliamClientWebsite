var mongoose = require('mongoose');

var shirtSchema = mongoose.Schema({
    name:{type:String},
    size:{type:String},
    image:{type:String},
    sold:{type:Boolean, default:false},
}, {timestamps: true});
mongoose.model('Shirt', shirtSchema);