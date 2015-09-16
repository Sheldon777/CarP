angular.module('mainController', [])

	// inject the Todo service factory into our controller
.controller('mainController',  function($rootScope,$scope, $http,$location,userService) {
	$scope.navigateToMyPosts = function(){
		$location.path('/myPosts');
	}
	$scope.toHome = function(){
		$location.url('/home');
		userService.get("?id=false").success(function(response){
			
			$rootScope.announcementInfo = response;

	})
	}
});