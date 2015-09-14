angular.module('mainController', [])

	// inject the Todo service factory into our controller
.controller('mainController', ['$scope','$http','$location', function($scope, $http,$location) {
	$scope.navigateToMyPosts = function(){
		$location.path('/myPosts');
	}
}]);