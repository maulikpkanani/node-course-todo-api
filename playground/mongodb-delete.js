//const MongoClient = require('mongodb').MongoClient;

const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  (err, db) => {
    if (err) {
      return console.log('Unable to connect to the MongoDB server');
    }
    console.log('Connected to the MongoDB server');

    //delete Many
    // db.collection('Todos')
    //   .deleteMany({ text: 'Eat lunch' })
    //   .then(result => {
    //     console.log(result);
    //   });
    //delete One
    // db.collection('Todos')
    //   .deleteOne({ text: 'Eat lunch' })
    //   .then(result => {
    //     console.log(result);
    //   });

    // //findOneand delete
    // db.collection('Todos')
    //   .findOneAndDelete({ completed: false })
    //   .then(result => {
    //     console.log(result);
    //   });

    // db.collection('Users')
    //   .deleteMany({ name: 'Mak' })
    //   .then(result => {
    //     console.log(result);
    //   });

    db.collection('Users')
      .findOneAndDelete({ _id: new ObjectID('5be340a7a7b1490ec8c712a9') })
      .then(result => {
        console.log(result);
      });

      
    //db.close();
  }
);
