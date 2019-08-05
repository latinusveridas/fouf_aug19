const {prisma} = require('./generated/prisma-client')
const prompt = require('enquirer') 
const express = require('express')
const bodyParser = require('body-parser')

const List = require('prompt-list')
var answers = {foo: 'baz'}

prisma.createPicture({owner: 'Quentin', picture_name: '01.jpg'})
prisma.createPicture({owner: 'Quentin', picture_name: '02.jpg'})
prisma.createPicture({owner: 'Quentin', picture_name: '03.jpg'})
prisma.createPicture({owner: 'Quentin', picture_name: '04.jpg'})
prisma.createPicture({owner: 'Quentin', picture_name: '05.jpg'})
prisma.createPicture({owner: 'Quentin', picture_name: '06.jpg'})
prisma.createPicture({owner: 'Quentin', picture_name: '07.jpg'})
prisma.createPicture({owner: 'Quentin', picture_name: '08.jpg'})
prisma.createPicture({owner: 'Quentin', picture_name: '09.jpg'})
prisma.createPicture({owner: 'Quentin', picture_name: '10.jpg'})

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

