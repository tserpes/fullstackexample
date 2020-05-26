const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static('./'));

const todos = require('./model.js');

app.get('/api/todos',function(req,res){
	todos.getAll(function(err,result){
		if(err){console.log(err);}
		else{res.send(result);}
	});
});

app.post('/api/todos/:id',function(req,res){
	todos.update(req.params.id,req.body);
	res.send({type:'message',message:'Object was updated'});
});

/*app.get('/api/todos/:id',function(req,res){
	res.send(todos.getTodoById(req.params.id));
});*/

app.listen(3000);