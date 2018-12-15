const path = require('path')
const express = require('express');

const countryData = require('../data.json')

const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => {
  res.json(countryData)
})

module.exports = app

