const { prisma } = require('./generated/prisma-client')
var answers = {foo: 'baz'};
var List = require('prompt-list');

/*
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
*/

const list = new List({message: `What do you wanna do ?`,choices:[`Signin`,`Signup`], when:function(answers) {return answers.foo === 'baz';}})

list.run(answers)
  .then(async function(answer) {
    switch (answer) {
      case "Signin":
        break
      case  "Signup":
        break
      default:
        // do nothing
    }
  });

// Prompt with Name & JWT, if success -> prompt with new choices
async function authUser() {
  const list = new List({message: `Please enter the name & jwt`, choices: [`Name`, `JWT`],when: function(answers) {return answers.foo === 'baz';}})
  list.run(answers).then(
}
