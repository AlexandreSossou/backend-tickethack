const  mongoose  = require("mongoose")

const newCity = mongoose.Schema({
   
      cityName: String,
      main: String,
      description: String,
      tempMin: Number,
      tempMax: Number,
    })
   

   


    
    const City = mongoose.model('cities', newCity);
    
    
    module.exports = City;