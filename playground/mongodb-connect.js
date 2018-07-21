// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp' , { useNewUrlParser: true }, (err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('connected to mongo baby');

  var db= client.db('TodoApp')

  // db.collection('Todos').insertOne({
  //   text: 'Something baby',
  //   completed: false
  // }, (err, result)=>{
  //   if(err){
  //     return console.log('Unable to insert babe', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  //   client.close();
  // });
  // db.collection('Users').insertOne({
  //   name:'Sean',
  //   age: 24,
  //   location: 'Korea baby'
  // }, (err, result) => {
  //   if(err){
  //     return console.log('ulable to inserttttt', err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
    client.close();
  // })

});
