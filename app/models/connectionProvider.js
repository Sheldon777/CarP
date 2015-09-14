var mysqlConnectionDb = require('../../config/database'),
	mysql = require('mysql');

var connectionProvider = {
	getMysqlConnection : function(){
		var connection = mysql.createConnection(mysqlConnectionDb.db.connection);
		connection.connect(function(err){
			if (err) throw err;
			console.log("Connected succesfully")
		})
		return connection;
	},
	closeMysqlConnection : function(currentConnection){
		if (currentConnection){
			currentConnection.end(function(err){
				if (err) throw err;

			})
		}
	}
}


module.exports.connectionProvider = connectionProvider;