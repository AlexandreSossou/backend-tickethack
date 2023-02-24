const mongoose = require("mongoose")


const OrderSchema = mongoose.Schema({


total : Number,
shippingFees : Number,
isPaid : Boolean,
purchaseDate: Date,

});

const Orders = mongoose.model('orders', OrderSchema);

module.exports = Orders;