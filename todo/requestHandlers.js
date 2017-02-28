var express = require('express');
var Todo = require('./toDoModel');
var requestHandler_todo = express();
var bodyParser = require('body-parser');
requestHandler_todo.use(bodyParser.json())


requestHandler_todo.get('/', function (req, res) {
  	Todo.find(function (err, todos) {
	  if (err) return console.error(err);
	  console.log("Fetched Todos : \n" + todos);
	  	var item_json = {
		items : todos
	}
   res.send(item_json);
	});
});

requestHandler_todo.post('/create', function (req, res) {
	var received_todo = req.body.todo;
	var myTodo = new Todo({ title: received_todo.title, completed: received_todo.completed, date: received_todo.date });
	myTodo.save(function (err, myTodo) {
	  if (err) return console.error(err);
	  console.log("Task Saved : " + myTodo.title);
	});

});

requestHandler_todo.post('/modifyCompleted', function (req, res) {
	console.log(req.body.todo);
	var received_todo = req.body.todo;
	Todo.update({_id: received_todo._id}, {
    title: received_todo.title,
    completed: received_todo.completed, 
    date: received_todo.date
	}, function(err, numberAffected, rawResponse) {
	   if (err) return console.error(err);
	   console.log("Updated Rows : "+ JSON.stringify(numberAffected));
	})
});

requestHandler_todo.post('/modifyTitle', function (req, res) {
	var received_todo = req.body.todo;
	Todo.update({_id: received_todo._id}, {
    title: received_todo.title,
    completed: received_todo.completed, 
    date: received_todo.date
	}, function(err, numberAffected, rawResponse) {
	   //handle it
	   if (err) return console.error(err);
	   console.log("Updated Rows : "+ JSON.stringify(numberAffected));
	})
});

requestHandler_todo.delete('/deleteTodo', function (req, res) {
	var received_todo = req.body.todo;
	Todo.remove({ _id: received_todo._id }, function(err, res) {
		if (err) return console.error(err);
		console.log("Deleted : " + JSON.stringify(res));
});
});

module.exports = requestHandler_todo;