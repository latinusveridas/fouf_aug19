var express = require('express')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')
var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

/*------------------ checkpoints---------------- */
app.use((req, res, next) => {
  const token = req.headers['x-access-token'] || req.headers['authorization'];
  console.log(`Received data is ${token}`)
  jwt.verify(token, 'secret', (err, decodedToken) => {
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
