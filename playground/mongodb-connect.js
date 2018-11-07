//const MongoClient = require('mongodb').MongoClient;

const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  (err, db) => {
    if (err) {
      return console.log('Unable to connect to the MongoDB server');
    }
    console.log('Connect to the MongoDB server');
    // db.collection('Todos').insertOne(
    //   {
    //     text: 'Something to do',
    //     completed: false
    //   },
    //   (err, result) => {
    //     if (err) {
    //       return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //   }
    // );

    // db.collection('Users').insertOne(
    //   {
    //     name: 'Mak',
    //     age: 25,
    //     location: 'ottawa'
    //   },
    //   (err, result) => {
    //     if (err) {
    //       return console.log('Unable to insert User', err);
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    //   }
    // );

    db.close();
  }
);
