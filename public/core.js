angular.module('cars', [
	'ngRoute',
	'announcement',
	'home',
  'myPosts',
	'directives',
	'formService',
	'facebookService',
  'facebookFriends',
  'userService',
  'mainController'
]).config(['$routeProvider', function($routeProvider) {

  $routeProvider.otherwise({redirectTo: '/home'});
}])
.run(['$rootScope', '$window', 'facebookService', 
  function($rootScope, $window, facebookService) {

  $rootScope.user = {};
  $rootScope.logout = facebookService.logout;

  $window.fbAsyncInit = function() {
    // Executed when the SDK is loaded

    FB.init({ 

      /* 
       The app id of the web app;
       To register a new app visit Facebook App Dashboard
       ( https://developers.facebook.com/apps/ ) 
      */

      appId: '1630596227190720', 

      /* 
       Adding a Channel File improves the performance 
       of the javascript SDK, by addressing issues 
       with cross-domain communication in certain browsers. 
      */

      

      /* 
       Set if you want to check the authentication status
       at the start up of the app 
      */

      status: false, 

      /* 
       Enable cookies to allow the server to access 
       the session 
      */

      cookie: true, 

      /* Parse XFBML */

      xfbml: true 
    });

    facebookService.watchLoginChange();

  };

  // Are you familiar to IIFE ( http://bit.ly/iifewdb ) ?

  (function(d){
    // load the Facebook javascript SDK

    var js, 
    id = 'facebook-jssdk', 
    ref = d.getElementsByTagName('script')[0];

    if (d.getElementById(id)) {
      return;
    }

    js = d.createElement('script'); 
    js.id = id; 
    js.async = true;
    js.src = "//connect.facebook.net/en_US/all.js";

    ref.parentNode.insertBefore(js, ref);

  }(document));

}]);
