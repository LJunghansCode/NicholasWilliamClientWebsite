var mongoose = require('mongoose');

var stencilSchema = mongoose.Schema({
    name:{type:String},
    image:{type:String},
}, {timestamps: true});
mongoose.model('Stencil', stencilSchema);