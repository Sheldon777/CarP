angular.module('announcement', ['ngRoute','ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/announcement', {
    templateUrl: 'views/announcement.html',
    controller: 'announcement'
  });
}])

.controller('announcement', function($http,$scope,$rootScope,formService) {
 	$scope.today = new Date();
 	$scope.formData = {};
	$http.get('/announcement');
	$scope.formData.privacy = "public";
	$scope.formData.myTime = new Date();

	/*$scope.formData = {
		address: "assassa",
		carBrand: "fffff",
		carModel: "afffffffs",
		price: 100,
		privacy: "anyone",
		seatAmount: 5,
		to: "saa",
		userId: "1",
		date : new Date(),
		myTime : new Date(),
		from :"ASSSDDFEF"
	}  	
	formService.create($scope.formData).success(function(response){

  	})*/
   
  $scope.post = function(){
  	$scope.loading = true;
  	$scope.formData.date = $scope.formData.date.toDateString();
  	$scope.formData.userId = $rootScope.user.tableId;
  	formService.create($scope.formData).success(function(response){
  		$scope.loading = false;
  		$scope.formData = {};
  		$scope.myForm.$setPristine();

  	})
  }

	$scope.openCalendar = function($event) {
	    $event.preventDefault();
	    $event.stopPropagation();
	    $scope.calendar = true;
 	}

  	$scope.dateOptions = {
	    formatYear: 'y',
	    startingDay: 1,
	}; 

	

});