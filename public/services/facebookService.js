angular.module('facebookService', [])

  // super simple service
  // each function returns a promise object 
  .service("facebookService",function($rootScope,facebookFriends,Users){
    
    this.watchLoginChange = function() {

  var _self = this;

  FB.Event.subscribe('auth.authResponseChange', function(res) {

    if (res.status === 'connected') {
      
      /* 
       The user is already logged, 
       is possible retrieve his personal info
      */
      
      

      _self.getUserInfo();



      /*
       This is also the point where you should create a 
       session for the current user.
       For this purpose you can use the data inside the 
       res.authResponse object.
      */

    } 
    else {
       
        $rootScope.user = _self.user = {};
        $rootScope.loginStatus = false;
        $rootScope.$digest();
    }

    });

  }
  this.getUserInfo = function() {

    var _self = this;
    FB.api('/me', {fields: 'gender, first_name, last_name, email,location,age_range'},function(response) {
            console.log(response);
            $rootScope.user = _self.user = response;
            $rootScope.loginStatus= true;
       $rootScope.$digest();
       Users.create(response);


    });
    facebookFriends.getFriends().then(function(response){
      $rootScope.friends = response
      console.log(response)
    })

  }

  
})
