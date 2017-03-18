var mongoose = require('mongoose');

var orderSchema = mongoose.Schema({
    customerEmail:{type:String},
    customerName:{type:String},
    stripeTokenId:{type:String},
    shippingAddress:{type:Object},
    completed:{type:Boolean},
}, {timestamps: true});
mongoose.model('Order', orderSchema);