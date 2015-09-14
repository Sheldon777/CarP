angular.module('facebookFriends', [])

	// super simple service
	// each function returns a promise object 
	.factory('facebookFriends', ['$q',function($q) {
		return {
			 getFriends: function() {
	            var deferred = $q.defer();
	            FB.api('/me/friends', {
	                fields: ' first_name, last_name,id'
	            }, function(response) {
	                if (!response || response.error) {
	                    deferred.reject('Error occured');
	                } else {
	                    deferred.resolve(response);
	                }
	            });
	            return deferred.promise;
        	}	
		}
	}]);