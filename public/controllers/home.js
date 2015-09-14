angular.module('home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'views/home.html',
    controller: 'home'
  });
}])

.controller('home', function($location,$scope,$http) {
	$('.orange').click(function() {
		$('html, body').animate({scrollTop: $('.list').offset().top }, 800);
		return false;
	});
	$http.get('/home')
	$scope.navigateToPostTrip = function(){
		$location.path('/announcement');
	}
});