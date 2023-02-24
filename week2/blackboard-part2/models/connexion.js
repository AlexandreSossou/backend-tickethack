
const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://TriplePatte:PymACPQ5lJo4t07g@cluster0.nehyygn.mongodb.net/blackboard';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
 .then(() => console.log('Database connected'))
  .catch(error => console.error(error));