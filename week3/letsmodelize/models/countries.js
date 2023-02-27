// Insert your code here







const mongoose = require("mongoose")
const countriesSchema = mongoose.Schema({
    name: String,
    flagImg : String,
    currency: String,
    population : [{
        populationNbr : Number,
        year : Date, 
    }]

})

const Countries = mongoose.model('countries', countriesSchema);

module.exports = Countries;