
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo');

var toDoSchema = mongoose.Schema({
	title: String,
	completed: Boolean,
	date: Date
});

var Todo = mongoose.model('Todo', toDoSchema);

module.exports = Todo;