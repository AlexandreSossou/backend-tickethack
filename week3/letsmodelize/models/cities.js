// Insert your code here
const countrySchema = mongoose.countrySchema({
    name: String,
    currentPopulation : Name,
    country: { type: mongoose.Schema.Types.ObjectId, ref: 'countries' },

   

});

const City = mongoose.model('cities', countrySchema);



