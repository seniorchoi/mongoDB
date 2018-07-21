// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp' , { useNewUrlParser: true }, (err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('connected to mongo baby');
  var db= client.db('TodoApp');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5b53540421bea756116052a2')
  //   }).toArray()
  //   .then((docs)=>{
  //     console.log('Todos');
  //     console.log(JSON.stringify(docs, undefined, 2));
  //   },(err)=>{
  //     console.log('unable baby', err);
  // })
  // db.collection('Todos').find().count()
  //     .then((count)=>{
  //       console.log(`Todos count : ${count}`);
  //       console.log(JSON.stringify(docs, undefined, 2));
  //     },(err)=>{
  //       console.log('unable baby', err);
  //   })
  db.collection('Users').find({name:'Swag'}).toArray()
    .then((docs)=>{
      console.log(docs);
    }, (err)=>{
      console.log(err);
    })


  // client.close();
});
