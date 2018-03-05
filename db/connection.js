const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/recipes')

mongoose.promise = Promise

module.exports = mongoose
