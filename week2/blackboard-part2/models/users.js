const mongoose = require("mongoose")


const userSchema = mongoose.Schema({


firstName : String,
lastName : String,
email : String,
weight : Number,
inscriptionDate : Date,

});

const User = mongoose.model('users', userSchema);

module.exports = User;