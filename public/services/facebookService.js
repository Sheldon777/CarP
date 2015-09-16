angular.module('facebookService', [])

  
  .service("facebookService",function($rootScope,$location,$http,facebookFriends,userService){
    
    this.watchLoginChange = function() {

  var _self = this;

  FB.Event.subscribe('auth.authResponseChange', function(res) {

    if (res.status === 'connected') {
      
      
      
      

      _self.getUserInfo();




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
            if ($rootScope.showLogin){
                $location.path('/announcement');
                $rootScope.showLogin = false;
            } 
            $rootScope.loginStatus= true;
       $rootScope.$digest();
       userService.create(response).success(function(res){
        $rootScope.user.tableId = res;
        var requestString = "?id=" + res + "&fbId=" + $rootScope.user.id
        userService.get(requestString).success(function(){

  })
       });


    });
     
    facebookFriends.getFriends().then(function(response){
      $rootScope.friends = response
      console.log(response)
    })

  }

  
})
