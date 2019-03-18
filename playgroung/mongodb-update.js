// const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client) => {
 	if(err) {
		return console.log("Unable to connect to MongoDB server");
}
    console.log('Connected to MongoDB server');

  const db =client.db('TodoApp');   //updated in new version 

  //findOneAndUpdate

  // db.collection('Todos').findOneAndUpdate({
  // 	_id: new ObjectID("5c8e880ff12179275ccd0135")

  // }, {
  // 	$set: {
  // 		completed: false
  // 	}
  // }, {
  // 	returnOriginal: false
  // }).then((result) => {
  // 	console.log(result);
  // })


db.collection('Users').findOneAndUpdate({
	_id: new ObjectID("5c8f21fdb2bc2c1e4c89aa2d"),
}, {
	$inc: {
		age: 1,
	}
}, {
	returnOriginal: false
}).then((result) => {
	console.log(result);
})






    // client.close();
}) 