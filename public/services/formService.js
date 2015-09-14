angular.module('formService', [])

	// super simple service
	// each function returns a promise object 
	.factory('formService', ['$http',function($http) {
		return {
			create : function(formData) {
				return $http.post('/announcement', formData);
			},
		}
	}]);