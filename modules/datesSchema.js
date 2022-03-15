const mongoose = require('mongoose')

//mongoDB storage
const dateSchema = new mongoose.Schema({
  date: Date,
  x: {
    y: { type: String, default: 'z' }
  }
})

module.exports = mongoose.model('date', dateSchema)
