const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err, client) => {
  if (err) {
    throw err;
  }
  console.log('mongoDB connected...');

  const db = client.db('TodoApp');

//Below Query is for deleteMany
  // db.collection('Todos').deleteMany({text: 'Delete'}).then((result) => {
  //   console.log(result);
  // });

  //Below Query is for deleteOne
  // db.collection('Todos').deleteOne({text: 'Delete'}).then((result) => {
  //   console.log(result);
  // })

  //Below Query findOneAndDelete
  db.collection('Todos').findOneAndDelete({text: 'Delete'}).then((result) => {
    console.log(result.value);
  });
});
