const mongoose = require('mongoose')

// Make connection with mongoDB database
const { mongodb } = require('./vars')

// CONNECT TO DATABASE
mongoose.connect(mongodb.ipAddress, () => {
  console.log('Connected to MongoDB database')
})
