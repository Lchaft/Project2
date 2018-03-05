// dependencies
const express = require('express')
const bcrypt = require('bcrypt-nodejs')
const flash = require('connect-flash')
const expressSession = require('express-session')
// const passportLocal = require('passport-local')
// const passport = require('passport')
const hbs = require('hbs')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

// create and set up our express app
const app = express()

app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(methodOverride('_method'))

// define a route
// app.get('/', (req, res) => {
//   res.render('Hello Universe!')
// })

// start our server
app.listen(3000, () => console.log('This is working'))
