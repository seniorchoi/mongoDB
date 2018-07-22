// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp' , { useNewUrlParser: true }, (err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('connected to mongo baby');
  var db= client.db('TodoApp');

  // db.collection('Todos').findOneAndUpdate({
  //   text: 'Something baby'
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then(result=>{
  //   console.log(result);
  // })
  db.collection('Users').findOneAndUpdate({
    name: 'Sean'
  }, {
    $inc: {
      age:-1
    }
  }, {
    returnOriginal: false
  }).then(result=>{
    console.log(result);
  })



  // client.close();
});
