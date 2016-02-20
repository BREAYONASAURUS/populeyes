'use strict';
angular.module('frontendApp.controllers').controller('MainCtrl', function($rootScope, $scope, $state, $timeout, HttpService) {
	
	$scope.hitInstragram = function() {

    	HttpService.getRequest('api', '/insta/auth',function(err, data){
            if(!err) {
               console.log(data);

            }  else {
                console.log(data);
            }
        });
    };
});
