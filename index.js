var express = require('express');
var app = express();
var todo = require('./todo/index.js');

app.get('/',function(req,res){
	res.send("Hello from Node-Express");
})

app.get('/arrow',(req,res) => res.send("Arrow Function is working."));

app.use("/todo",todo);

var server = app.listen(3000,function(){
   var port = server.address().port
   console.log("Application running at port %s", port)
});