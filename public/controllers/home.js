angular.module('home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'views/home.html',
    controller: 'home'
  });
}])

.controller('home', function($location,$rootScope,$scope,$http,userService) {
	
	var requestString;
	if ($rootScope.loginStatus)
		requestString = "?id=" + $rootScope.user.tableId + "&fbId=" + $rootScope.user.id
	else requestString = "?id=false"

	userService.get(requestString).success(function(response){
		
		console.log(response);
		$rootScope.announcementInfo = response;

	})
	$scope.navigateToPostTrip = function(){
		if ($rootScope.loginStatus){
			$rootScope.showLogin = false;
			$location.path('/announcement');
		}
		else $rootScope.showLogin = true
	}

	$('.orange').click(function() {
		$('html, body').animate({scrollTop: $('.list').offset().top }, 800);
		return false;
	});
	/*$( window ).scroll(function() {
  alert(54)
		});
*/
});