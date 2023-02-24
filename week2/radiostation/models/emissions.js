const mongoose = require("mongoose")

// Insert your code here

const monSchema = mongoose.Schema({
    discontinued: Boolean,
    mainAnimator: String,
    name: String,
    nbAnimators: Number,

})


const Emission = mongoose.model('emissions', monSchema);

module.exports = Emission;



