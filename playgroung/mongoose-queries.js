var {ObjectID} = require('mongodb');

var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');

var {User} = require('./../server/models/user')

// var id = "5c8f85a703dcd914c0111dc0"

// if(!ObjectID.isValid(id)) {
// 	console.log('ID not valid');
// }

// Todo.find({
// 	_id:  id
// }).then((todos) => {
// 	console.log('Todos',todos);
// });

// Todo.findOne({
// 	_id : id
// }).then((todo) => {
// 	console.log('Todo',todo);
// })


// Todo.findById(id).then((todo) => {
// 	if(!todo) {
// 		return console.log("ID is not found")
// 	}
// 	console.log('todo by Id',todo);
// })


//      USER

var id = "5c8f3776f5c9a010a420ff49"

// User.find({
// 	_id: id
// }).then((users) => {
// 	console.log("Users",users)
// });


// User.findOne({
// 	_id: id
// }).then((user) => {
// 	console.log("User",user)
// });

User.findById(id).then((user) => {
	if(!user) {
		console.log("user is not found");
	}
	console.log("User By Id ",user)
},(e) => {
	console.log(e);
})









