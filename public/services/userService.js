angular.module('userService', [])

	
	.factory('userService', ['$http',function($http) {
		return {
			get : function(path) {
				return $http.get('/home'+path);
			},
			create : function(userData) {
				return $http.post('/home', userData);
			},
			delete : function(id) {
				return $http.delete('/home' + id);
			}
		}
	}]);