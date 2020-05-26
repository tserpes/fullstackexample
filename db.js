const sqlite3 = require('sqlite3');

const objDB = {
	connection: null,
	init: function(){
		this.connection = new sqlite3.Database('todosDB');
	},
	getAll: function(callback){
		this.connection.all('SELECT * from todos',function(err,rows){
			if(err){callback(err);}
			else{callback(null,rows);}
		});
	},
	update: function(id,todo){
		const query = `UPDATE todos SET id='${todo.id}',name='${todo.name}',completed='${todo.completed}',notes='${todo.notes}' WHERE id=${id}`;
		console.log(query);
		this.connection.run(query);
	}
};

module.exports = objDB;