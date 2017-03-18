const mongoose = require('mongoose');
const order = mongoose.model('Order');

module.exports = (function(){
	return{
      newOrder: (req, res) => {
          const tokenCredentials = req.body.token;
          const orderInstance = new order({
              customerEmail : tokenCredentials.email,
              customerName: tokenCredentials.card.name,
              stripeTokenId: tokenCredentials.id,
              shippingAddress: {
                  zipCode: tokenCredentials.card.address_zip,
                  line1: tokenCredentials.card.address_line1,
                  line2: tokenCredentials.card.address_line2,
                  country: tokenCredentials.card.address_country,
                  city: tokenCredentials.card.address_city,
              },
              completed: false
          });
          orderInstance.save();
      }
    };
})();