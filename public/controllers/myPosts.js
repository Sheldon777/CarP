angular.module('myPosts', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/myPosts', {
    templateUrl: 'views/myPosts.html',
    controller: 'myPosts'
  });
}])

.controller('myPosts',function(){
	
})