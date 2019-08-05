const prisma = require('./generated/prisma-client')
const prompt = require('enquirer') 
var express = require('express')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')

const PORT = 3000
var app = express()

app.get('/createquentin', async (req, res) => {
  const user = await prisma.createUser({name : "Quentin",password : "qwerty"})
  res.send(user)
})

app.get('/gettoken', async (req,res) => {
  jwt.sign('thepayload', 'thekey', {expiresIn: '12h'}, (err, token) => {
    console.log(token)
    res.send(token)
  })
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

app.get('/getusers', async (req, res) => {
  const userList = await prisma.users()
  res.send(userList)
})

app.listen(PORT, () => {console.log(`Listening on port ${PORT}`)})
