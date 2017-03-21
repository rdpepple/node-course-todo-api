const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
//const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//var id = '58d19f09c4ae84398368660011';
var userId = '58d093d0e0f74e3513259635';

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found!');
//   }
//   console.log('Todo By ID', todo);
// }).catch((e) => console.log(e));

// User.find({
//   _id: userId
// }).then((users) => {
//   console.log('Users', users);
// });
//
// User.findOne({
//   _id: userId
// }).then((user) => {
//   console.log('User', user);
// });

User.findById(userId).then((user) => {
  if (!user) {
    return console.log('User Id not found!');
  }

  console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));
