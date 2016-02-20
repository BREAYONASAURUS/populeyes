'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp.controllers').controller('MainCtrl', function($rootScope, $scope, $state, $timeout, $http) {
	$scope.checklist = ["one", "two", "three"];

});
