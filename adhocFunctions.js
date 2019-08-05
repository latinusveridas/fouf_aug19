const prisma = require('./generated/prisma-client')
const prompt = require('enquirer') 
const express = require('express')
const bodyParser = require('body-parser')

const List = require('prompt-list')
var answers = {foo: 'baz'}


const list = new List({
  name: 'order',
  message: 'Which function to launch ? ',
  choices: ['List users', 'Delete user','Sign up'],
  when: function(answers) {return answers.foo === 'baz';}
});

list.run(answers)
  .then(async function(answer) {
    switch (answer) {
      case "List users":
       const userList = await prisma.users()
       console.log(userList)
        break
      case  "Delete user":
        const del = await prisma.deleteManyUsers({name : "Quentin"})
        console.log(`User ${del.name} deleted !`)
        break
      case "Sign up":
        const sign = await prisma.createUser({name : "Quentin",password : "qwerty"})
        console.log (`User ${sign.name} created !`)
        break
      default:
        // do nothing
    }
  });

