// const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client) => {
 	if(err) {
		return console.log("Unable to connect to MongoDB server");
}
    console.log('Connected to MongoDB server');

  const db =client.db('TodoApp');   //updated in new version 

  // deleteMany

// db.collection('Todos').deleteMany({text: "what's up"}).then((result) => {
//     console.log(result);
// })

// db.collection('Users').deleteMany({name: "khw"}).then((result) => {
//     console.log(result);
// })



  //deleteOne 

// db.collection('Todos').deleteOne({text: 'Something to do'}).then((result) => {
//     console.log(result);
// })





  //findOneAndDelete

// db.collection('Todos').findOneAndDelete({completed: false}).then((result) =>{
//     console.log(result)
// })

db.collection('Users').findOneAndDelete({_id: new ObjectID('5c8e880ff12179275ccd0136')}).then((result) => {

console.log(result)

})










    // client.close();
}) 