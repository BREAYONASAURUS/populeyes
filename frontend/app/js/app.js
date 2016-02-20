'use strict';
angular.module('frontendApp', ['frontendApp.controllers', 'ui.router', 'ngAnimate'])
  .run(function($rootScope) {
      $rootScope.sleep = function(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
          if ((new Date().getTime() - start) > milliseconds){
            break;
          }
        }
      };
  })
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,  $urlRouterProvider) {
      /*$locationProvider.html5Mode(true);*/
      $urlRouterProvider.otherwise('main');

      $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: 'views/main.html'
    
      });
  }]);
