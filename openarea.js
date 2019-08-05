app.get('/createquentin', async (req, res) => {
  const user = await prisma.createUser({name : "Quentin",password : "qwerty"})
  res.send(user)
})

app.get('/gettoken', async (req,res) => {
  jwt.sign({password: 'x'}, 'thekey', {expiresIn: '12h'}, (err, token) => {
    res.send(token)
  })
})
