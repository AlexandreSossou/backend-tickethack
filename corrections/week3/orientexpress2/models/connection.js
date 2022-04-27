const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://.../orientexpress';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .catch(error => console.error(error))
  .then(() => console.log('Database connected'));
