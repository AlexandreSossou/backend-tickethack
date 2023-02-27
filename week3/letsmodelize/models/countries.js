// Insert your code here
const citySchema = {
    name: String,
    flagImg : String,
    currency: Number,
    population : {
        populationNbr : Number,
        year : Date, 
    }

}

const City = mongoose.model('countries', citySchema);