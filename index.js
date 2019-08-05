const prisma = require('./generated/prisma-client')
const prompt = require('enquirer') 
var express = require('express')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')

const PORT = 3000
var app = express()

//Open area


//Restricted area
var restr = require('./protectedarea')
app.use('/restricted', restr)

app.listen(PORT, () => {console.log(`Listening on port ${PORT}`)})
