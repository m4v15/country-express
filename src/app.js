const path = require('path')
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const countryData = require('../data.json')

const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => {
  res.render("home", {
    title: 'Country Populations',
    username: "Mavis",
    countries: countryData
  })
})

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.engine(
  "hbs",
  exphbs({
    extname: "hbs",
    layoutsDir: path.join(__dirname, "views", "layouts"),
    defaultLayout: "main"
  })
)

module.exports = app

