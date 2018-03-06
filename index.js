const express = require('express')
const bcrypt = require('bcrypt-nodejs')
const flash = require('connect-flash')
const expressSession = require('express-session')
const passportLocal = require('passport-local')
const passport = require('passport')
const hbs = require('hbs')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const path = require('path')

const app = express()

const recipesController = require('./controllers/recipes');

app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(methodOverride('_method'))
require('./config/passport')(passport)
app.use(passport.initialize())
app.use(passport.session())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.render('index')
})

app.use('/recipes', recipesController)

app.listen(3000, () => console.log('This is working'))
