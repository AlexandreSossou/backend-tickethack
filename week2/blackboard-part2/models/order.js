const mongoose = require("mongoose")


const OrderSchema = mongoose.Schema({


total : Number,
shippingFees : Number,
isPaid : Boolean,
purchaseDate: Date,

});

const Order = mongoose.model('orders', OrderSchema);

module.exports = Order;