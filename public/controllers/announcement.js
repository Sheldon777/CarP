angular.module('announcement', ['ngRoute','ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/announcement', {
    templateUrl: 'views/announcement.html',
    controller: 'announcement'
  });
}])

.controller('announcement', function($http,$scope,formService) {
 	$scope.today = new Date();
 	$scope.formData = {};
	$http.get('/announcement')

	$scope.openCalendar = function($event) {
	    $event.preventDefault();
	    $event.stopPropagation();
	    $scope.calendar = true;
 	}

  	$scope.dateOptions = {
	    formatYear: 'y',
	    startingDay: 1,
	}; 

	$scope.submit = function(){
		formService.create($scope.formData).success(function(data){
			
		})
	}

});