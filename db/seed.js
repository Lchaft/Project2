const Recipe = require('../models/Recipes')

const data = require('./seeds.json')

Recipe.remove({}).then(() => {
  return Recipe.collection.insert(data)
})
.then(() => {
  process.exit()
})
