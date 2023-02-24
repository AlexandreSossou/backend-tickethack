// Insert your code here
const mongoose = require("mongoose")


const shemaSong = mongoose.Schema({
    annoying: Boolean,
    artist: String,
    creationDate: new Date(),
    title: Number,

})


const Song = mongoose.model('songs', shemaSong);

module.exports = Song;