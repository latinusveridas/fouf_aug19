const prisma = require('./generated/prisma-client')
const prompt = require('enquirer') 
var express = require('express')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')

const PORT = 3000

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//Open area
var open = require('./openarea')
app.use('/open', open)

//Restricted area
var restr = require('./protectedarea')
app.use('/restricted', restr)

app.listen(PORT, () => {console.log(`Listening on port ${PORT}`)})
