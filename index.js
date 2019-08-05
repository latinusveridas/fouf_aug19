const prisma = require('./generated/prisma-client')
const prompt = require('enquirer') 
const express = require('express')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')

const PORT = 3000
const app = express()

app.get('/createquentin', (req, res) => {
  const user = await prisma.createUser({name : "Quentin",password : "qwerty"})
  res.send(user)
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

app.get('/getusers', (req, res) => {
  const userList = await prisma.users()
  res.send(userList)
})

app.listen(PORT, () => {console.log('listening on port 3000')})
