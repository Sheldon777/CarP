var connectionProvider = require('./models/connectionProvider');



module.exports = function(app) {

	// api ---------------------------------------------------------------------
	// get all todos
	app.get('/home', function(req, res) {
/*		var connection = connectionProvider.connectionProvider.getMysqlConnection();
		connection.query("INSERT INTO users (LastName) VALUES ('Cardina')",function(e,result){
	connection.query("INSERT INTO users (LastName) VALUES ("+result.insertId+")",function(e,r,f){
	console.log(result)
	console.log(r)
})

connection.end()

        
});*/
	})

	app.get('/announcement', function(req, res) {
		var connection = connectionProvider.connectionProvider.getMysqlConnection();
		connection.query("SELECT * FROM users",function(e,r,f){
	console.log(r)
})


        
	});

	// create todo and send back all todos after creation
	app.post('/home', function(req, res) {
		var connection = connectionProvider.connectionProvider.getMysqlConnection();
		connection.query("INSERT INTO countries (country) VALUES('"+ 
			req.body.location.name.split(',')[2].trim()+"') ON DUPLICATE KEY UPDATE country=country, country_Id=LAST_INSERT_ID(country_Id)"
		,function(err,countryResult){
			connection.query("INSERT INTO cities (city,country_Id) VALUES('"+ 
			req.body.location.name.split(',')[1].trim()+"','"+countryResult.insertId+"') ON DUPLICATE KEY UPDATE city=city, city_Id=LAST_INSERT_ID(city_Id)"
				,function(err,cityResult){
					connection.query(
					"INSERT INTO users (LastName,FirstName,Gender,Age,Mail,FBId,City_Id) VALUES('"+ 
					req.body.last_name+
					"','"+req.body.first_name+
					"','"+req.body.gender+
					"',"+(req.body.age_range.max+req.body.age_range.min)/2+
					",'"+req.body.email+
					"','"+req.body.id+
					"',"+cityResult.insertId+
					")\
					ON DUPLICATE KEY UPDATE FBId=FBId",function(err,user){
					 	console.log(user)
					})
		        })
		})


	});

	// delete a todo
	app.delete('/api/todos/:todo_id', function(req, res) {
		Todo.remove({
			_id : req.params.todo_id
		}, function(err, todo) {
			if (err)
				res.send(err);

			getTodos(res);
		});
	});
	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});

};

	