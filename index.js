const prisma = require('./generated/prisma-client')
const prompt = require('enquirer') 
const express = require('express')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')

const PORT = 3000
const app = express()

app.get('/CreateUser', (req, res) => {
  res.send('posts')
})

app.use((req, res, next) => {
  const authorization = req.headers
  jwt.verify(authorization, 'secret', (err, decodedToken) => {
    if (err || !decodedToken) {
      res.status(401).send('Not authorized')
      return
    }
    next()
  })
})

app.get('/GetUsers', (req, res) => {
  res.send('protected posts')
})

app.listen(PORT, () => {console.log('listening on port 3000')})
