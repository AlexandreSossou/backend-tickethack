const mongoose = require("mongoose")


const playsSchema = mongoose.Schema({


color : String,
number : Number,

});

const Play = mongoose.model('plays', playsSchema);

module.exports = Play;
