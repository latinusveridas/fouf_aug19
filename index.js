const { prisma } = require('./generated/prisma-client')
var answers = {foo: 'baz'};
var List = require('prompt-list');

var list = new List({
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

      case  "Delete user":

      case "Sign up":
        const sign = await prisma.createUser({name : "Quentin",password : "qwerty"})
        console.log (`User ${sign.name} created !`)

      default:
        // do nothing
    }


  });
