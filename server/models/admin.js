var mongoose = require('mongoose');

var adminSchema = mongoose.Schema({
    name:{type:String},
    password:{type:String}
});
mongoose.model('Admin', adminSchema);