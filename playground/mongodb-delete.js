// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp' , { useNewUrlParser: true }, (err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('connected to mongo baby');
  var db= client.db('TodoApp');

  // deleteMany
  db.collection('Todos').deleteMany({text:'sexy man'})
    .then((result)=>{
      console.log(result);
    })
  // deleteOne
  db.collection('Todos').deleteOne({text:'swag'})
    .then((result)=>{
      console.log(result.result);
    })
  // findOneAndDelete
  db.collection('Todos').findOneAndDelete({completed:true})
    .then((result)=>{
      console.log(result);
    });



  // client.close();
});
