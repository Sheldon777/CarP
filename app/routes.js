var connectionProvider = require('./models/connectionProvider');
var url = require('url');


module.exports = function(app) {

	
	app.get('/home', function(req, res) {
		var url_parts = url.parse(req.url, true),
			query = url_parts.query,
			connection = connectionProvider.connectionProvider.getMysqlConnection();

		if (query.id =="false")
			connection.query("SELECT a.From_City ,a.To_City,a.Date,a.privacy,\
				a.Time, a.Creation_Date,a.Places,a.Price, c.Brand, c.Model,ad.address,\
				us.LastName,us.FirstName,us.Mail\
				FROM announcements a INNER JOIN cars c ON a.Car_Id=c.Car_Id AND a.Privacy ='public'\
				INNER JOIN addresses ad ON ad.Address_Id = a.Address_Id\
				INNER JOIN users us ON us.User_Id = a.User_Id ",function(e,r){
					var time;
				for(var i = 0;i<r.length;i++){
					time = new Date(r[i].Time);
					r[i].Time = time.getMinutes()<10 ?time.getHours() + ":" +time.getMinutes() +"0" : time.getHours() + ":" +time.getMinutes();
				}
				res.json(r)
				connection.end()
			})
/*		else connection.query("SELECT * FROM announcements WHERE ")
*/		


        
	})

	app.post('/announcement', function(req, res) {
		var connection = connectionProvider.connectionProvider.getMysqlConnection();
		var id = parseInt(req.body.userId); 
		connection.query("INSERT INTO cars (Brand,Model) VALUES('" + req.body.carBrand+"','"+req.body.carModel+"')"
			,function(e,carResult){
				connection.query("INSERT INTO addresses (ADDRESS) VALUES('" + req.body.address+"')"
					,function(e,addressResult){
						connection.query("INSERT INTO announcements (User_Id,From_City,To_City,Date,Time,Creation_Date,Places,Price,Privacy,Car_Id,Address_Id)\
							VALUES("+id+",'"+req.body.from+"','"+req.body.to+"','"+req.body.date+"','"+req.body.myTime+"','"+
								new Date()+"',"+req.body.seatAmount +","+req.body.price+",'"+req.body.privacy+"',"+
								+carResult.insertId+ "," +addressResult.insertId +")"
							,function(e,r,f){
								res.end();
							})
					})
			})
	});

	app.post('/home', function(req, res) {
		var connection = connectionProvider.connectionProvider.getMysqlConnection();
		
			connection.query("INSERT INTO cities (city) VALUES('"+ 
			req.body.location.name.split(',')[0].trim()+"') ON DUPLICATE KEY UPDATE City_Id=LAST_INSERT_ID(City_Id)"
				,function(err,cityResult){
					console.log(cityResult)
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
					ON DUPLICATE KEY UPDATE User_Id=LAST_INSERT_ID(User_Id)",function(err,result){
					 	res.end(result.insertId.toString())
					})
		        })
	});

	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); 
	});

};

	