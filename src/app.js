const path = require('path')
const express = require('express');
const exphbs = require('express-handlebars');

const countryData = require('../data.json')

const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

const largePop = pop => (Number(pop) > 1000000)

app.engine(
  "hbs",
  exphbs({
    extname: "hbs",
    layoutsDir: path.join(__dirname, "views", "layouts"),
    partialsDir: path.join(__dirname, "views", "partials"),
    defaultLayout: "main",
    helpers: {
      largePop
    }
  })
)

app.get('/', (req, res) => {
  res.render("home", {
    title: 'Countries',
    username: "Mavis",
  })
})

app.get('/populations', (req, res) => {
  res.render("populations", {
    title: 'Country Populations',
    username: "Mavis",
    countries: countryData
  })
})

app.get('/big-or-small', (req, res) => {
  res.render("big_or_small", {
    title: 'Country Populations',
    username: "Mavis",
    countries: countryData
  })
})

app.get('/capitals', (req, res) => {
  res.render("capitals", {
    title: 'Country Capitals',
    username: "Mavis",
    countries: countryData
  })
})

module.exports = app

