//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        console.log('unable to connect to MongoDB localhost at port 27017');
    }
    console.log('connection successful...');
    const db = client.db('TodoApp');
    // db.collection('Todos').insertOne({
    //     text: 'example text',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         console.log(`unable to insert into todo`, err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));

    db.collection('Users').insertOne({
        name: 'Kishore Bramhamdam',
        age: 39,
        location: 'Edison'
    }, (err, result) => {
        if (err) {
            console.log(`unable to create collection Users`, err);
        }
        console.log(result.ops[0]._id.getTimestamp());

    });
    client.close();
});