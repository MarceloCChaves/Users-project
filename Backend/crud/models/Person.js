const mongoose = require('mongoose')

const Person = mongoose.model('Person', {
  name: String,
  role: String,
  avatar: String,
  salary: Number,
})

module.exports = Person