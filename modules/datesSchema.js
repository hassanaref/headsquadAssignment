const mongoose = require('mongoose')
const Schema = mongoose.Schema

//mongoDB storage
const dateSchema = new mongoose.Schema({
  date: Date,
  data: Schema.Types.Mixed
})

module.exports = mongoose.model('date', dateSchema)
