const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    throw err;
  }
  console.log('mongo connected...');
  const db = client.db('TodoApp');
  db.collection('Users').find({age: 55}).toArray().then((docs) => {
    console.log(`Todos`);
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log(`unable to fetch Todos`);
  });
});
