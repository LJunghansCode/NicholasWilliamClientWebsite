var mongoose = require('mongoose');

var adminSchema = mongoose.Schema({
    password:{type:String}
});
mongoose.model('Admin', adminSchema);