const mongoose = require('../db/connection')

const RecipeSchema = new mongoose.Schema({
    title: String,
    description: String,
    instructions: String,
    ingredients: String
});

const Recipes = mongoose.model("Recipe", RecipeSchema)

module.exports = Recipes;