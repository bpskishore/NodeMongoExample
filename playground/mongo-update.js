const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err, client) => {
  if (err) {
    throw err;
  }
  console.log('mongoDB connected...');

  const db = client.db('TodoApp');

  //Below Query findOneAndDelete
  db.collection('Todos').findOneAndUpdate(
    {text: 'Delete'},
    {$set: {text: 'UpdateDelete'}},
    {returnOriginal: false}
  ).then((result) => {
    console.log(result.value);
  });
});
