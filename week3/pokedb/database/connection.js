// Insert your connection string inside this variable
const mongoose = require('mongoose');


const connectionString = 'mongodb+srv://TriplePatte:PymACPQ5lJo4t07g@cluster0.nehyygn.mongodb.net/pokeDB';

mongoose.set("strictQuery", true); // Remove Mongoose warning in console

mongoose
  .connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log("Database connected"))
  .catch(error => console.error(error));


module.exports = connectionString; // Do not edit/remove this line