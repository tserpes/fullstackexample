const db = require('./db.js');
db.init();

module.exports = {
	getAll: function(callback){
		db.getAll(function(err, res){
			if(err){callback(err);}
			else{callback(null,res);}
		});
	},
	update: function(id,newTodo){
		db.update(id,newTodo);
	},
/*	getTodoById: function(id){
		this.todos.find(function(todo){
			if (todo.id == id){
				return todo;
			}
		});
	},
	add: function(newTodo){
		this.todos.push(newTodo);
	},

	remove: function(id){
		this.todos = this.todos.filter(function(todo){
			if (todo.id != id){
				return todo;
			}
		});
	},
	findIndexById: function(id){
		return this.todos.map(function(todo){
			return todo.id;
		}).indexOf(parseInt(id));
	}*/
};