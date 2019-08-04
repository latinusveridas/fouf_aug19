const { prisma } = require('./generated/prisma-client')
/*
// A `main` function so that we can use async/await
async function main() {
  // Create a new user called `Alice`
  //const newUser = await prisma.createUser({ name: 'Alice' })
  //console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`)

  const del = await prisma.deleteManyUsers({name : "Alice" })

  // Read all users from the database and print them to the console
  const allUsers = await prisma.users()
  console.log(allUsers)
}

main().catch(e => console.error(e))

*/

/*server.get('/signup', function(req,res){
})*/

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
