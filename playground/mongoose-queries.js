const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// var id = '5b584b4c4f105bad8db2c0cc1';
//
// if(!ObjectID.isValid(id)){
//   console.log('id not valid baby');
// }

// Todo.find({
//   _id: id
// }).then((todos)=> {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo)=> {
//   console.log('Todos', todo);
// });

// Todo.findById(id).then((todo)=> {
//   if(!todo){
//     return console.log('id not found baby');
//   }
//   console.log('Todo by id', todo);
// }).catch(e=>{
//   console.log(e);
// })

// User.findById('5b58749005f168d1036d6d65').then((user)=>{
//   if(!user){
//     return console.log('unable baby');
//   }
//   console.log(JSON.stringify(user, undefined, 2));
// }, e=>{
//   console.log(e);
// })
