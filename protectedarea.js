var express = require('express')
var {prisma} = require('./generated/prisma-client')
var jwt = require('jsonwebtoken')
var bodyParser = require('body-parser')
var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

/*------------------ checkpoints---------------- */
app.use((req, res, next) => {
  const rawtoken = req.headers['x-access-token'] || req.headers['authorization'];
  const token = rawtoken.slice(7, rawtoken.length)
  jwt.verify(token, 'thekey', (err, decodedToken) => {
    if (err || !decodedToken) {
      res.status(401).send('Not authorized')
      return
    }
    next()
  })
})

/*------------------ endpoints---------------- */
app.get('/getusers', async (req, res) => {
  const userList = await prisma.users()
  res.send(userList)
})


module.exports = app
