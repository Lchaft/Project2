const express = require('express')
const router = express.Router()

const Recipes = require('../models/recipes')

//loads index
router.get('/', (req, res) => {
  Recipes.find({}).then(recipes => {
      res.render('recipes/index', { recipes })
    })
 });
 
 router.get('/new', (req, res) => {
  res.render('recipes/new');
});

 //shows the properties of the selected recipe
router.get('/:id', (req, res) => {
  Recipes.findOne({ _id: req.params.id }).then(recipes => {
      res.render("recipes/show", recipes);
  });
});

router.delete("/:id", (req, res) => {
  Recipes.findOneAndRemove({ _id: req.params.id }).then(() => {
    res.redirect("/recipes");
  });
});

router.get('/edit/:id', (req, res) => {
  Recipes.findOne({_id: req.params.id }).then(recipes => {
      res.render('recipes/edit', recipes);
  });
});

router.put('/:id', (req,res) => {
  Recipes.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
  .then(recipes => {
      res.redirect('/recipes');
  });
});

//adding a new recipe 
router.post("/", (req, res) => {
  Recipes.create({
    title: req.body.title,
    description: req.body.description,
    instructions: req.body.instructions,
    ingredients: req.body.ingredients
  }).then(recipes => {
    res.redirect("/recipes");
  });
});

 module.exports = router;
