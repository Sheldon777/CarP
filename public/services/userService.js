angular.module('userService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Users', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/home');
			},
			create : function(userData) {
				return $http.post('/home', userData);
			},
			delete : function(id) {
				return $http.delete('/home' + id);
			}
		}
	}]);