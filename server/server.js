var {ObjectID} = require('mongodb');

var express = require('express');
var bodyParser = require('body-parser');


var {mongoose} = require('./db/mongoose')
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000

app.use(bodyParser.json());

app.post('/todos',(req,res) => {
	
	var newTodo = new Todo({
		text: req.body.text,
	});

newTodo.save().then((doc) => {
	res.send(doc);
}, (e) => {
	res.status(400).send(e);
});

});


app.get('/todos',(req,res) => {
	Todo.find().then((todos) => {
		res.send({todos});
	}, (e) => {
		res.status(400).send(e);
	})
});

app.get('/todos/:id', (req,res) => {
	var id = req.params.id;

	if(!ObjectID.isValid(id)) {
		return res.status(404).send();
	}

	Todo.findById(id).then((todo) => {
		if(!todo) {
			return res.status(404).send("Id is not found");
		}
	       res.send({todo});
	}, (e) => {
		res.status(400).send(e);
	})

})


app.listen(port, () => {
	console.log(`started at port ${port}`);
});

module.exports = {app}











