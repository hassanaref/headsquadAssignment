const express = require('express')
const dates = require('./routes/date')
const mongoose = require('mongoose')

const app = express()
mongoose.connect('mongodb://localhost/headsquad')
mongoose.connection
  .once('open', () => console.log('good to go!'))
  .on('error', error => {
    console.warn('warning', error)
  })

app.use(express.json())
app.use(dates)

app.listen(3000, () => {
  console.log('headSquad server started')
})
